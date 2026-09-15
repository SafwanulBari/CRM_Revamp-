"use client";

import { BarChart3, Target } from "lucide-react";
import { ArcGauge } from "./charts/ArcGauge";
import { AnimatedValue } from "./AnimatedValue";

export function MonthlyTargetCard({
  percent,
  currentRevenue,
  targetRevenue,
  remaining,
}: {
  percent: number;
  currentRevenue: string;
  targetRevenue: string;
  remaining: string;
}) {
  return (
    <div className="flex h-full w-full flex-col rounded-3xl bg-white p-4 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04)]">
      <h3 className="font-heading text-[15px] font-bold text-dark-950 uppercase">
        Monthly Target <span className="font-medium text-dark-500 normal-case">vs</span> Achievement
      </h3>
      <div className="flex flex-1 items-center gap-2">
        <div className="relative flex flex-1 flex-col items-center">
          <ArcGauge percent={percent} width={220} height={112} barSize={20} />
          <div className="absolute bottom-0 flex flex-col items-center gap-0.5">
            <p className="font-heading text-4xl font-bold text-primary-600">
              <AnimatedValue value={`${percent}%`} />
            </p>
            <p className="font-heading text-sm font-medium text-gray-600">Achieved</p>
          </div>
        </div>
        <div className="flex w-[134px] shrink-0 flex-col gap-1">
          <div className="flex h-[132px] flex-col justify-between rounded-2xl bg-bg-2 px-3 py-4">
            <div className="flex items-start gap-2">
              <BarChart3 className="mt-0.5 size-4 text-primary-500" strokeWidth={2} />
              <p className="font-body text-sm text-[#5e6278]">
                Current
                <br />
                Revenue
              </p>
            </div>
            <p className="font-heading text-lg font-bold text-dark-950">
              <AnimatedValue value={currentRevenue} />
            </p>
          </div>
          <div className="flex h-[132px] flex-col justify-between rounded-2xl bg-bg-2 px-3 py-4">
            <div className="flex items-start gap-2">
              <Target className="mt-0.5 size-4 text-success-500" strokeWidth={2} />
              <p className="font-body text-sm text-[#5e6278]">Target Revenue</p>
            </div>
            <p className="font-heading text-lg font-bold text-dark-950">
              <AnimatedValue value={targetRevenue} />
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-full bg-gray-100 py-2.5">
        <p className="font-body text-xs text-gray-800">
          <span className="font-semibold">{remaining}</span> need to meet your target
        </p>
      </div>
    </div>
  );
}
