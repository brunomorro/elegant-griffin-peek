import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, AlertCircle } from "lucide-react";
import { Invoice } from "../types/invoice";

interface SummaryCardsProps {
  invoices: Invoice[];
}

export const SummaryCards = ({ invoices }: SummaryCardsProps) => {
  const totalPaid = invoices
    .filter(i => i.pago)
    .reduce((acc, curr) => acc + curr.valor_fatura, 0);
    
  const totalUnpaid = invoices
    .filter(i => !i.pago)
    .reduce((acc, curr) => acc + curr.valor_fatura, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            Total Recebido (Pago)
          </CardTitle>
          <DollarSign className="h-4 w-4 text-emerald-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
            {formatCurrency(totalPaid)}
          </div>
          <p className="text-xs text-emerald-600 mt-1">
            Faturas liquidadas com sucesso
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-rose-50 border-rose-200 dark:bg-rose-950/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-rose-700 dark:text-rose-400">
            Total em Aberto (Não Pago)
          </CardTitle>
          <AlertCircle className="h-4 w-4 text-rose-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-rose-900 dark:text-rose-100">
            {formatCurrency(totalUnpaid)}
          </div>
          <p className="text-xs text-rose-600 mt-1">
            Aguardando pagamento ou em atraso
          </p>
        </CardContent>
      </Card>
    </div>
  );
};