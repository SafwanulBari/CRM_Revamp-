"use client";

import { useEnterAnimation } from "@/hooks/useEnterAnimation";

export function DashedRadialGauge({
  percent,
  size = 180,
  tickCount = 36,
  tickWidth = 4,
  tickHeight = 14,
  color = "var(--color-primary-500)",
  trackColor = "var(--color-gray-200)",
  durationMs = 900,
  children,
}: {
  percent: number;
  size?: number;
  tickCount?: number;
  tickWidth?: number;
  tickHeight?: number;
  color?: string;
  trackColor?: string;
  durationMs?: number;
  children?: React.ReactNode;
}) {
  const clamped = Math.max(0, Math.min(100, percent));
  const filledCount = Math.round((clamped / 100) * tickCount);
  const radius = size / 2 - tickHeight / 2 - 4;
  const entered = useEnterAnimation();

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {Array.from({ length: tickCount }, (_, i) => {
        const angle = (360 / tickCount) * i;
        const filled = i < filledCount;
        const tickDelay = filled ? (i / Math.max(1, filledCount)) * durationMs * 0.7 : 0;
        return (
          <span
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full"
            style={{
              width: tickWidth,
              height: tickHeight,
              backgroundColor: entered && filled ? color : trackColor,
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(${-radius}px)`,
              transition: "background-color 260ms ease-out",
              transitionDelay: `${tickDelay}ms`,
            }}
          />
        );
      })}
      {children && <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>}
    </div>
  );
}
