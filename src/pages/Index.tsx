import { useEffect, useState } from "react";
import { SummaryCards } from "@/components/SummaryCards";
import { ChartsSection } from "@/components/ChartsSection";
import { InvoicesTable } from "@/components/InvoicesTable";
import { Button } from "@/components/ui/button";
import { RefreshCw, LayoutDashboard } from "lucide-react";
import { fetchInvoices } from "@/utils/googleSheets";
import { Invoice } from "@/types/invoice";
import { showSuccess, showError } from "@/utils/toast";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchInvoices();
      setInvoices(data);
      showSuccess("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      showError("Falha ao carregar dados da planilha.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">AILab Dashboard</h1>
              <p className="text-slate-500 dark:text-slate-400">Controle de Cobranças e Inadimplência</p>
            </div>
          </div>
          
          <Button 
            onClick={loadData} 
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Atualizar Dashboard
          </Button>
        </div>

        {loading && invoices.length === 0 ? (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="flex flex-col items-center gap-4">
              <RefreshCw className="w-12 h-12 text-indigo-600 animate-spin" />
              <p className="text-slate-500 font-medium">Carregando dados da planilha...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Top Section: Summary Cards */}
            <SummaryCards invoices={invoices} />

            {/* Middle Section: Charts */}
            <ChartsSection invoices={invoices} />

            {/* Bottom Section: Table */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Listagem de Faturas</h2>
              <InvoicesTable invoices={invoices} />
            </div>
          </>
        )}

        <footer className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <MadeWithDyad />
        </footer>
      </div>
    </div>
  );
};

export default Index;