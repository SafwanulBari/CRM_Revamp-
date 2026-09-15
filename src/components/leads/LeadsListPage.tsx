"use client";

import { useMemo, useState } from "react";
import { LeadsListHeader } from "./LeadsListHeader";
import { FilterToolbar } from "./FilterToolbar";
import { LeadsTable } from "./LeadsTable";
import { Pagination } from "./Pagination";
import { DEFAULT_FILTER_STATE, filterLeads } from "@/lib/leads/filters";
import { MOCK_LEADS } from "@/lib/leads/mock-data";
import type { LeadsFilterState, QuickFilterId, StageFilterId } from "@/lib/leads/types";

const PAGE_SIZE = 10;

export function LeadsListPage() {
  const [filters, setFilters] = useState<LeadsFilterState>(DEFAULT_FILTER_STATE);
  const [page, setPage] = useState(1);

  const filteredLeads = useMemo(() => filterLeads(MOCK_LEADS, filters), [filters]);
  const totalPages = Math.max(1, Math.ceil(filteredLeads.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginatedLeads = filteredLeads.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function updateFilters(next: LeadsFilterState) {
    setFilters(next);
    setPage(1);
  }

  function handleQuickFilterChange(id: QuickFilterId) {
    updateFilters({ ...filters, quickFilter: id });
  }

  function handleStageChange(stage: StageFilterId) {
    updateFilters({ ...filters, stage });
  }

  function handleClearFilters() {
    updateFilters(DEFAULT_FILTER_STATE);
  }

  return (
    <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-4 px-10 py-6">
      <LeadsListHeader leads={MOCK_LEADS} stage={filters.stage} onStageChange={handleStageChange} />

      <FilterToolbar
        leads={MOCK_LEADS}
        filters={filters}
        onQuickFilterChange={handleQuickFilterChange}
        onFiltersChange={updateFilters}
      />

      <LeadsTable leads={paginatedLeads} onClearFilters={handleClearFilters} />

      <div className="flex justify-center py-1">
        <Pagination page={currentPage} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </main>
  );
}
