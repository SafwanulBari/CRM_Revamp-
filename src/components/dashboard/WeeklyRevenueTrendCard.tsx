"use client";

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip } from "recharts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { RevenuePoint, RevenueRange } from "@/lib/dashboard/types";

const RANGE_OPTIONS: { id: RevenueRange; label: string }[] = [
  { id: "thisWeek", label: "This Week" },
  { id: "lastWeek", label: "Last Week" },
];

export function WeeklyRevenueTrendCard({
  data,
  totalsByRange,
}: {
  data: RevenuePoint[];
  totalsByRange: Record<string, { total: string; changePercent: number; avgPerDay: string }>;
}) {
  const [range, setRange] = useState<RevenueRange>("thisWeek");
  const dataKey = range === "thisWeek" ? "thisWeek" : "lastWeek";
  const totals = totalsByRange[range];
  const isPositive = totals.changePercent >= 0;

  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-3xl bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-[15px] font-bold text-dark-950 uppercase">Weekly Revenue Trend</h3>
          <p className="font-heading text-2xl font-extrabold text-primary-500">{totals.total}</p>
        </div>
        <Tabs value={range} onValueChange={(v) => setRange(v as RevenueRange)}>
          <TabsList className="h-7 bg-gray-200 p-0.5">
            {RANGE_OPTIONS.map((option) => (
              <TabsTrigger
                key={option.id}
                value={option.id}
                className="h-6 rounded-full px-2 text-xs data-[state=active]:bg-gray-950 data-[state=active]:text-white"
              >
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center gap-2">
        <span className={`flex items-center gap-0.5 rounded-full px-1.5 py-1 font-body text-xs ${isPositive ? "bg-green-light text-success-600" : "bg-light-red text-danger-700"}`}>
          {isPositive ? "▲" : "▼"} {Math.abs(totals.changePercent)}%
        </span>
        <span className="rounded-full bg-gray-100 px-2 py-1 font-body text-[11px] text-gray-700">
          <span className="font-semibold text-dark-950">{totals.avgPerDay}</span> avg / day
        </span>
      </div>

      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 4, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary-500)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--color-primary-500)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "var(--color-gray-700)" }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fontSize: 11, fill: "#717d8a" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <RechartsTooltip
              formatter={((value: number) => [`$${Number(value ?? 0).toLocaleString()}`, "Revenue"]) as never}
              contentStyle={{ borderRadius: 12, border: "1px solid var(--color-gray-200)", fontSize: 12 }}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="var(--color-primary-500)"
              strokeWidth={2}
              fill="url(#revenueFill)"
              dot={{ r: 3, fill: "white", stroke: "var(--color-primary-500)", strokeWidth: 2 }}
              activeDot={{ r: 5 }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
