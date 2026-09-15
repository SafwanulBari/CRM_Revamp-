"use client";

import { ChevronRight } from "lucide-react";
import { useEnterAnimation } from "@/hooks/useEnterAnimation";
import { AnimatedValue } from "./AnimatedValue";
import type { DistributionListRow } from "@/lib/dashboard/types";

export function DistributionListCard({ rows }: { rows: DistributionListRow[] }) {
  const entered = useEnterAnimation();

  return (
    <div className="flex h-full w-full flex-col gap-3 rounded-3xl bg-white p-5">
      <h3 className="font-heading text-sm font-bold text-dark-950">Distribution List</h3>
      <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200">
        <div className="grid grid-cols-[1fr_140px_70px_70px] gap-2 border-b border-gray-200 px-4 py-2">
          <span className="font-body text-sm text-gray-700">List Name</span>
          <span className="font-body text-sm text-gray-700">Completion Rate</span>
          <span className="font-body text-sm text-gray-700">Lead Count</span>
          <span className="font-body text-sm text-gray-700">Not Called</span>
        </div>
        <div className="flex max-h-[260px] flex-col overflow-y-auto">
          {rows.map((row, index) => (
            <div
              key={row.id}
              className={`grid grid-cols-[1fr_140px_70px_70px] items-center gap-2 px-4 py-3.5 transition-colors hover:bg-gray-50 ${
                index !== rows.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <span className="truncate font-body text-sm text-dark-950">{row.name}</span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-success-900 to-success-500 transition-[width] duration-[900ms] ease-out"
                    style={{
                      width: `${entered ? row.completionRate : 0}%`,
                      transitionDelay: `${index * 60}ms`,
                    }}
                  />
                </div>
                <span className="w-8 shrink-0 font-body text-xs text-gray-700">{row.completionRate}%</span>
              </div>
              <span className="font-heading text-sm font-semibold text-dark-950">
                <AnimatedValue value={String(row.leadCount)} />
              </span>
              <button type="button" className="flex items-center gap-1 font-heading text-sm font-semibold text-danger-700">
                <AnimatedValue value={String(row.notCalled)} />
                <ChevronRight className="size-3 text-danger-700" strokeWidth={2} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
