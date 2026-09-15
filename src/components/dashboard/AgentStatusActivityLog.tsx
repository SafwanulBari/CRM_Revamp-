import { Clock } from "lucide-react";
import type { AgentStatusSegment, TimeAwayItem } from "@/lib/dashboard/types";

export function AgentStatusActivityLog({
  totalLoginDisplay,
  segments,
  timeAwayTotal,
  timeAwayItems,
}: {
  totalLoginDisplay: string;
  segments: AgentStatusSegment[];
  timeAwayTotal: string;
  timeAwayItems: TimeAwayItem[];
}) {
  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-3xl bg-white p-5">
      <h3 className="font-heading text-[15px] font-bold text-dark-950 uppercase">Agent Status Activity Log</h3>

      <div className="flex items-center gap-10">
        <div className="flex w-[88px] flex-col gap-3.5">
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5 text-gray-500" strokeWidth={2} />
            <span className="font-heading text-xs font-medium text-gray-700">Total Login</span>
          </div>
          <p className="font-heading text-lg font-bold text-dark-900">{totalLoginDisplay}</p>
        </div>
        {segments.map((segment) => (
          <div key={segment.id} className="flex items-center gap-10 border-l border-gray-200 pl-10">
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-1.5">
                <span className={`size-3 rounded-full ${segment.dotClass}`} />
                <span className="font-heading text-xs font-medium text-gray-700">{segment.label}</span>
              </div>
              <p className="flex items-baseline gap-1 whitespace-nowrap">
                <span className="font-heading text-lg font-bold text-dark-900">{segment.display}</span>
                <span className="font-heading text-[11px] font-medium text-gray-600">({segment.percent}%)</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-1">
        {segments.map((segment) => (
          <div
            key={segment.id}
            className={`h-10 rounded-xl ${segment.colorClass}`}
            style={{ flexGrow: segment.minutes, flexBasis: 0 }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <span className="font-body text-xs font-semibold text-dark-950 uppercase">Time away from dialer</span>
          <span className="size-1 rounded-full bg-gray-400" />
          <span className="font-heading text-[13px] font-bold text-gray-800">{timeAwayTotal}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {timeAwayItems.map((item) => (
            <span
              key={item.id}
              className="flex items-center gap-1 rounded-full bg-dark-100 px-1.5 py-1 font-body text-[11px] text-gray-700"
            >
              {item.label}
              <span className="size-0.5 rounded-full bg-gray-400" />
              <span className="font-heading font-semibold text-dark-950">{item.minutes}m</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
