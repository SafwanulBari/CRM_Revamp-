export function DashedRadialGauge({
  percent,
  size = 180,
  tickCount = 36,
  tickWidth = 4,
  tickHeight = 14,
  color = "var(--color-primary-500)",
  trackColor = "var(--color-gray-200)",
  children,
}: {
  percent: number;
  size?: number;
  tickCount?: number;
  tickWidth?: number;
  tickHeight?: number;
  color?: string;
  trackColor?: string;
  children?: React.ReactNode;
}) {
  const clamped = Math.max(0, Math.min(100, percent));
  const filledCount = Math.round((clamped / 100) * tickCount);
  const radius = size / 2 - tickHeight / 2 - 4;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {Array.from({ length: tickCount }, (_, i) => {
        const angle = (360 / tickCount) * i;
        const filled = i < filledCount;
        return (
          <span
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full"
            style={{
              width: tickWidth,
              height: tickHeight,
              backgroundColor: filled ? color : trackColor,
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(${-radius}px)`,
            }}
          />
        );
      })}
      {children && <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>}
    </div>
  );
}
