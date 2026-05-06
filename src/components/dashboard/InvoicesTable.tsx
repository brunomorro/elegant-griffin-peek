import { useState } from "react";
import { format } from "date-fns";
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

interface InvoicesTableProps {
  invoices: Invoice[];
}

export const InvoicesTable = ({ invoices }: InvoicesTableProps) => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const getSeverityBadge = (severity: Invoice['severity']) => {
    switch (severity) {
      case 'paid':
        return <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200">Pago</Badge>;
      case 'low':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 border-yellow-200">Baixa</Badge>;
      case 'medium':
        return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">Média</Badge>;
      case 'high':
        return <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100 border-rose-200">Máxima</Badge>;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="rounded-md border bg-white shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-50">
          <TableRow>
            <TableHead className="font-semibold">Cliente</TableHead>
            <TableHead className="font-semibold">Vencimento</TableHead>
            <TableHead className="font-semibold">Valor</TableHead>
            <TableHead className="font-semibold">Severidade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow 
              key={invoice.numero_fatura}
              className="cursor-pointer hover:bg-slate-50 transition-colors"
              onClick={() => setSelectedInvoice(invoice)}
            >
              <TableCell className="font-medium">{invoice.nome_cliente}</TableCell>
              <TableCell>{format(invoice.data_vencimento, 'dd/MM/yyyy')}</TableCell>
              <TableCell>{formatCurrency(invoice.valor_fatura)}</TableCell>
              <TableCell>{getSeverityBadge(invoice.severity)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={!!selectedInvoice} onOpenChange={() => setSelectedInvoice(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-800">Detalhes do Cliente</DialogTitle>
          </DialogHeader>
          {selectedInvoice && (
            <div className="grid gap-4 py-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Nome do Cliente</p>
                <p className="text-base font-semibold">{selectedInvoice.nome_cliente}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">CNPJ</p>
                <p className="text-base">{selectedInvoice.cnpj}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Contato</p>
                <p className="text-base">{selectedInvoice.contato_cliente}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">E-mail</p>
                <p className="text-base text-blue-600 hover:underline cursor-pointer">{selectedInvoice.email}</p>
              </div>
              <div className="pt-4 border-t grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Fatura</p>
                  <p className="text-base font-mono">#{selectedInvoice.numero_fatura}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Valor</p>
                  <p className="text-base font-bold">{formatCurrency(selectedInvoice.valor_fatura)}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};