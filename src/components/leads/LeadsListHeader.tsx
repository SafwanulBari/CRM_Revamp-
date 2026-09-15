import { StageDropdown } from "./StageDropdown";
import type { Lead, StageFilterId } from "@/lib/leads/types";

export function LeadsListHeader({
  leads,
  stage,
  onStageChange,
}: {
  leads: Lead[];
  stage: StageFilterId;
  onStageChange: (stage: StageFilterId) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <h1 className="font-heading text-[28px] font-bold text-dark-950">Leads List</h1>
          <span className="h-6 w-px bg-gray-400" />
        </div>
        <StageDropdown leads={leads} value={stage} onChange={onStageChange} />
      </div>

      <button
        type="button"
        className="flex h-10 items-center gap-1.5 rounded-[10px] border border-black/12 bg-primary-500 px-4 font-heading text-[15px] font-bold text-white shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04),0px_3px_3px_-1.5px_rgba(0,0,0,0.04)] transition-colors hover:bg-primary-600"
      >
        <svg viewBox="0 0 12 12" className="size-3" fill="none">
          <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        Add
      </button>
    </div>
  );
}
