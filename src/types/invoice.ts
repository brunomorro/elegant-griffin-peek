export type SeverityLevel = 'Baixa' | 'Média' | 'Máxima' | 'Paga' | 'Em dia';

export interface Invoice {
  numero_fatura: string;
  nome_cliente: string;
  cnpj: string;
  contato_cliente: string;
  email: string;
  valor_fatura: number;
  data_vencimento: Date;
  pago: boolean;
  severity: SeverityLevel;
  dias_atraso: number;
}