import { TopNav } from "@/components/layout/TopNav";
import { LeadsListPage } from "@/components/leads/LeadsListPage";

export default function LeadsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <TopNav />
      <LeadsListPage />
    </div>
  );
}
