"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function useCountUp(target: number, duration = 900, delay = 0): number {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      timeoutRef.current = setTimeout(() => setValue(target), 0);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    function animate() {
      const start = performance.now();
      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / duration);
        setValue(target * easeOutCubic(progress));
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      }
      frameRef.current = requestAnimationFrame(tick);
    }

    timeoutRef.current = setTimeout(animate, delay);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [target, duration, delay, prefersReducedMotion]);

  return value;
}
