"use client";

import { useEffect, useRef, useState } from "react";

export function ColumnFilterDropdown({
  label,
  icon,
  options,
  selected,
  onChange,
}: {
  label: string;
  icon: string;
  options: { value: string; count: number }[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const isActive = selected.length > 0;
  const isDisabled = options.length === 0;

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  function toggleValue(value: string) {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  }

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        disabled={isDisabled}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex h-8 items-center gap-1.5 rounded-full px-3 py-1 shadow-[0px_1px_0.5px_rgba(0,0,0,0.04)] transition-colors disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none ${
          isActive ? "bg-purple-light text-primary-600" : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" className="size-3" />
        <span className="font-body text-xs">
          {label}
          {isActive ? ` (${selected.length})` : ""}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] z-20 w-[200px] overflow-hidden rounded-2xl border border-gray-100 bg-white py-1 shadow-[0px_32px_32px_-16px_rgba(0,0,0,0.04),0px_6px_6px_-3px_rgba(0,0,0,0.04),0px_3px_3px_-1.5px_rgba(0,0,0,0.04),0px_1px_1px_-0.5px_rgba(0,0,0,0.04)]">
          {options.map((option, index) => {
            const checked = selected.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleValue(option.value)}
                className={`flex h-[34px] w-full items-center justify-between px-3 py-2 text-left transition-colors hover:bg-gray-100 ${
                  index !== options.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <span className="font-body text-[13px] font-medium text-gray-900">
                  {option.value} <span className="text-gray-600 text-xs">({option.count})</span>
                </span>
                <span
                  className={`flex size-3.5 shrink-0 items-center justify-center rounded-[4px] border ${
                    checked ? "border-primary-500 bg-primary-500" : "border-gray-300 bg-white"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 12 12" className="size-2.5" fill="none">
                      <path
                        d="M2.5 6.2 4.8 8.5 9.5 3.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </button>
            );
          })}
          {selected.length > 0 && (
            <button
              type="button"
              onClick={() => onChange([])}
              className="mt-1 w-full border-t border-gray-200 px-3 py-2 text-left font-body text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100"
            >
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
}
