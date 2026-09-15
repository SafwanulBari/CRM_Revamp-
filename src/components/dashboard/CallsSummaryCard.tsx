import { Phone, PhoneOutgoing, PhoneForwarded, PhoneOff, History, Headphones, type LucideIcon } from "lucide-react";
import { AnimatedValue } from "./AnimatedValue";
import type { CallStat } from "@/lib/dashboard/types";

const ICONS: Record<string, LucideIcon> = {
  phone: Phone,
  "phone-outgoing": PhoneOutgoing,
  "phone-forwarded": PhoneForwarded,
  "phone-off": PhoneOff,
  history: History,
};

export function CallsSummaryCard({ stats }: { stats: CallStat[] }) {
  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-3xl bg-white p-4 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-[15px] font-bold text-dark-950 uppercase">Calls Summary</h3>
        <Headphones className="size-6 text-gray-400" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col">
        {stats.map((stat, index) => {
          const Icon = ICONS[stat.icon] ?? Phone;
          return (
            <div key={stat.id}>
              <div className="flex items-center justify-between py-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-md">
                    <Icon className="size-3.5 text-gray-700" strokeWidth={2} />
                  </div>
                  <span className="font-body text-sm text-dark-950">{stat.label}</span>
                </div>
                <span className="font-heading text-lg font-bold text-dark-950">
                  {stat.id === "call-duration" ? stat.value : <AnimatedValue value={stat.value} />}
                </span>
              </div>
              {index !== stats.length - 1 && <div className="h-px w-full bg-gray-200" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
