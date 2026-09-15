import type { Lead, StageId } from "./types";

const NAMES = [
  "Ashiqur Rahman",
  "Tasnim Rahman",
  "Rakibul Hasan",
  "Nusrat Jahan",
  "Mahin Chowdhury",
  "Farhana Akter",
  "Shakil Ahmed",
  "Sadia Islam",
  "Imran Kabir",
  "Tanjila Haque",
];

const DISTRIBUTIONS = [
  "C9 – S28 – Fresh",
  "C10 – S28 – Fresh",
  "C6 – S31 – Trial",
  "C7 – S31 – Trial",
  "C11 – S28 – Fresh",
];

const SOURCE_CAMPAIGNS = ["Life like", "Google Ads", "Facebook Ads", "Referral", "Organic"];

const BATCHES = ["SSC 2031", "HSC 2031", "SSC 2032", "HSC 2032"];

const STAGES: StageId[] = [
  "Prospect",
  "Qualified",
  "Interested",
  "Paid",
  "Ready to Pay",
  "Enrolled",
];

const ACTIVITY_TITLES = [
  "Clicked on Purchase",
  "Watched Demo Class",
  "Downloaded Brochure",
  "Attended Webinar",
];

const ACTIVITY_TIMES = ["1h ago", "2h ago", "5h ago", "24h ago"];

const LAST_CONTACTS = ["Today", "1 day ago", "2 days ago", "5 days ago"];

const TOTAL_LEADS = 60;

function buildLead(index: number): Lead {
  const phoneSuffix = String(1654258456 + index).slice(-9);
  return {
    id: `lead-${index + 1}`,
    phone: `0${phoneSuffix}`,
    name: NAMES[index % NAMES.length],
    distribution: DISTRIBUTIONS[index % DISTRIBUTIONS.length],
    sourceCampaign: SOURCE_CAMPAIGNS[(index + 2) % SOURCE_CAMPAIGNS.length],
    batch: BATCHES[(index + 1) % BATCHES.length],
    stage: STAGES[(index + 3) % STAGES.length],
    lastActivityTitle: ACTIVITY_TITLES[(index + 1) % ACTIVITY_TITLES.length],
    lastActivityTime: ACTIVITY_TIMES[(index + 2) % ACTIVITY_TIMES.length],
    lastContact: LAST_CONTACTS[(index + 3) % LAST_CONTACTS.length],
    isHighPriority: index % 7 === 0,
    isTodaysDistribution: index % 11 === 2,
    isPaymentActivity48h: index % 9 === 4,
    isLastActivity24h: index % 3 === 1,
  };
}

export const MOCK_LEADS: Lead[] = Array.from({ length: TOTAL_LEADS }, (_, i) => buildLead(i));
