import { TopNav } from "@/components/layout/TopNav";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { StatCardsRow } from "@/components/dashboard/StatCardsRow";
import { CallsSummaryCard } from "@/components/dashboard/CallsSummaryCard";
import { MonthlyTargetCard } from "@/components/dashboard/MonthlyTargetCard";
import { ActionNeededBar } from "@/components/dashboard/ActionNeededBar";
import { TodaysTaskSummaryCard } from "@/components/dashboard/TodaysTaskSummaryCard";
import { TodaysDistributionCard } from "@/components/dashboard/TodaysDistributionCard";
import { PendingTaskCard } from "@/components/dashboard/PendingTaskCard";
import { DistributionListCard } from "@/components/dashboard/DistributionListCard";
import { AgentStatusActivityLog } from "@/components/dashboard/AgentStatusActivityLog";
import { PipelineFunnelCard } from "@/components/dashboard/PipelineFunnelCard";
import { WeeklyIncentiveCard } from "@/components/dashboard/WeeklyIncentiveCard";
import { WeeklyRevenueTrendCard } from "@/components/dashboard/WeeklyRevenueTrendCard";
import {
  ACTION_NEEDED_GAUGE_PERCENT,
  ACTION_NEEDED_ITEMS,
  AGENT_NAME,
  AGENT_STATUS_SEGMENTS,
  CALL_STATS,
  DISTRIBUTION_LIST,
  MONTHLY_TARGET,
  PENDING_TASK_TABS,
  PIPELINE_CONVERSION_RATE,
  PIPELINE_FUNNEL_BY_RANGE,
  REVENUE_TOTAL_BY_RANGE,
  REVENUE_TREND,
  STAT_CARDS,
  TIME_AWAY_ITEMS,
  TIME_AWAY_TOTAL,
  TODAYS_DISTRIBUTION_SUMMARY,
  TODAYS_TASK_SUMMARY,
  TOTAL_LOGIN_DISPLAY,
  UP_NEXT_BY_TAB,
  UP_NEXT_OVERDUE_COUNT,
  WEEKLY_INCENTIVE_CURRENT,
  WEEKLY_INCENTIVE_MILESTONES,
  WEEKLY_INCENTIVE_NEXT_TARGET,
  WEEKLY_INCENTIVE_NEXT_UNLOCK_AMOUNT,
  WEEKLY_INCENTIVE_NEXT_UNLOCK_PERCENT,
  WEEKLY_INCENTIVE_PROGRESS_PERCENT,
  WEEKLY_INCENTIVE_REMAINING,
} from "@/lib/dashboard/mock-data";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <TopNav />
      <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-4 px-10 py-6">
        <WelcomeBanner name={AGENT_NAME} />

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <StatCardsRow cards={STAT_CARDS} />
          <CallsSummaryCard stats={CALL_STATS} />
          <MonthlyTargetCard
            percent={MONTHLY_TARGET.achievedPercent}
            currentRevenue={MONTHLY_TARGET.currentRevenue}
            targetRevenue={MONTHLY_TARGET.targetRevenue}
            remaining={MONTHLY_TARGET.remaining}
          />
        </div>

        <ActionNeededBar percent={ACTION_NEEDED_GAUGE_PERCENT} items={ACTION_NEEDED_ITEMS} />

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <TodaysTaskSummaryCard
              percent={TODAYS_TASK_SUMMARY.percent}
              totalTask={TODAYS_TASK_SUMMARY.totalTask}
              pending={TODAYS_TASK_SUMMARY.pending}
              completed={TODAYS_TASK_SUMMARY.completed}
              expectedRevenue={TODAYS_TASK_SUMMARY.expectedRevenue}
            />
            <PendingTaskCard tabs={PENDING_TASK_TABS} itemsByTab={UP_NEXT_BY_TAB} overdueCount={UP_NEXT_OVERDUE_COUNT} />
          </div>
          <div className="flex flex-col gap-3">
            <TodaysDistributionCard
              percent={TODAYS_DISTRIBUTION_SUMMARY.percent}
              totalLead={TODAYS_DISTRIBUTION_SUMMARY.totalLead}
              called={TODAYS_DISTRIBUTION_SUMMARY.called}
              notCalled={TODAYS_DISTRIBUTION_SUMMARY.notCalled}
              callDuration={TODAYS_DISTRIBUTION_SUMMARY.callDuration}
              sales={TODAYS_DISTRIBUTION_SUMMARY.sales}
            />
            <DistributionListCard rows={DISTRIBUTION_LIST} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <AgentStatusActivityLog
            totalLoginDisplay={TOTAL_LOGIN_DISPLAY}
            segments={AGENT_STATUS_SEGMENTS}
            timeAwayTotal={TIME_AWAY_TOTAL}
            timeAwayItems={TIME_AWAY_ITEMS}
          />
          <PipelineFunnelCard stagesByRange={PIPELINE_FUNNEL_BY_RANGE} conversionRateByRange={PIPELINE_CONVERSION_RATE} />
        </div>

        <div className="grid grid-cols-1 gap-3 pb-4 lg:grid-cols-2">
          <WeeklyIncentiveCard
            current={WEEKLY_INCENTIVE_CURRENT}
            milestones={WEEKLY_INCENTIVE_MILESTONES}
            progressPercent={WEEKLY_INCENTIVE_PROGRESS_PERCENT}
            nextTarget={WEEKLY_INCENTIVE_NEXT_TARGET}
            nextUnlockPercent={WEEKLY_INCENTIVE_NEXT_UNLOCK_PERCENT}
            nextUnlockAmount={WEEKLY_INCENTIVE_NEXT_UNLOCK_AMOUNT}
            remaining={WEEKLY_INCENTIVE_REMAINING}
          />
          <WeeklyRevenueTrendCard data={REVENUE_TREND} totalsByRange={REVENUE_TOTAL_BY_RANGE} />
        </div>
      </main>
    </div>
  );
}
