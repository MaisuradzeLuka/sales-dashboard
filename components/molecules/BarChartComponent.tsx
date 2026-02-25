import { SalesDataPoint } from "@/lib/types";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const BarChartComponent = ({ data }: { data: SalesDataPoint[] }) => {
  return (
    <BarChart data={data}>
      <CartesianGrid
        strokeDasharray="3 3"
        className="stroke-zinc-200 dark:stroke-zinc-700"
      />
      <XAxis dataKey="month" tick={{ fill: "currentColor", fontSize: 12 }} />
      <YAxis tick={{ fill: "currentColor", fontSize: 12 }} />
      <Tooltip
        contentStyle={{
          backgroundColor: "var(--background)",
          border: "1px solid var(--foreground)",
          borderRadius: "8px",
        }}
      />
      <Bar dataKey="sales" fill="#059669" name="Sales" radius={[4, 4, 0, 0]} />
    </BarChart>
  );
};

export default BarChartComponent;
