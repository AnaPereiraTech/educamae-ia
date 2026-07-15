import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

import type { FinanceData } from "../../types/finance";

interface Props {
  data: FinanceData;
}

const COLORS = [
  "#8b5cf6",
  "#06b6d4",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#3b82f6",
  "#ec4899",
];

export default function ExpenseChart({ data }: Props) {
  const chartData = [
    { name: "Moradia", value: data.moradia },
    { name: "Alimentação", value: data.alimentacao },
    { name: "Terapias", value: data.terapias },
    { name: "Medicamentos", value: data.medicamentos },
    { name: "Transporte", value: data.transporte },
    { name: "Escola", value: data.escola },
    { name: "Outros", value: data.outros },
  ].filter((item) => item.value > 0);

  return (
    <div className="h-96 rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
      <h2 className="mb-6 text-xl font-bold">Distribuição das Despesas</h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie data={chartData} dataKey="value" outerRadius={120} label>
            {chartData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
