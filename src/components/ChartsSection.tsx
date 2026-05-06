import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Invoice } from "../types/invoice";

interface ChartsSectionProps {
  invoices: Invoice[];
}

export const ChartsSection = ({ invoices }: ChartsSectionProps) => {
  // Dados para o gráfico de pizza (Status de Pagamento)
  const paidCount = invoices.filter(i => i.pago).length;
  const unpaidCount = invoices.filter(i => !i.pago).length;
  
  const pieData = [
    { name: 'Pagas', value: paidCount, color: '#10b981' },
    { name: 'A Pagar', value: unpaidCount, color: '#f43f5e' },
  ];

  // Dados para o gráfico de barras (Severidade)
  const severityData = [
    { name: 'Pagas', total: invoices.filter(i => i.severity === 'Paga').length, color: '#10b981' },
    { name: 'Baixa', total: invoices.filter(i => i.severity === 'Baixa').length, color: '#eab308' },
    { name: 'Média', total: invoices.filter(i => i.severity === 'Média').length, color: '#f97316' },
    { name: 'Máxima', total: invoices.filter(i => i.severity === 'Máxima').length, color: '#ef4444' },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Status das Faturas</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Severidade de Atraso</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={severityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" radius={[4, 4, 0, 0]}>
                {severityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};