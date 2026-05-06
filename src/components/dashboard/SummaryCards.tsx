import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, AlertCircle, CheckCircle2 } from "lucide-react";

interface SummaryCardsProps {
  totalPaid: number;
  totalUnpaid: number;
}

export const SummaryCards = ({ totalPaid, totalUnpaid }: SummaryCardsProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="border-l-4 border-l-emerald-500 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Recebido</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-emerald-600">{formatCurrency(totalPaid)}</div>
          <p className="text-xs text-muted-foreground mt-1">Faturas marcadas como pagas</p>
        </CardContent>
      </Card>
      <Card className="border-l-4 border-l-rose-500 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total em Aberto</CardTitle>
          <AlertCircle className="h-4 w-4 text-rose-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-rose-600">{formatCurrency(totalUnpaid)}</div>
          <p className="text-xs text-muted-foreground mt-1">Faturas pendentes de pagamento</p>
        </CardContent>
      </Card>
    </div>
  );
};