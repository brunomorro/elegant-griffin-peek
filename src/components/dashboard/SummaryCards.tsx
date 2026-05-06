import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

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
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-none shadow-[0_2px_5px_rgba(0,0,0,0.05),0_1px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden group">
        <CardContent className="p-8 relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <CheckCircle2 className="h-24 w-24 text-[#00d4ff]" />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-[#00d4ff]/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-[#00d4ff]" />
            </div>
            <span className="text-sm font-bold text-[#697386] uppercase tracking-wider">Total Recebido</span>
          </div>
          <div className="text-4xl font-bold text-[#0a2540] tracking-tight">
            {formatCurrency(totalPaid)}
          </div>
          <p className="text-sm text-[#697386] mt-4 font-medium">
            Volume total de pagamentos processados com sucesso.
          </p>
        </CardContent>
      </Card>

      <Card className="border-none shadow-[0_2px_5px_rgba(0,0,0,0.05),0_1px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden group">
        <CardContent className="p-8 relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <AlertCircle className="h-24 w-24 text-[#ff5c93]" />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-[#ff5c93]/10 rounded-lg">
              <AlertCircle className="h-5 w-5 text-[#ff5c93]" />
            </div>
            <span className="text-sm font-bold text-[#697386] uppercase tracking-wider">Total em Aberto</span>
          </div>
          <div className="text-4xl font-bold text-[#0a2540] tracking-tight">
            {formatCurrency(totalUnpaid)}
          </div>
          <p className="text-sm text-[#697386] mt-4 font-medium">
            Valor total aguardando liquidação ou em atraso.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};