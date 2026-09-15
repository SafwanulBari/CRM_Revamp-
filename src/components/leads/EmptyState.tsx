export function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="flex min-h-[420px] w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white">
      <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
        <svg viewBox="0 0 24 24" className="size-6 text-gray-500" fill="none">
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8.5 11h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="font-heading text-sm font-bold text-dark-950">No leads match your filters</p>
        <p className="font-body text-xs text-gray-600">Try adjusting or clearing the filters above.</p>
      </div>
      <button
        type="button"
        onClick={onClear}
        className="rounded-full bg-gray-100 px-4 py-1.5 font-body text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
      >
        Clear all filters
      </button>
    </div>
  );
}
