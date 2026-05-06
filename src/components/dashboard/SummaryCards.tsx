import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertCircle } from "lucide-react";

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
      {/* Feature Card Teal */}
      <Card className="bg-[#1a3a3a] border-none rounded-[24px] overflow-hidden transition-transform hover:scale-[1.02] duration-300">
        <CardContent className="p-8 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-white/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-[#a4d4c5]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#a4d4c5]">Total Recebido</span>
          </div>
          <div className="text-[48px] font-medium tracking-[-2px] leading-none mb-4">
            {formatCurrency(totalPaid)}
          </div>
          <p className="text-[#a4d4c5] text-sm font-medium">
            Faturas liquidadas e processadas com sucesso.
          </p>
        </CardContent>
      </Card>

      {/* Feature Card Pink */}
      <Card className="bg-[#ff4d8b] border-none rounded-[24px] overflow-hidden transition-transform hover:scale-[1.02] duration-300">
        <CardContent className="p-8 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-white/10 rounded-lg">
              <AlertCircle className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[1.5px] text-white/80">Total em Aberto</span>
          </div>
          <div className="text-[48px] font-medium tracking-[-2px] leading-none mb-4">
            {formatCurrency(totalUnpaid)}
          </div>
          <p className="text-white/80 text-sm font-medium">
            Aguardando pagamento ou em processo de cobrança.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};