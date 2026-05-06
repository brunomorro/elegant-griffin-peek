export interface Invoice {
  numero_fatura: string;
  nome_cliente: string;
  cnpj: string;
  contato_cliente: string;
  email: string;
  valor_fatura: number;
  data_vencimento: Date;
  pago: boolean;
  severity: 'paid' | 'low' | 'medium' | 'high';
  delayDays: number;
}

export interface DashboardStats {
  totalPaid: number;
  totalUnpaid: number;
  paidCount: number;
  unpaidCount: number;
  severityCounts: {
    paid: number;
    low: number;
    medium: number;
    high: number;
  };
}