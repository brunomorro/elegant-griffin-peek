import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { RefreshCw, LayoutDashboard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { ChartsSection } from "@/components/dashboard/ChartsSection";
import { InvoicesTable } from "@/components/dashboard/InvoicesTable";
import { fetchDashboardData } from "@/utils/data-fetcher";
import { showSuccess, showError } from "@/utils/toast";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const { data: invoices, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['invoices'],
    queryFn: fetchDashboardData,
  });

  useEffect(() => {
    if (isError) {
      showError("Erro ao carregar dados da planilha.");
    }
  }, [isError]);

  const handleRefresh = async () => {
    await refetch();
    showSuccess("Dashboard atualizado com sucesso!");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffaf0] gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#0a0a0a]" />
        <p className="text-[#3a3a3a] font-medium">Moldando seus dados...</p>
      </div>
    );
  }

  const stats = invoices?.reduce((acc, inv) => {
    if (inv.pago) {
      acc.totalPaid += inv.valor_fatura;
      acc.paidCount += 1;
      acc.severityCounts.paid += 1;
    } else {
      acc.totalUnpaid += inv.valor_fatura;
      acc.unpaidCount += 1;
      acc.severityCounts[inv.severity] += 1;
    }
    return acc;
  }, {
    totalPaid: 0,
    totalUnpaid: 0,
    paidCount: 0,
    unpaidCount: 0,
    severityCounts: { paid: 0, low: 0, medium: 0, high: 0 }
  });

  const pieData = [
    { name: 'Pagas', value: stats?.paidCount || 0 },
    { name: 'A Pagar', value: stats?.unpaidCount || 0 },
  ];

  const barData = [
    { name: 'Pagas', quantidade: stats?.severityCounts.paid || 0 },
    { name: 'Até 5 dias', quantidade: stats?.severityCounts.low || 0 },
    { name: '6 a 10 dias', quantidade: stats?.severityCounts.medium || 0 },
    { name: 'Acima de 10 dias', quantidade: stats?.severityCounts.high || 0 },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#0a0a0a] font-sans selection:bg-[#ffb084]/30">
      {/* Top Nav - Clay Style */}
      <nav className="h-16 border-b border-[#e5e5e5] bg-[#fffaf0] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0a0a0a] rounded-lg flex items-center justify-center">
              <LayoutDashboard className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-medium tracking-[-1px]">AILab Dashboard</span>
          </div>
          <Button 
            onClick={handleRefresh} 
            disabled={isFetching}
            className="bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white rounded-[12px] px-6 h-11 font-semibold text-sm transition-all active:scale-95"
          >
            {isFetching ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : null}
            Atualizar
          </Button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-[96px] space-y-[96px]">
        {/* Hero Section */}
        <section>
          <div className="max-w-2xl mb-12">
            <h1 className="text-[56px] leading-[1.05] font-medium tracking-[-2px] mb-6">
              Controle suas cobranças com clareza.
            </h1>
            <p className="text-lg text-[#3a3a3a] leading-relaxed">
              Visualize o fluxo financeiro da AILab em tempo real com dados sincronizados diretamente da sua planilha.
            </p>
          </div>
          <SummaryCards 
            totalPaid={stats?.totalPaid || 0} 
            totalUnpaid={stats?.totalUnpaid || 0} 
          />
        </section>

        {/* Charts Section */}
        <section>
          <div className="mb-12">
            <h2 className="text-[32px] font-medium tracking-[-1px] mb-2">Distribuição de Dados</h2>
            <p className="text-[#6a6a6a]">Análise visual do status e severidade dos atrasos.</p>
          </div>
          <ChartsSection pieData={pieData} barData={barData} />
        </section>

        {/* Table Section */}
        <section>
          <div className="mb-12">
            <h2 className="text-[32px] font-medium tracking-[-1px] mb-2">Histórico Detalhado</h2>
            <p className="text-[#6a6a6a]">Lista completa de faturas e informações de clientes.</p>
          </div>
          <InvoicesTable invoices={invoices || []} />
        </section>
      </main>
      
      <footer className="bg-[#faf5e8] py-[80px] border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 bg-[#0a0a0a] rounded-md" />
            <span className="font-medium tracking-tight">AILab</span>
          </div>
          < />
        </div>
      </footer>
    </div>
  );
};

export default Index;