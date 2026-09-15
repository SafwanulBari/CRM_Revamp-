import type {
  ActionNeededItem,
  AgentStatusSegment,
  CallStat,
  DistributionListRow,
  PendingTaskTab,
  PipelineFunnelStage,
  RevenuePoint,
  StatCardData,
  TimeAwayItem,
  UpNextItem,
  WeeklyIncentiveMilestone,
} from "./types";

export const AGENT_NAME = "Undertaker";

export const STAT_CARDS: StatCardData[] = [
  {
    id: "total-revenue",
    label: "Total Revenue",
    value: "$12,800",
    icon: "hand-coins",
    bgClass: "bg-green-light",
    iconBgClass: "bg-success-900",
  },
  {
    id: "total-sales",
    label: "Total sales",
    value: "12",
    icon: "shopping-basket",
    bgClass: "bg-purple-light",
    iconBgClass: "bg-primary-900",
  },
  {
    id: "weekly-target",
    label: "Weekly Target Achived",
    value: "24%",
    icon: "target",
    bgClass: "bg-light-blue",
    iconBgClass: "bg-info-900",
  },
  {
    id: "leaderboard",
    label: "Leaderboard",
    value: "84",
    suffix: "th",
    icon: "trophy",
    bgClass: "bg-light-red",
    iconBgClass: "bg-secondary-900",
  },
];

export const CALL_STATS: CallStat[] = [
  { id: "total-call", label: "Total Call", value: "264", icon: "phone" },
  { id: "unique-call", label: "Total Unique Call", value: "154", icon: "phone-outgoing" },
  { id: "unique-connected", label: "Total Unique Connected", value: "64", icon: "phone-forwarded" },
  { id: "not-called", label: "Not Called", value: "120", icon: "phone-off" },
  { id: "call-duration", label: "Total Call Duration", value: "3h 5m", icon: "history" },
];

export const MONTHLY_TARGET = {
  achievedPercent: 53,
  currentRevenue: "$420,000",
  targetRevenue: "$800,000",
  remaining: "$380,000",
};

export const ACTION_NEEDED_GAUGE_PERCENT = 53;

export const ACTION_NEEDED_ITEMS: ActionNeededItem[] = [
  {
    id: "high-priority",
    label: "High Priority",
    value: 5,
    valueClass: "text-danger-700",
    gradientFrom: "#fdf1f4",
    tooltip: "Leads flagged as high priority that need immediate follow-up.",
  },
  {
    id: "payment-activities",
    label: "Payment Activities (48hr)",
    value: 4,
    valueClass: "text-warning-700",
    gradientFrom: "#fff9ee",
    tooltip: "Leads with payment activity in the last 48 hours.",
  },
  {
    id: "call-attempted",
    label: "Call attempted <3 days",
    value: 45,
    valueClass: "text-info-800",
    gradientFrom: "#f3f9ff",
    tooltip: "Leads called within the last 3 days awaiting a response.",
  },
  {
    id: "cold",
    label: "Cold",
    value: 2,
    valueClass: "text-primary-800",
    gradientFrom: "#f2f3fd",
    tooltip: "Leads that have gone cold and need re-engagement.",
  },
  {
    id: "going-cold",
    label: "Going cold",
    value: 4,
    valueClass: "text-danger-700",
    gradientFrom: "#fdf3f2",
    tooltip: "Leads at risk of going cold soon.",
  },
  {
    id: "enrollment-pending",
    label: "Enrollment Pending",
    value: 6,
    valueClass: "text-info-800",
    gradientFrom: "#f2f9fd",
    tooltip: "Leads ready to enroll, pending final confirmation.",
  },
];

export const TODAYS_TASK_SUMMARY = {
  percent: 53,
  totalTask: 48,
  pending: 24,
  completed: 24,
  expectedRevenue: "$13,500",
};

export const TODAYS_DISTRIBUTION_SUMMARY = {
  percent: 53,
  totalLead: 48,
  called: 24,
  notCalled: 24,
  callDuration: "2h 35m",
  sales: "03",
};

export const PENDING_TASK_TABS: PendingTaskTab[] = [
  { id: "payment-followup", label: "Payment Follow-Up", count: 15, amount: "$6,500" },
  { id: "interested-followup", label: "Interested Follow-Up", count: 12, amount: "$6,500" },
  { id: "schedule-call", label: "Schedule Call", count: 7 },
];

