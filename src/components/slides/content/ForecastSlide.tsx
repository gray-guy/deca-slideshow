import { motion } from "framer-motion";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  Legend,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
  month: { label: "Month" },
  budgetSpend: {
    label: "Budget spend",
    color: "hsl(var(--primary))",
  },
  profit: {
    label: "Profit (0.1%)",
    color: "hsl(var(--chart-2))",
  },
  profit025: {
    label: "Profit (0.25%)",
    color: "hsl(var(--chart-3))",
  },
};

interface ForecastSlideProps {
  data: {
    chartTitle: string;
    xAxisLabel: string;
    leftAxisLabel: string;
    rightAxisLabel: string;
    yAxisMax?: number;
    dataPoints: Array<{
      month: string;
      budgetSpend: number;
      profit: number;
      profit025?: number;
    }>;
    bullets?: string[];
  };
}

const DEFAULT_Y_MAX = 1200;

export const ForecastSlide = ({ data }: ForecastSlideProps) => {
  const yMax = data.yAxisMax ?? DEFAULT_Y_MAX;
  return (
    <div className="space-y-4 h-full pb-16 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-1"
      >
        <h3 className="text-lg font-display font-semibold text-foreground">
          {data.chartTitle}
        </h3>
        <p className="text-sm text-muted-foreground">
          {data.xAxisLabel} · Left: {data.leftAxisLabel} · Right: {data.rightAxisLabel}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex-1 min-h-[280px]"
      >
        <ChartContainer config={chartConfig} className="h-full w-full aspect-auto min-h-[260px]">
          <ComposedChart
            data={data.dataPoints}
            margin={{ top: 12, right: 24, left: 12, bottom: 8 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted/50" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              fontSize={11}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              domain={[0, yMax]}
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              fontSize={11}
              tickFormatter={(v) => `$${v}k`}
              label={{
                value: data.leftAxisLabel,
                angle: -90,
                position: "insideLeft",
                style: { fill: "hsl(var(--muted-foreground))", fontSize: 10 },
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              domain={[0, yMax]}
              tick={{ fill: "hsl(var(--muted-foreground))" }}
              fontSize={11}
              tickFormatter={(v) => `$${v}k`}
              label={{
                value: data.rightAxisLabel,
                angle: 90,
                position: "insideRight",
                style: { fill: "hsl(var(--muted-foreground))", fontSize: 10 },
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend
              wrapperStyle={{ fontSize: 11 }}
              formatter={(value: string) =>
                (chartConfig as Record<string, { label?: string }>)[value]?.label ?? value
              }
            />
            <Line
              type="monotone"
              dataKey="budgetSpend"
              yAxisId="left"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))", r: 3 }}
              name="budgetSpend"
            />
            <Line
              type="monotone"
              dataKey="profit"
              yAxisId="right"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-2))", r: 3 }}
              name="profit"
            />
            <Line
              type="monotone"
              dataKey="profit025"
              yAxisId="right"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-3))", r: 3 }}
              name="profit025"
            />
          </ComposedChart>
        </ChartContainer>
      </motion.div>

      {data.bullets && data.bullets.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="card-glass border-primary/20 py-4 px-5"
        >
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            {data.bullets.map((bullet, i) => {
              const parts = String(bullet).split(/\*\*(.+?)\*\*/g);
              return (
                <li key={i} className="leading-snug">
                  {parts.map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </div>
  );
};
