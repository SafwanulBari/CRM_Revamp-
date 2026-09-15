"use client";

import { useState } from "react";
import { Users, UserSearch, UserCheck, Sparkles, CircleDollarSign, CheckCircle2, Info, type LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { FunnelRange, FunnelStageId, PipelineFunnelStage } from "@/lib/dashboard/types";

const STAGE_ICONS: Record<FunnelStageId, LucideIcon> = {
  leads: Users,
  prospect: UserSearch,
  qualified: UserCheck,
  interested: Sparkles,
  readyToPay: CircleDollarSign,
  paid: CheckCircle2,
};

const RANGE_OPTIONS: { id: FunnelRange; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "thisWeek", label: "This Week" },
  { id: "thisMonth", label: "This Month" },
];

export function PipelineFunnelCard({
  stagesByRange,
  conversionRateByRange,
}: {
  stagesByRange: Record<string, PipelineFunnelStage[]>;
  conversionRateByRange: Record<string, number>;
}) {
  const [range, setRange] = useState<FunnelRange>("today");
  const stages = stagesByRange[range] ?? [];

  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-3xl bg-white p-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <h3 className="font-heading text-[15px] font-bold text-dark-950 uppercase">Pipeline Funnel</h3>
            <Tooltip>
              <TooltipTrigger aria-label="About pipeline funnel" className="text-gray-400 hover:text-gray-600">
                <Info className="size-4" strokeWidth={1.75} />
              </TooltipTrigger>
              <TooltipContent>Conversion of leads through each stage of the sales pipeline.</TooltipContent>
            </Tooltip>
          </div>
          <Tabs value={range} onValueChange={(v) => setRange(v as FunnelRange)}>
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
        <p className="font-body text-sm text-gray-700">
          Conversion Rate <span className="font-heading text-lg font-bold text-primary-500">{conversionRateByRange[range]}%</span>
        </p>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {stages.map((stage) => {
          const Icon = STAGE_ICONS[stage.id];
          return (
            <div key={stage.id} className={`flex flex-col items-center gap-3 rounded-2xl px-2 py-4 ${stage.bgClass}`}>
              <span className="font-body text-xs font-semibold" style={{ color: stage.color }}>
                {stage.label}
              </span>
              <div className="flex size-10 items-center justify-center rounded-full" style={{ backgroundColor: stage.color }}>
                <Icon className="size-5 text-white" strokeWidth={2} />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-heading text-base font-extrabold" style={{ color: stage.color }}>
                  {stage.count}
                </span>
                {stage.percent != null && <span className="font-heading text-[10px] font-medium text-gray-700">{stage.percent}%</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
