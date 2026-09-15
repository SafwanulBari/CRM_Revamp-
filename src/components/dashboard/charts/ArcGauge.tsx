"use client";

import { RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function ArcGauge({
  percent,
  width = 227,
  height = 118,
  barSize = 22,
  color = "var(--color-primary-500)",
  trackColor = "var(--color-gray-100)",
  animationDuration = 1000,
}: {
  percent: number;
  width?: number;
  height?: number;
  barSize?: number;
  color?: string;
  trackColor?: string;
  animationDuration?: number;
}) {
  const clamped = Math.max(0, Math.min(100, percent));
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div style={{ width, height, overflow: "hidden" }} className="relative">
      <RadialBarChart
        width={width}
        height={height * 2}
        cx="50%"
        cy="50%"
        innerRadius="72%"
        outerRadius="100%"
        barSize={barSize}
        data={[{ value: clamped }]}
        startAngle={180}
        endAngle={0}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar
          dataKey="value"
          cornerRadius={barSize}
          background={{ fill: trackColor }}
          fill={color}
          isAnimationActive={!prefersReducedMotion}
          animationDuration={animationDuration}
          animationEasing="ease-out"
        />
      </RadialBarChart>
    </div>
  );
}
