import { Avatar, avatarForIndex } from "@/components/ui/Avatar";
import { StageTag } from "./StageTag";
import { EmptyState } from "./EmptyState";
import type { Lead } from "@/lib/leads/types";

const COLUMNS = [
  { id: "student", label: "Student", width: 228 },
  { id: "distributions", label: "Distributions", width: 200 },
  { id: "sourceCampaign", label: "Source Campaign", width: 188 },
  { id: "batch", label: "Batch", width: 164 },
  { id: "stage", label: "Stage", width: 180 },
  { id: "lastActivity", label: "Last Activity", width: 220 },
  { id: "lastContact", label: "Last Contact", width: 180 },
] as const;

const GRID_TEMPLATE = COLUMNS.map((c) => `${c.width}px`).join(" ");

export function LeadsTable({ leads, onClearFilters }: { leads: Lead[]; onClearFilters: () => void }) {
  if (leads.length === 0) {
    return <EmptyState onClear={onClearFilters} />;
  }

  return (
    <div className="w-full overflow-x-auto">
      <div
        className="min-w-[1360px] overflow-hidden rounded-3xl bg-white shadow-[0px_1px_0.5px_rgba(0,0,0,0.04)]"
      >
        <div className="grid border-b border-gray-200" style={{ gridTemplateColumns: GRID_TEMPLATE }}>
          {COLUMNS.map((column) => (
            <div key={column.id} className="flex h-9 items-center gap-1.5 px-4">
              <span className="font-heading text-xs font-bold text-gray-700 uppercase">{column.label}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma/icon-caret-down.svg" alt="" className="size-3.5" />
            </div>
          ))}
        </div>

        {leads.map((lead, index) => (
          <div
            key={lead.id}
            className={`grid items-center transition-colors hover:bg-gray-50 ${
              index !== leads.length - 1 ? "border-b border-gray-200" : ""
            }`}
            style={{ gridTemplateColumns: GRID_TEMPLATE }}
          >
            <div className="flex h-[50px] items-center gap-2.5 px-4 py-2">
              <Avatar src={avatarForIndex(index)} name={lead.name} />
              <div className="flex min-w-0 flex-col gap-0.5">
                <p className="truncate font-heading text-[13px] font-bold text-dark-950">{lead.phone}</p>
                <p className="truncate font-body text-[11px] text-gray-700">{lead.name}</p>
              </div>
            </div>
            <div className="flex h-[50px] items-center px-4 py-2">
              <p className="truncate font-body text-[13px] font-medium text-dark-600">{lead.distribution}</p>
            </div>
            <div className="flex h-[50px] items-center px-4 py-2">
              <p className="truncate font-body text-[13px] font-medium text-dark-600">{lead.sourceCampaign}</p>
            </div>
            <div className="flex h-[50px] items-center px-4 py-2">
              <p className="truncate font-body text-[13px] font-medium text-dark-600">{lead.batch}</p>
            </div>
            <div className="flex h-[50px] items-center px-4 py-2">
              <StageTag stage={lead.stage} />
            </div>
            <div className="flex h-[50px] flex-col justify-center gap-0.5 px-4 py-2">
              <p className="truncate font-body text-[13px] font-semibold text-dark-950">{lead.lastActivityTitle}</p>
              <p className="truncate font-body text-[11px] text-gray-700">{lead.lastActivityTime}</p>
            </div>
            <div className="flex h-[50px] items-center px-4 py-2">
              <p className="truncate font-body text-[13px] font-medium text-dark-600">{lead.lastContact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
