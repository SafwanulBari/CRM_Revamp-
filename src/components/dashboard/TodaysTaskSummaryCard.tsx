import { ListChecks, Clock, CheckCircle2, DollarSign } from "lucide-react";
import { DashedRadialGauge } from "./charts/DashedRadialGauge";
import { AnimatedValue } from "./AnimatedValue";

export function TodaysTaskSummaryCard({
  percent,
  totalTask,
  pending,
  completed,
  expectedRevenue,
}: {
  percent: number;
  totalTask: number;
  pending: number;
  completed: number;
  expectedRevenue: string;
}) {
  const rows = [
    { id: "total", label: "Total Task", value: totalTask, icon: ListChecks },
    { id: "pending", label: "Pending", value: pending, icon: Clock },
    { id: "completed", label: "Completed", value: completed, icon: CheckCircle2 },
    { id: "revenue", label: "Expected Revenue", value: expectedRevenue, icon: DollarSign },
  ];

  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-3xl bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-[15px] font-bold text-dark-950 uppercase">Today&rsquo;s Task Summary</h3>
        <a href="#" className="font-heading text-sm font-medium text-[#3e97ff]">
          View all
        </a>
      </div>
      <div className="flex items-center gap-6">
        <DashedRadialGauge percent={percent}>
          <p className="font-heading text-2xl font-bold text-primary-600">
            <AnimatedValue value={`${percent}%`} />
          </p>
          <p className="font-body text-sm text-gray-600">Task Complete</p>
        </DashedRadialGauge>
        <div className="flex flex-1 flex-col">
          {rows.map((row, index) => (
            <div key={row.id}>
              <div className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-md bg-gray-100">
                    <row.icon className="size-3 text-gray-700" strokeWidth={2} />
                  </div>
                  <span className="font-body text-sm text-dark-950">{row.label}</span>
                </div>
                <span className="font-heading text-lg font-bold text-dark-950">
                  <AnimatedValue value={String(row.value)} />
                </span>
              </div>
              {index !== rows.length - 1 && <div className="h-px w-full bg-gray-200" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
