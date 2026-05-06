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
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-slate-600 font-medium">Carregando dados do AILab Dashboard...</p>
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
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <LayoutDashboard className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">AILab Dashboard</h1>
          </div>
          <Button 
            onClick={handleRefresh} 
            disabled={isFetching}
            variant="outline"
            className="gap-2 border-slate-200 hover:bg-slate-50"
          >
            <RefreshCw className={`h-4 w-4 ${isFetching ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Summary Section */}
        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Visão Geral Financeira</h2>
          <SummaryCards 
            totalPaid={stats?.totalPaid || 0} 
            totalUnpaid={stats?.totalUnpaid || 0} 
          />
        </section>

        {/* Charts Section */}
        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Análise de Cobranças</h2>
          <ChartsSection pieData={pieData} barData={barData} />
        </section>

        {/* Table Section */}
        <section>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Detalhamento de Faturas</h2>
          <InvoicesTable invoices={invoices || []} />
        </section>
      </main>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;