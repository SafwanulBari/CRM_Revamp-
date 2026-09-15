import type { StageId } from "@/lib/leads/types";

const STAGE_STYLES: Record<StageId, string> = {
  Prospect: "bg-gray-200 text-gray-900",
  Qualified: "bg-purple-light text-primary-600",
  Interested: "bg-secondary-100 text-secondary-600",
  Paid: "bg-green-light text-success-600",
  "Ready to Pay": "bg-violet-50 text-violet-600",
  Enrolled: "bg-gray-100 text-dark-600",
};

export function StageTag({ stage }: { stage: StageId }) {
  return (
    <span
      className={`inline-flex h-6 shrink-0 items-center justify-center rounded-full px-1.5 font-body text-xs font-medium ${STAGE_STYLES[stage]}`}
    >
      {stage}
    </span>
  );
}
