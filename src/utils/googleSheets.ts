import Papa from 'papaparse';
import { Invoice, SeverityLevel } from '../types/invoice';
import { parse, differenceInDays, isBefore, startOfDay } from 'date-fns';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1bHcA2HxFRaxVZ8mus5oFVevS7GDnGAaQvEHYX7S4u-M/export?format=csv';

export const fetchInvoices = async (): Promise<Invoice[]> => {
  const response = await fetch(SHEET_URL);
  const csvText = await response.text();
  
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const today = startOfDay(new Date());
        
        const mappedData: Invoice[] = results.data.map((row: any) => {
          // Tenta parsear a data no formato DD/MM/YYYY ou ISO
          let dueDate: Date;
          try {
            dueDate = parse(row.data_vencimento, 'dd/MM/yyyy', new Date());
            if (isNaN(dueDate.getTime())) {
              dueDate = new Date(row.data_vencimento);
            }
          } catch (e) {
            dueDate = new Date(row.data_vencimento);
          }

          const isPaid = row.pago?.toLowerCase() === 'sim';
          const value = parseFloat(row.valor_fatura?.replace(/[^\d,.-]/g, '').replace(',', '.') || '0');
          
          let severity: SeverityLevel = 'Em dia';
          let delayDays = 0;

          if (isPaid) {
            severity = 'Paga';
          } else if (isBefore(dueDate, today)) {
            delayDays = differenceInDays(today, dueDate);
            if (delayDays <= 5) severity = 'Baixa';
            else if (delayDays <= 10) severity = 'Média';
            else severity = 'Máxima';
          }

          return {
            numero_fatura: row.numero_fatura,
            nome_cliente: row.nome_cliente,
            cnpj: row.cnpj,
            contato_cliente: row.contato_cliente,
            email: row.email,
            valor_fatura: value,
            data_vencimento: dueDate,
            pago: isPaid,
            severity,
            dias_atraso: delayDays
          };
        });
        
        resolve(mappedData);
      },
      error: (error) => reject(error)
    });
  });
};