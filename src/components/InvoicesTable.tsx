import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Invoice, SeverityLevel } from "../types/invoice";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface InvoicesTableProps {
  invoices: Invoice[];
}

export const InvoicesTable = ({ invoices }: InvoicesTableProps) => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const getSeverityBadge = (severity: SeverityLevel) => {
    switch (severity) {
      case 'Paga':
        return <Badge className="bg-emerald-500 hover:bg-emerald-600">Paga</Badge>;
      case 'Baixa':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Baixa</Badge>;
      case 'Média':
        return <Badge className="bg-orange-500 hover:bg-orange-600">Média</Badge>;
      case 'Máxima':
        return <Badge className="bg-red-500 hover:bg-red-600">Máxima</Badge>;
      default:
        return <Badge variant="outline">Em dia</Badge>;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="rounded-md border bg-white dark:bg-slate-950">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead>Vencimento</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Severidade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow 
              key={invoice.numero_fatura}
              className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
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
            <DialogTitle>Detalhes do Cliente</DialogTitle>
            <DialogDescription>
              Informações de contato e faturamento.
            </DialogDescription>
          </DialogHeader>
          {selectedInvoice && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold col-span-1">Nome:</span>
                <span className="col-span-3">{selectedInvoice.nome_cliente}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold col-span-1">CNPJ:</span>
                <span className="col-span-3">{selectedInvoice.cnpj}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold col-span-1">Contato:</span>
                <span className="col-span-3">{selectedInvoice.contato_cliente}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold col-span-1">E-mail:</span>
                <span className="col-span-3">{selectedInvoice.email}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold col-span-1">Fatura:</span>
                <span className="col-span-3">#{selectedInvoice.numero_fatura}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};