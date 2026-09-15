import { QUICK_FILTERS, countByQuickFilter } from "@/lib/leads/filters";
import type { Lead, QuickFilterId } from "@/lib/leads/types";

const DIVIDER_BEFORE: QuickFilterId[] = ["todaysDistribution", "paymentActivity48h", "lastActivity24h"];

export function QuickFilterChips({
  leads,
  value,
  onChange,
}: {
  leads: Lead[];
  value: QuickFilterId;
  onChange: (id: QuickFilterId) => void;
}) {
  return (
    <div className="flex items-center rounded-full bg-white p-0.5 shadow-[0px_1px_0.5px_rgba(0,0,0,0.04)]">
      {QUICK_FILTERS.map((filter) => {
        const isActive = filter.id === value;
        const count = countByQuickFilter(leads, filter.id);
        return (
          <div key={filter.id} className="flex items-center">
            {DIVIDER_BEFORE.includes(filter.id) && <span className="mx-0 h-4 w-px bg-gray-200" />}
            <button
              type="button"
              onClick={() => onChange(filter.id)}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 font-body text-[13px] font-medium whitespace-nowrap transition-colors ${
                isActive ? "bg-dark-900 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter.label}
              <span className={`size-[3px] rounded-full ${isActive ? "bg-white/40" : "bg-gray-300"}`} />
              <span className={`font-heading text-xs font-medium ${isActive ? "text-white" : "text-gray-700"}`}>
                {count}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