export const UP_NEXT_BY_TAB: Record<string, UpNextItem[]> = {
  "payment-followup": [
    { id: "un-1", time: "10:30 AM", taskLabel: "Payment Follow-Up", studentName: "Tasnim Rahman", priority: "High" },
    { id: "un-2", time: "11:15 AM", taskLabel: "Payment Follow-Up", studentName: "Imran Kabir", priority: "Medium" },
    { id: "un-3", time: "1:00 PM", taskLabel: "Payment Follow-Up", studentName: "Sadia Islam", priority: "Low" },
  ],
  "interested-followup": [
    { id: "un-4", time: "10:35 AM", taskLabel: "Interested Follow-Up", studentName: "Rakibul Hasan", priority: "Medium" },
    { id: "un-5", time: "10:40 AM", taskLabel: "Interested Follow-Up", studentName: "Rakibul Hasan", priority: "Low" },
    { id: "un-6", time: "2:20 PM", taskLabel: "Interested Follow-Up", studentName: "Nusrat Jahan", priority: "High" },
  ],
  "schedule-call": [
    { id: "un-7", time: "12:00 PM", taskLabel: "Schedule Call", studentName: "Mahin Chowdhury", priority: "Medium" },
    { id: "un-8", time: "3:30 PM", taskLabel: "Schedule Call", studentName: "Farhana Akter", priority: "Low" },
  ],
};

export const UP_NEXT_OVERDUE_COUNT = 64;

export const DISTRIBUTION_LIST: DistributionListRow[] = [
  { id: "d1", name: "C9 – S28 – Fresh", completionRate: 76, leadCount: 12, notCalled: 9 },
  { id: "d2", name: "C10 – S28 – Fresh", completionRate: 36, leadCount: 15, notCalled: 10 },
  { id: "d3", name: "C6 – S31 – Trial", completionRate: 76, leadCount: 12, notCalled: 9 },
  { id: "d4", name: "C7 – S31 – Trial", completionRate: 76, leadCount: 12, notCalled: 9 },
  { id: "d5", name: "C11 – S28 – Fresh", completionRate: 76, leadCount: 12, notCalled: 9 },
  { id: "d6", name: "C12 – S29 – Fresh", completionRate: 76, leadCount: 12, notCalled: 9 },
  { id: "d7", name: "Admission – S14 – Fresh", completionRate: 76, leadCount: 12, notCalled: 9 },
];

export const AGENT_STATUS_SEGMENTS: AgentStatusSegment[] = [
  { id: "active", label: "Active", minutes: 345, display: "5h 45m", percent: 68, colorClass: "bg-success-500", dotClass: "bg-success-500" },
  { id: "break", label: "Break", minutes: 45, display: "45m", percent: 9, colorClass: "bg-warning-500", dotClass: "bg-warning-500" },
  { id: "break-for-work", label: "Break For Work", minutes: 75, display: "1h 15m", percent: 15, colorClass: "bg-info-500", dotClass: "bg-info-500" },
];

export const TOTAL_LOGIN_DISPLAY = "7h 45m";

export const TIME_AWAY_TOTAL = "45m";

export const TIME_AWAY_ITEMS: TimeAwayItem[] = [
  { id: "washroom", label: "Washroom", minutes: 5 },
  { id: "meeting", label: "Meeting / Training", minutes: 10 },
  { id: "lunch", label: "Lunch", minutes: 10 },
  { id: "whatsapp", label: "WhatsApp Call", minutes: 10 },
  { id: "prayer-1", label: "Prayer", minutes: 10 },
  { id: "prayer-2", label: "Prayer", minutes: 10 },
  { id: "admission", label: "Admission", minutes: 10 },
];

