function getPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = Array.from(pages)
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  sorted.forEach((page, index) => {
    if (index > 0 && page - sorted[index - 1] > 1) {
      result.push("ellipsis");
    }
    result.push(page);
  });
  return result;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;
  const pageList = getPageList(page, totalPages);

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="flex size-8 items-center justify-center rounded-lg bg-white shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04)] transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/figma/icon-pagination-prev.svg" alt="" className="size-[18px]" />
      </button>

      <div className="flex items-center gap-1">
        {pageList.map((entry, index) =>
          entry === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="flex size-8 items-center justify-center font-heading text-xs font-bold text-gray-700"
            >
              …
            </span>
          ) : (
            <button
              key={entry}
              type="button"
              onClick={() => onPageChange(entry)}
              aria-current={entry === page ? "page" : undefined}
              className={`flex size-8 items-center justify-center rounded-lg font-heading text-xs font-bold transition-colors ${
                entry === page
                  ? "border border-black/12 bg-primary-500 text-white shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04)]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {entry}
            </button>
          ),
        )}
      </div>

      <button
        type="button"
        aria-label="Next page"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex size-8 items-center justify-center rounded-lg bg-white shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04)] transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/figma/icon-pagination-next.svg" alt="" className="size-[18px]" />
      </button>
    </div>
  );
}
