import { Users, PhoneCall, PhoneOff, Clock, ShoppingBasket } from "lucide-react";
import { DashedRadialGauge } from "./charts/DashedRadialGauge";

export function TodaysDistributionCard({
  percent,
  totalLead,
  called,
  notCalled,
  callDuration,
  sales,
}: {
  percent: number;
  totalLead: number;
  called: number;
  notCalled: number;
  callDuration: string;
  sales: string;
}) {
  const rows = [
    { id: "total-lead", label: "Total Lead", value: totalLead, icon: Users },
    { id: "called", label: "Called", value: called, icon: PhoneCall },
    { id: "not-called", label: "Not Called", value: notCalled, icon: PhoneOff },
    { id: "duration", label: "Total Call Duration", value: callDuration, icon: Clock },
    { id: "sales", label: "Sales", value: sales, icon: ShoppingBasket },
  ];

  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-3xl bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-[15px] font-bold text-dark-950 uppercase">Today&rsquo;s distribution</h3>
        <a href="#" className="font-heading text-sm font-medium text-[#3e97ff]">
          View all
        </a>
      </div>
      <div className="flex items-center gap-6">
        <DashedRadialGauge percent={percent}>
          <p className="font-heading text-2xl font-bold text-primary-600">{percent}%</p>
          <p className="px-2 text-center font-body text-sm text-gray-600">Unique Connected Call</p>
        </DashedRadialGauge>
        <div className="flex flex-1 flex-col">
          {rows.map((row, index) => (
            <div key={row.id}>
              <div className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-md bg-gray-100">
                    <row.icon className="size-3 text-gray-700" strokeWidth={2} />
                  </div>
                  <span className="font-body text-sm text-dark-950">{row.label}</span>
                </div>
                <span className="font-heading text-lg font-bold text-dark-950">{row.value}</span>
              </div>
              {index !== rows.length - 1 && <div className="h-px w-full bg-gray-200" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
