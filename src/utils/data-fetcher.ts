import Papa from 'papaparse';
import { parse, differenceInDays, isBefore, startOfDay, isValid } from 'date-fns';
import { Invoice } from '@/types/dashboard';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1bHcA2HxFRaxVZ8mus5oFVevS7GDnGAaQvEHYX7S4u-M/export?format=csv';

export const fetchDashboardData = async (): Promise<Invoice[]> => {
  const response = await fetch(SHEET_URL);
  const csvText = await response.text();
  
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const today = startOfDay(new Date());
        
        const data = results.data.map((row: any) => {
          const valor = parseFloat(row.valor_fatura?.replace(/[^\d,.-]/g, '').replace(',', '.') || '0');
          
          // Tenta parsear a data em múltiplos formatos
          let dueDate = parse(row.data_vencimento, 'dd/MM/yyyy', new Date());
          
          if (!isValid(dueDate)) {
            dueDate = new Date(row.data_vencimento);
          }

          const isPaid = row.pago?.toLowerCase() === 'sim';
          
          let severity: Invoice['severity'] = 'paid';
          let delayDays = 0;

          if (!isPaid) {
            if (isValid(dueDate) && isBefore(dueDate, today)) {
              delayDays = differenceInDays(today, dueDate);
              if (delayDays <= 5) severity = 'low';
              else if (delayDays <= 10) severity = 'medium';
              else severity = 'high';
            } else {
              severity = 'low';
            }
          }

          return {
            numero_fatura: row.numero_fatura,
            nome_cliente: row.nome_cliente,
            cnpj: row.cnpj,
            contato_cliente: row.contato_cliente,
            email: row.email,
            valor_fatura: valor,
            data_vencimento: dueDate,
            pago: isPaid,
            severity,
            delayDays
          };
        }).filter((inv: any) => isValid(inv.data_vencimento)); // Remove registros com datas inválidas
        
        resolve(data);
      },
      error: (error) => reject(error)
    });
  });
};