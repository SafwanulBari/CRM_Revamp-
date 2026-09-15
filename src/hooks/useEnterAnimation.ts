"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Returns true once the component should show its "entered" (final) visual state.
 * Starts false on mount so CSS transitions can animate from a 0/empty state to the
 * final value. Respects prefers-reduced-motion by resolving to true immediately.
 */
export function useEnterAnimation(delayMs = 30): boolean {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setEntered(true), prefersReducedMotion ? 0 : delayMs);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion, delayMs]);

  return entered;
}
