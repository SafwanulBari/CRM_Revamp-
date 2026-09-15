import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ArcGauge } from "./charts/ArcGauge";
import type { ActionNeededItem } from "@/lib/dashboard/types";

export function ActionNeededBar({ percent, items }: { percent: number; items: ActionNeededItem[] }) {
  return (
    <div className="flex items-center gap-5 rounded-3xl bg-white p-4 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04)]">
      <h3 className="sr-only">Action needed</h3>
      <div className="relative flex w-[150px] shrink-0 flex-col items-center">
        <p className="absolute top-0 left-0 font-heading text-[15px] font-bold text-dark-950 uppercase">Action needed</p>
        <div className="relative mt-7">
          <ArcGauge percent={percent} width={148} height={78} barSize={14} />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 font-heading text-xl font-bold text-primary-600">{percent}%</p>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-6 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex h-20 flex-col justify-between gap-1 rounded-2xl border border-gray-200 p-3"
            style={{ backgroundImage: `linear-gradient(254deg, ${item.gradientFrom} 4%, #ffffff 97%)` }}
          >
            <p className="font-body text-xs font-medium text-gray-700">{item.label}</p>
            <div className="flex items-end justify-between">
              <p className={`font-heading text-2xl font-bold ${item.valueClass}`}>{item.value}</p>
              <Tooltip>
                <TooltipTrigger
                  aria-label={`About ${item.label}`}
                  className="text-gray-400 transition-colors hover:text-gray-600"
                >
                  <Info className="size-4" strokeWidth={1.75} />
                </TooltipTrigger>
                <TooltipContent>{item.tooltip}</TooltipContent>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