export const PIPELINE_FUNNEL_BY_RANGE: Record<string, PipelineFunnelStage[]> = {
  today: [
    { id: "leads", label: "Leads", count: 54, percent: null, color: "#2884ef", bgClass: "bg-[#eaf3ff]" },
    { id: "prospect", label: "Prospect", count: 27, percent: 65, color: "#147d88", bgClass: "bg-[#eaf6f4]" },
    { id: "qualified", label: "Qualified", count: 27, percent: 45, color: "#e29032", bgClass: "bg-[#fdf2e4]" },
    { id: "interested", label: "Interested", count: 4, percent: 25, color: "#3e1a9f", bgClass: "bg-[#efedfb]" },
    { id: "readyToPay", label: "Ready to Pay", count: 3, percent: 10, color: "#e2008d", bgClass: "bg-[#fdecf6]" },
    { id: "paid", label: "Paid", count: 2, percent: 5, color: "#288e08", bgClass: "bg-[#eef8ec]" },
  ],
  thisWeek: [
    { id: "leads", label: "Leads", count: 312, percent: null, color: "#2884ef", bgClass: "bg-[#eaf3ff]" },
    { id: "prospect", label: "Prospect", count: 168, percent: 54, color: "#147d88", bgClass: "bg-[#eaf6f4]" },
    { id: "qualified", label: "Qualified", count: 121, percent: 39, color: "#e29032", bgClass: "bg-[#fdf2e4]" },
    { id: "interested", label: "Interested", count: 46, percent: 15, color: "#3e1a9f", bgClass: "bg-[#efedfb]" },
    { id: "readyToPay", label: "Ready to Pay", count: 22, percent: 7, color: "#e2008d", bgClass: "bg-[#fdecf6]" },
    { id: "paid", label: "Paid", count: 14, percent: 4, color: "#288e08", bgClass: "bg-[#eef8ec]" },
  ],
  thisMonth: [
    { id: "leads", label: "Leads", count: 1240, percent: null, color: "#2884ef", bgClass: "bg-[#eaf3ff]" },
    { id: "prospect", label: "Prospect", count: 640, percent: 52, color: "#147d88", bgClass: "bg-[#eaf6f4]" },
    { id: "qualified", label: "Qualified", count: 430, percent: 35, color: "#e29032", bgClass: "bg-[#fdf2e4]" },
    { id: "interested", label: "Interested", count: 180, percent: 15, color: "#3e1a9f", bgClass: "bg-[#efedfb]" },
    { id: "readyToPay", label: "Ready to Pay", count: 96, percent: 8, color: "#e2008d", bgClass: "bg-[#fdecf6]" },
    { id: "paid", label: "Paid", count: 58, percent: 5, color: "#288e08", bgClass: "bg-[#eef8ec]" },
  ],
};

export const PIPELINE_CONVERSION_RATE: Record<string, number> = {
  today: 10,
  thisWeek: 12,
  thisMonth: 14,
};

export const WEEKLY_INCENTIVE_CURRENT = 680;
export const WEEKLY_INCENTIVE_MILESTONES: WeeklyIncentiveMilestone[] = [
  { id: "m0", amount: 0, percent: 0, achieved: false, current: false },
  { id: "m400", amount: 400, percent: 20, achieved: true, current: false },
  { id: "m600", amount: 600, percent: 40, achieved: true, current: true },
  { id: "m700", amount: 700, percent: 60, achieved: false, current: false },
  { id: "m900", amount: 900, percent: 80, achieved: false, current: false },
  { id: "m1000", amount: 1000, percent: 100, achieved: false, current: false },
];
export const WEEKLY_INCENTIVE_PROGRESS_PERCENT = 41;
export const WEEKLY_INCENTIVE_NEXT_TARGET = 700;
export const WEEKLY_INCENTIVE_NEXT_UNLOCK_PERCENT = 60;
export const WEEKLY_INCENTIVE_NEXT_UNLOCK_AMOUNT = 420;
export const WEEKLY_INCENTIVE_REMAINING = 20;

export const REVENUE_TREND: RevenuePoint[] = [
  { day: "Sat", thisWeek: 2000, lastWeek: 2600 },
  { day: "Sun", thisWeek: 2200, lastWeek: 3000 },
  { day: "Mon", thisWeek: 4300, lastWeek: 3400 },
  { day: "Tue", thisWeek: 4100, lastWeek: 3600 },
  { day: "Wed", thisWeek: 9200, lastWeek: 5200 },
  { day: "Thu", thisWeek: 6900, lastWeek: 4800 },
  { day: "Fri", thisWeek: 9800, lastWeek: 6100 },
];

export const REVENUE_TOTAL_BY_RANGE: Record<string, { total: string; changePercent: number; avgPerDay: string }> = {
  thisWeek: { total: "$420,000", changePercent: 18, avgPerDay: "$64,000" },
  lastWeek: { total: "$356,000", changePercent: -6, avgPerDay: "$51,000" },
};
