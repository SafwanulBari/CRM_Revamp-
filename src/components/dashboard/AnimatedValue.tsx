"use client";

import { useCountUp } from "@/hooks/useCountUp";

const NUMERIC_PATTERN = /^([^\d]*)([\d,]+(?:\.\d+)?)([^\d]*)$/;

/**
 * Animates the leading numeric portion of a pre-formatted string (e.g. "$12,800",
 * "24%", "84th") from 0 up to its value on mount. Falls back to rendering the
 * string as-is when it isn't a single simple number (e.g. "3h 5m").
 */
export function AnimatedValue({ value, duration = 900, delay = 0 }: { value: string; duration?: number; delay?: number }) {
  const match = value.match(NUMERIC_PATTERN);
  const target = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const animated = useCountUp(match ? target : 0, duration, delay);

  if (!match) return <>{value}</>;

  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const useThousands = numStr.includes(",");
  const rounded = decimals > 0 ? Number(animated.toFixed(decimals)) : Math.round(animated);
  const formatted = useThousands || rounded >= 1000 ? rounded.toLocaleString() : rounded.toString();

  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  );
}
