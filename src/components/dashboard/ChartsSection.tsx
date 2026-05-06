import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface ChartsSectionProps {
  pieData: any[];
  barData: any[];
}

const COLORS = ['#635bff', '#ff5c93']; // Stripe Purple and Pink
const SEVERITY_COLORS: Record<string, string> = {
  'Pagas': '#635bff',
  'Até 5 dias': '#facc15',
  '6 a 10 dias': '#f97316',
  'Acima de 10 dias': '#ff5c93'
};

export const ChartsSection = ({ pieData, barData }: ChartsSectionProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-none shadow-[0_2px_5px_rgba(0,0,0,0.05),0_1px_1px_rgba(0,0,0,0.05)] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-bold text-[#0a2540]">Status de Pagamento</CardTitle>
        </CardHeader>
        <CardContent className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-none shadow-[0_2px_5px_rgba(0,0,0,0.05),0_1px_1px_rgba(0,0,0,0.05)] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-bold text-[#0a2540]">Severidade de Atraso</CardTitle>
        </CardHeader>
        <CardContent className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#697386', fontSize: 12, fontWeight: 500 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#697386', fontSize: 12 }}
              />
              <Tooltip 
                cursor={{ fill: '#f6f9fc' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="quantidade" radius={[6, 6, 0, 0]} barSize={40}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={SEVERITY_COLORS[entry.name] || '#635bff'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};