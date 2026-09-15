export interface StatCardData {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  icon: string;
  bgClass: string;
  iconBgClass: string;
}

export interface CallStat {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface ActionNeededItem {
  id: string;
  label: string;
  value: number;
  valueClass: string;
  gradientFrom: string;
  tooltip: string;
}

export interface PendingTaskTab {
  id: string;
  label: string;
  count: number;
  amount?: string;
}

export type PriorityLevel = "High" | "Medium" | "Low";

export interface UpNextItem {
  id: string;
  time: string;
  taskLabel: string;
  studentName: string;
  priority: PriorityLevel;
}

export interface DistributionListRow {
  id: string;
  name: string;
  completionRate: number;
  leadCount: number;
  notCalled: number;
}

export interface AgentStatusSegment {
  id: string;
  label: string;
  minutes: number;
  display: string;
  percent: number;
  colorClass: string;
  dotClass: string;
}

export interface TimeAwayItem {
  id: string;
  label: string;
  minutes: number;
}

export type FunnelStageId = "leads" | "prospect" | "qualified" | "interested" | "readyToPay" | "paid";

export interface PipelineFunnelStage {
  id: FunnelStageId;
  label: string;
  count: number;
  percent: number | null;
  color: string;
  bgClass: string;
}

export interface WeeklyIncentiveMilestone {
  id: string;
  amount: number;
  percent: number;
  achieved: boolean;
  current: boolean;
}

export interface RevenuePoint {
  day: string;
  thisWeek: number;
  lastWeek: number;
}

export type FunnelRange = "today" | "thisWeek" | "thisMonth";
export type RevenueRange = "thisWeek" | "lastWeek";
