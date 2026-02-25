import { SalesDataPoint } from "@/lib/types";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChartComponent = ({ data }: { data: SalesDataPoint[] }) => {
  return (
    <LineChart data={data}>
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
      <Line
        type="monotone"
        dataKey="sales"
        stroke="#059669"
        strokeWidth={2}
        dot={{ fill: "#059669" }}
        name="Sales"
      />
    </LineChart>
  );
};

export default LineChartComponent;
