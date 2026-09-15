export type StageId =
  | "Prospect"
  | "Qualified"
  | "Interested"
  | "Paid"
  | "Ready to Pay"
  | "Enrolled";

export type StageFilterId = "all" | StageId;

export type QuickFilterId =
  | "all"
  | "highPriority"
  | "todaysDistribution"
  | "paymentActivity48h"
  | "lastActivity24h";

export interface Lead {
  id: string;
  phone: string;
  name: string;
  distribution: string;
  sourceCampaign: string;
  batch: string;
  stage: StageId;
  lastActivityTitle: string;
  lastActivityTime: string;
  lastContact: string;
  isHighPriority: boolean;
  isTodaysDistribution: boolean;
  isPaymentActivity48h: boolean;
  isLastActivity24h: boolean;
}

export interface LeadsFilterState {
  quickFilter: QuickFilterId;
  stage: StageFilterId;
  sourceCampaigns: string[];
  batches: string[];
}
