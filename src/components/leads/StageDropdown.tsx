"use client";

import { useEffect, useRef, useState } from "react";
import { STAGE_FILTERS, countByStage } from "@/lib/leads/filters";
import type { Lead, StageFilterId } from "@/lib/leads/types";

export function StageDropdown({
  leads,
  value,
  onChange,
}: {
  leads: Lead[];
  value: StageFilterId;
  onChange: (stage: StageFilterId) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const selected = STAGE_FILTERS.find((s) => s.id === value) ?? STAGE_FILTERS[0];
  const selectedCount = countByStage(leads, selected.id);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex h-8 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-[0px_1px_0.5px_rgba(0,0,0,0.04)] transition-colors hover:bg-gray-100"
      >
        <span className="font-body text-[13px] font-medium text-gray-700">
          {selected.label} <span className="text-gray-600 text-xs">({selectedCount})</span>
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/figma/icon-chevron-down.svg" alt="" className="size-4" />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-20 w-[164px] overflow-hidden rounded-2xl border border-gray-100 bg-white py-1 shadow-[0px_32px_32px_-16px_rgba(0,0,0,0.04),0px_6px_6px_-3px_rgba(0,0,0,0.04),0px_3px_3px_-1.5px_rgba(0,0,0,0.04),0px_1px_1px_-0.5px_rgba(0,0,0,0.04)]">
          {STAGE_FILTERS.map((option, index) => {
            const isSelected = option.id === value;
            const count = countByStage(leads, option.id);
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  onChange(option.id);
                  setOpen(false);
                }}
                className={`flex h-[34px] w-full items-center justify-between px-3 py-2 text-left transition-colors hover:bg-gray-100 ${
                  index !== STAGE_FILTERS.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <span className="font-body text-[13px] font-medium">
                  <span className="text-gray-900">{option.label}</span>{" "}
                  <span className="text-gray-600 text-xs">({count})</span>
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={isSelected ? "/figma/icon-check-selected.svg" : "/figma/icon-check-unselected.svg"}
                  alt=""
                  className="size-3.5"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
