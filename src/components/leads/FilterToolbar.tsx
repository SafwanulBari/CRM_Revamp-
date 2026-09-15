import { ColumnFilterDropdown } from "./ColumnFilterDropdown";
import { QuickFilterChips } from "./QuickFilterChips";
import { filterLeads, getOptionCounts } from "@/lib/leads/filters";
import type { Lead, LeadsFilterState, QuickFilterId } from "@/lib/leads/types";

export function FilterToolbar({
  leads,
  filters,
  onQuickFilterChange,
  onFiltersChange,
}: {
  leads: Lead[];
  filters: LeadsFilterState;
  onQuickFilterChange: (id: QuickFilterId) => void;
  onFiltersChange: (filters: LeadsFilterState) => void;
}) {
  const sourceCampaignOptions = getOptionCounts(
    filterLeads(leads, { ...filters, sourceCampaigns: [] }),
    "sourceCampaign",
  );
  const batchOptions = getOptionCounts(filterLeads(leads, { ...filters, batches: [] }), "batch");

  return (
    <div className="flex items-center justify-between">
      <QuickFilterChips leads={leads} value={filters.quickFilter} onChange={onQuickFilterChange} />

      <div className="flex items-center gap-1.5">
        <ColumnFilterDropdown
          label="Quick Filter"
          icon="/figma/icon-settings-sliders.svg"
          options={sourceCampaignOptions}
          selected={filters.sourceCampaigns}
          onChange={(sourceCampaigns) => onFiltersChange({ ...filters, sourceCampaigns })}
        />
        <ColumnFilterDropdown
          label="Advanced Filter"
          icon="/figma/icon-filter.svg"
          options={batchOptions}
          selected={filters.batches}
          onChange={(batches) => onFiltersChange({ ...filters, batches })}
        />
      </div>
    </div>
  );
}
