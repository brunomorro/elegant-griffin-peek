import { useState } from "react";
import { format, isValid } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Invoice } from "@/types/dashboard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight, Mail, Phone, Building2 } from "lucide-react";

interface InvoicesTableProps {
  invoices: Invoice[];
}

export const InvoicesTable = ({ invoices }: InvoicesTableProps) => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const getSeverityBadge = (severity: Invoice['severity']) => {
    switch (severity) {
      case 'paid':
        return <Badge className="bg-[#a4d4c5] text-[#1a3a3a] hover:bg-[#a4d4c5] border-none font-bold rounded-full px-4">Pago</Badge>;
      case 'low':
        return <Badge className="bg-[#e8b94a] text-[#0a0a0a] hover:bg-[#e8b94a] border-none font-bold rounded-full px-4">Baixa</Badge>;
      case 'medium':
        return <Badge className="bg-[#ffb084] text-[#0a0a0a] hover:bg-[#ffb084] border-none font-bold rounded-full px-4">Média</Badge>;
      case 'high':
        return <Badge className="bg-[#ff4d8b] text-white hover:bg-[#ff4d8b] border-none font-bold rounded-full px-4">Máxima</Badge>;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (date: Date) => {
    if (!isValid(date)) return "Data inválida";
    return format(date, 'dd/MM/yyyy');
  };

  return (
    <div className="bg-[#f5f0e0] rounded-[24px] overflow-hidden border border-[#e5e5e5]">
      <Table>
        <TableHeader className="bg-[#ebe6d6]">
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="text-[#6a6a6a] font-bold uppercase text-[11px] tracking-[1.5px] py-6 px-8">Cliente</TableHead>
            <TableHead className="text-[#6a6a6a] font-bold uppercase text-[11px] tracking-[1.5px] py-6 px-8">Vencimento</TableHead>
            <TableHead className="text-[#6a6a6a] font-bold uppercase text-[11px] tracking-[1.5px] py-6 px-8">Valor</TableHead>
            <TableHead className="text-[#6a6a6a] font-bold uppercase text-[11px] tracking-[1.5px] py-6 px-8">Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow 
              key={invoice.numero_fatura}
              className="group cursor-pointer hover:bg-[#fffaf0] transition-colors border-[#e5e5e5]"
              onClick={() => setSelectedInvoice(invoice)}
            >
              <TableCell className="py-6 px-8">
                <div className="font-medium text-lg tracking-tight text-[#0a0a0a]">{invoice.nome_cliente}</div>
                <div className="text-xs text-[#6a6a6a] font-medium">{invoice.cnpj}</div>
              </TableCell>
              <TableCell className="py-6 px-8 text-[#3a3a3a] font-medium">{formatDate(invoice.data_vencimento)}</TableCell>
              <TableCell className="py-6 px-8 text-[#0a0a0a] font-bold">{formatCurrency(invoice.valor_fatura)}</TableCell>
              <TableCell className="py-6 px-8">{getSeverityBadge(invoice.severity)}</TableCell>
              <TableCell className="py-6 px-8 text-right">
                <ChevronRight className="h-5 w-5 text-[#6a6a6a] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={!!selectedInvoice} onOpenChange={() => setSelectedInvoice(null)}>
        <DialogContent className="sm:max-w-[480px] border-none shadow-2xl p-0 overflow-hidden rounded-[24px] bg-[#fffaf0]">
          <div className="bg-[#0a0a0a] p-10 text-white">
            <DialogHeader>
              <DialogTitle className="text-3xl font-medium tracking-tight">Detalhes do Cliente</DialogTitle>
              <p className="text-[#6a6a6a] font-medium mt-2">Informações de contato e faturamento.</p>
            </DialogHeader>
          </div>
          {selectedInvoice && (
            <div className="p-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#f5f0e0] p-3 rounded-xl">
                  <Building2 className="h-6 w-6 text-[#0a0a0a]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#6a6a6a] uppercase tracking-[1.5px] mb-1">Empresa</p>
                  <p className="text-xl font-medium text-[#0a0a0a] tracking-tight">{selectedInvoice.nome_cliente}</p>
                  <p className="text-sm text-[#3a3a3a]">CNPJ: {selectedInvoice.cnpj}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#f5f0e0] p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-[#0a0a0a]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#6a6a6a] uppercase tracking-[1.5px] mb-1">Contato</p>
                    <p className="text-sm font-medium text-[#0a0a0a]">{selectedInvoice.contato_cliente}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#f5f0e0] p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-[#0a0a0a]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#6a6a6a] uppercase tracking-[1.5px] mb-1">E-mail</p>
                    <p className="text-sm font-medium text-[#0a0a0a] truncate max-w-[150px]">{selectedInvoice.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#e5e5e5] flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-[#6a6a6a] uppercase tracking-[1.5px] mb-1">Fatura</p>
                  <p className="text-sm font-mono font-bold text-[#0a0a0a]">#{selectedInvoice.numero_fatura}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-[#6a6a6a] uppercase tracking-[1.5px] mb-1">Valor Total</p>
                  <p className="text-2xl font-medium text-[#0a0a0a] tracking-tight">{formatCurrency(selectedInvoice.valor_fatura)}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};