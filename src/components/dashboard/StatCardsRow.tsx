import { HandCoins, ShoppingBasket, Target, Trophy, type LucideIcon } from "lucide-react";
import { AnimatedValue } from "./AnimatedValue";
import type { StatCardData } from "@/lib/dashboard/types";

const ICONS: Record<string, LucideIcon> = {
  "hand-coins": HandCoins,
  "shopping-basket": ShoppingBasket,
  target: Target,
  trophy: Trophy,
};

export function StatCardsRow({ cards }: { cards: StatCardData[] }) {
  return (
    <div className="grid h-full grid-cols-2 gap-3 rounded-3xl bg-white p-3 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.04)]">
      {cards.map((card) => {
        const Icon = ICONS[card.icon] ?? Target;
        return (
          <div key={card.id} className={`flex h-[133px] w-full flex-col justify-between rounded-2xl p-3.5 ${card.bgClass}`}>
            <div className="flex w-full items-center gap-2.5">
              <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${card.iconBgClass}`}>
                <Icon className="size-5 text-white" strokeWidth={2} />
              </div>
              <p className="font-body text-sm font-medium text-gray-800 uppercase">{card.label}</p>
            </div>
            <p className="font-heading text-[28px] font-bold text-dark-950">
              <AnimatedValue value={card.value} />
              {card.suffix && <span className="font-heading text-lg font-medium text-dark-700">{card.suffix}</span>}
            </p>
          </div>
        );
      })}
    </div>
  );
}
