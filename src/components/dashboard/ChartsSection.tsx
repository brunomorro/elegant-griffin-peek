import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface ChartsSectionProps {
  pieData: any[];
  barData: any[];
}

// Clay Palette
const COLORS = ['#b8a4ed', '#ffb084']; // Lavender and Peach
const SEVERITY_COLORS: Record<string, string> = {
  'Pagas': '#1a3a3a', // Teal
  'Até 5 dias': '#e8b94a', // Ochre
  '6 a 10 dias': '#ffb084', // Peach
  'Acima de 10 dias': '#ff4d8b' // Pink
};

export const ChartsSection = ({ pieData, barData }: ChartsSectionProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="bg-[#f5f0e0] border-none rounded-[24px] p-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-medium tracking-tight text-[#0a0a0a]">Status de Pagamento</CardTitle>
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
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-[#f5f0e0] border-none rounded-[24px] p-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-medium tracking-tight text-[#0a0a0a]">Severidade de Atraso</CardTitle>
        </CardHeader>
        <CardContent className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6a6a6a', fontSize: 12, fontWeight: 500 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6a6a6a', fontSize: 12 }}
              />
              <Tooltip 
                cursor={{ fill: '#ebe6d6' }}
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}
              />
              <Bar dataKey="quantidade" radius={[8, 8, 0, 0]} barSize={48}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={SEVERITY_COLORS[entry.name] || '#b8a4ed'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};