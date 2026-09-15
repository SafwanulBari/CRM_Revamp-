import type { Lead, LeadsFilterState, QuickFilterId, StageFilterId } from "./types";

export const QUICK_FILTERS: { id: QuickFilterId; label: string }[] = [
  { id: "all", label: "All Leads" },
  { id: "highPriority", label: "High Priority" },
  { id: "todaysDistribution", label: "Today’s Distribution" },
  { id: "paymentActivity48h", label: "Payment Activity (48h)" },
  { id: "lastActivity24h", label: "Last Activity (24h)" },
];

export const STAGE_FILTERS: { id: StageFilterId; label: string }[] = [
  { id: "all", label: "All Leads" },
  { id: "Prospect", label: "Prospect" },
  { id: "Qualified", label: "Qualified" },
  { id: "Interested", label: "Interested" },
  { id: "Ready to Pay", label: "Ready to Pay" },
  { id: "Enrolled", label: "Enrolled" },
];

export const DEFAULT_FILTER_STATE: LeadsFilterState = {
  quickFilter: "all",
  stage: "all",
  sourceCampaigns: [],
  batches: [],
};

function matchesQuickFilter(lead: Lead, quickFilter: QuickFilterId): boolean {
  switch (quickFilter) {
    case "highPriority":
      return lead.isHighPriority;
    case "todaysDistribution":
      return lead.isTodaysDistribution;
    case "paymentActivity48h":
      return lead.isPaymentActivity48h;
    case "lastActivity24h":
      return lead.isLastActivity24h;
    case "all":
    default:
      return true;
  }
}

function matchesStage(lead: Lead, stage: StageFilterId): boolean {
  return stage === "all" || lead.stage === stage;
}

export function filterLeads(leads: Lead[], filters: LeadsFilterState): Lead[] {
  return leads.filter((lead) => {
    if (!matchesQuickFilter(lead, filters.quickFilter)) return false;
    if (!matchesStage(lead, filters.stage)) return false;
    if (filters.sourceCampaigns.length > 0 && !filters.sourceCampaigns.includes(lead.sourceCampaign)) {
      return false;
    }
    if (filters.batches.length > 0 && !filters.batches.includes(lead.batch)) {
      return false;
    }
    return true;
  });
}

export function countByQuickFilter(leads: Lead[], id: QuickFilterId): number {
  return leads.filter((lead) => matchesQuickFilter(lead, id)).length;
}

export function countByStage(leads: Lead[], id: StageFilterId): number {
  return leads.filter((lead) => matchesStage(lead, id)).length;
}

export function hasActiveSecondaryFilters(filters: LeadsFilterState): boolean {
  return filters.sourceCampaigns.length > 0 || filters.batches.length > 0;
}

export function getOptionCounts(
  leads: Lead[],
  key: "sourceCampaign" | "batch",
): { value: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const lead of leads) {
    const value = lead[key];
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => a.value.localeCompare(b.value));
}
