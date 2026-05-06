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
        return <Badge className="bg-[#e3f9f6] text-[#008a76] hover:bg-[#e3f9f6] border-none font-bold px-3">Pago</Badge>;
      case 'low':
        return <Badge className="bg-[#fff9e6] text-[#946c00] hover:bg-[#fff9e6] border-none font-bold px-3">Baixa</Badge>;
      case 'medium':
        return <Badge className="bg-[#fff2e6] text-[#c25400] hover:bg-[#fff2e6] border-none font-bold px-3">Média</Badge>;
      case 'high':
        return <Badge className="bg-[#ffe6e6] text-[#c20000] hover:bg-[#ffe6e6] border-none font-bold px-3">Máxima</Badge>;
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
    <div className="bg-white rounded-xl shadow-[0_2px_5px_rgba(0,0,0,0.05),0_1px_1px_rgba(0,0,0,0.05)] overflow-hidden border border-[#e6ebf1]">
      <Table>
        <TableHeader className="bg-[#f6f9fc]">
          <TableRow className="hover:bg-transparent border-[#e6ebf1]">
            <TableHead className="text-[#697386] font-bold uppercase text-[11px] tracking-widest py-4 px-6">Cliente</TableHead>
            <TableHead className="text-[#697386] font-bold uppercase text-[11px] tracking-widest py-4 px-6">Vencimento</TableHead>
            <TableHead className="text-[#697386] font-bold uppercase text-[11px] tracking-widest py-4 px-6">Valor</TableHead>
            <TableHead className="text-[#697386] font-bold uppercase text-[11px] tracking-widest py-4 px-6">Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow 
              key={invoice.numero_fatura}
              className="group cursor-pointer hover:bg-[#f6f9fc] transition-colors border-[#e6ebf1]"
              onClick={() => setSelectedInvoice(invoice)}
            >
              <TableCell className="py-4 px-6">
                <div className="font-bold text-[#0a2540]">{invoice.nome_cliente}</div>
                <div className="text-xs text-[#697386] font-medium">{invoice.cnpj}</div>
              </TableCell>
              <TableCell className="py-4 px-6 text-[#424770] font-medium">{formatDate(invoice.data_vencimento)}</TableCell>
              <TableCell className="py-4 px-6 text-[#0a2540] font-bold">{formatCurrency(invoice.valor_fatura)}</TableCell>
              <TableCell className="py-4 px-6">{getSeverityBadge(invoice.severity)}</TableCell>
              <TableCell className="py-4 px-6 text-right">
                <ChevronRight className="h-4 w-4 text-[#697386] opacity-0 group-hover:opacity-100 transition-opacity" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={!!selectedInvoice} onOpenChange={() => setSelectedInvoice(null)}>
        <DialogContent className="sm:max-w-[480px] border-none shadow-2xl p-0 overflow-hidden rounded-2xl">
          <div className="bg-[#635bff] p-8 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Detalhes da Conta</DialogTitle>
              <p className="text-[#c4c0ff] font-medium">Informações completas do faturamento</p>
            </DialogHeader>
          </div>
          {selectedInvoice && (
            <div className="p-8 space-y-8 bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-[#f6f9fc] p-3 rounded-xl">
                  <Building2 className="h-6 w-6 text-[#635bff]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#697386] uppercase tracking-widest mb-1">Empresa</p>
                  <p className="text-lg font-bold text-[#0a2540]">{selectedInvoice.nome_cliente}</p>
                  <p className="text-sm text-[#424770] font-medium">CNPJ: {selectedInvoice.cnpj}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#f6f9fc] p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-[#635bff]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#697386] uppercase tracking-widest mb-1">Contato</p>
                    <p className="text-sm font-bold text-[#0a2540]">{selectedInvoice.contato_cliente}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#f6f9fc] p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-[#635bff]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#697386] uppercase tracking-widest mb-1">E-mail</p>
                    <p className="text-sm font-bold text-[#635bff] truncate max-w-[150px]">{selectedInvoice.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#e6ebf1] flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-[#697386] uppercase tracking-widest mb-1">Fatura</p>
                  <p className="text-sm font-mono font-bold text-[#0a2540]">#{selectedInvoice.numero_fatura}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-[#697386] uppercase tracking-widest mb-1">Valor Total</p>
                  <p className="text-xl font-bold text-[#0a2540]">{formatCurrency(selectedInvoice.valor_fatura)}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};