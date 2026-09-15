"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { PendingTaskTab, PriorityLevel, UpNextItem } from "@/lib/dashboard/types";

const PRIORITY_STYLES: Record<PriorityLevel, string> = {
  High: "bg-green-light text-success-600",
  Medium: "bg-[#f9f2dc] text-warning-700",
  Low: "bg-light-red text-danger-700",
};

export function PendingTaskCard({
  tabs,
  itemsByTab,
  overdueCount,
}: {
  tabs: PendingTaskTab[];
  itemsByTab: Record<string, UpNextItem[]>;
  overdueCount: number;
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const items = itemsByTab[activeTab] ?? [];

  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-3xl bg-white p-5">
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-sm font-bold text-dark-950">Pending Task</h3>
        <div className="grid grid-cols-3 gap-2">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-start gap-2 rounded-xl border-l-[3px] border-primary-500 bg-[#f3f4fd] px-3 py-2.5 text-left transition-colors hover:bg-[#e9ebfa] ${
                  isActive ? "ring-2 ring-primary-500/40" : ""
                }`}
              >
                <div className="flex flex-1 flex-col gap-1.5">
                  <span className="font-body text-sm font-medium text-dark-950">{tab.label}</span>
                  <span className="flex items-center gap-1.5 font-body text-sm">
                    <span className="font-heading font-bold text-primary-500">{tab.count}</span>
                    {tab.amount && (
                      <>
                        <span className="size-[3px] rounded-full bg-primary-500/50" />
                        <span className="font-semibold text-primary-500">{tab.amount}</span>
                      </>
                    )}
                  </span>
                </div>
                <ChevronRight className="mt-0.5 size-4 shrink-0 text-gray-400" strokeWidth={2} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-sm font-bold text-dark-950">Up Next</h3>
          <button type="button" className="flex items-center gap-1 font-body text-xs text-danger-700">
            {overdueCount} overdue
            <ChevronRight className="size-3.5" strokeWidth={2} />
          </button>
        </div>
        <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between px-3 py-3 transition-colors hover:bg-gray-50 ${
                index !== items.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-body text-sm font-medium text-dark-950">{item.time}</span>
                <span className="size-[3px] rounded-full bg-gray-400" />
                <span className="font-body text-sm text-dark-950">{item.taskLabel}</span>
              </div>
              <span className="hidden font-body text-sm text-dark-950 sm:block">{item.studentName}</span>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2 py-1 font-body text-xs font-medium ${PRIORITY_STYLES[item.priority]}`}>
                  {item.priority}
                </span>
                <ChevronRight className="size-4 text-gray-500" strokeWidth={2} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
