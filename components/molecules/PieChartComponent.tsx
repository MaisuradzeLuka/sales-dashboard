import { SalesDataPoint } from "@/lib/types";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const PIE_COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28BFE",
  "#FF6699",
];

const PieChartComponent = ({ data }: { data: SalesDataPoint[] }) => {
  return (
    <PieChart>
      <Pie
        data={data}
        dataKey="sales"
        nameKey="month"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label={({ name, value }) => `${name} ${value}k`}
      >
        {data.map((_, i) => (
          <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: "var(--background)",
          border: "1px solid var(--foreground)",
          borderRadius: "8px",
        }}
      />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
