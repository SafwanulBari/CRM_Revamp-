import { Medal, Award, Gem } from "lucide-react";
import type { WeeklyIncentiveMilestone } from "@/lib/dashboard/types";

const TIER_STYLES: Record<number, { icon: typeof Medal; bg: string; ring: string }> = {
  400: { icon: Medal, bg: "bg-[#a9502f]", ring: "ring-[#a9502f]/20" },
  600: { icon: Medal, bg: "bg-[#9aa1ab]", ring: "ring-[#9aa1ab]/20" },
  700: { icon: Award, bg: "bg-[#e0a316]", ring: "ring-[#e0a316]/20" },
  900: { icon: Award, bg: "bg-[#7d7d7d]", ring: "ring-[#7d7d7d]/20" },
  1000: { icon: Gem, bg: "bg-[#22c3d6]", ring: "ring-[#22c3d6]/20" },
};

export function WeeklyIncentiveCard({
  current,
  milestones,
  progressPercent,
  nextTarget,
  nextUnlockPercent,
  nextUnlockAmount,
  remaining,
}: {
  current: number;
  milestones: WeeklyIncentiveMilestone[];
  progressPercent: number;
  nextTarget: number;
  nextUnlockPercent: number;
  nextUnlockAmount: number;
  remaining: number;
}) {
  const tierMilestones = milestones.filter((m) => m.amount > 0);

  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-3xl bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-[15px] font-bold text-dark-950 uppercase">Weekly Incentive</h3>
      </div>
      <p className="font-heading text-2xl font-extrabold text-primary-500">$ {current}</p>

      <div className="relative mt-2 flex flex-col">
        <div className="relative h-5 w-full">
          {tierMilestones.map((m) => (
            <span
              key={`label-${m.id}`}
              className="absolute -translate-x-1/2 rounded-full bg-[#f6eefc] px-2 py-1 font-heading text-xs font-semibold whitespace-nowrap text-violet-600"
              style={{ left: `${m.percent}%` }}
            >
              {m.percent}%
            </span>
          ))}
        </div>

        <div className="relative mt-5 h-2.5 w-full rounded-full bg-purple-light">
          <div className="h-full rounded-full bg-primary-500" style={{ width: `${progressPercent}%` }} />
          <div
            className="absolute top-1/2 size-5 -translate-y-1/2 -translate-x-1/2 rounded-full border-4 border-primary-500 bg-white"
            style={{ left: `${progressPercent}%` }}
          />
        </div>

        <div className="relative mt-3 h-[80px] w-full">
          <div className="absolute top-0 left-0 font-heading text-base font-bold text-dark-950">$ 0</div>
          {tierMilestones.map((m) => {
            const tier = TIER_STYLES[m.amount];
            const Icon = tier.icon;
            return (
              <div
                key={m.id}
                className="absolute top-0 flex -translate-x-1/2 flex-col items-center gap-3"
                style={{ left: `${m.percent}%` }}
              >
                <span className={`flex size-12 items-center justify-center rounded-full ring-8 ${tier.bg} ${tier.ring}`}>
                  <Icon className="size-6 text-white" strokeWidth={1.75} />
                </span>
                <p className={`font-heading text-base font-bold whitespace-nowrap ${m.achieved ? "text-dark-950" : "text-gray-700"}`}>
                  $ {m.amount}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 rounded-full bg-gray-100 px-3 py-2">
        <Award className="size-[18px] shrink-0 text-primary-500" strokeWidth={1.75} />
        <p className="text-center font-body text-xs text-dark-600">
          <span className="font-semibold">${remaining} more revenue</span> to hit the <span className="font-semibold">${nextTarget}</span>{" "}
          target and unlock <span className="font-semibold">{nextUnlockPercent}% incentive · ${nextUnlockAmount}</span>
        </p>
      </div>
    </div>
  );
}
