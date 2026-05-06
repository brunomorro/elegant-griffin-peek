import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { RefreshCw, LayoutDashboard, Loader2, ArrowUpRight } from "lucide-react";
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f9fc] gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-[#635bff]" />
        <p className="text-[#424770] font-medium animate-pulse">Sincronizando dados...</p>
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
    <div className="min-h-screen bg-[#f6f9fc] text-[#424770] font-sans selection:bg-[#635bff]/20">
      {/* Header */}
      <header className="bg-white border-b border-[#e6ebf1] sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#635bff] p-2 rounded-xl shadow-lg shadow-[#635bff]/20">
              <LayoutDashboard className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0a2540] tracking-tight">AILab Dashboard</h1>
              <p className="text-xs text-[#697386] font-medium uppercase tracking-wider">Financial Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleRefresh} 
              disabled={isFetching}
              variant="ghost"
              className="gap-2 text-[#635bff] hover:bg-[#635bff]/5 font-semibold"
            >
              <RefreshCw className={`h-4 w-4 ${isFetching ? 'animate-spin' : ''}`} />
              Atualizar Dados
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        {/* Summary Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#0a2540]">Visão Geral</h2>
            <span className="text-sm text-[#697386] bg-[#e6ebf1] px-3 py-1 rounded-full font-medium">Tempo Real</span>
          </div>
          <SummaryCards 
            totalPaid={stats?.totalPaid || 0} 
            totalUnpaid={stats?.totalUnpaid || 0} 
          />
        </section>

        {/* Charts Section */}
        <section>
          <h2 className="text-lg font-bold text-[#0a2540] mb-6">Distribuição de Cobranças</h2>
          <ChartsSection pieData={pieData} barData={barData} />
        </section>

        {/* Table Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#0a2540]">Histórico de Faturas</h2>
            <p className="text-sm text-[#697386]">Mostrando {invoices?.length || 0} registros</p>
          </div>
          <InvoicesTable invoices={invoices || []} />
        </section>
      </main>
      
      <footer className="border-t border-[#e6ebf1] mt-12 bg-white">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;