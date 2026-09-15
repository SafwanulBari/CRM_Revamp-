"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "/figma/icon-apps.svg", href: "/dashboard" },
  { id: "leads", label: "Leads", icon: "/figma/icon-users.svg", href: "/leads" },
  { id: "task", label: "Task", icon: "/figma/icon-list-check.svg", href: null },
  { id: "leaderboard", label: "Leaderboard", icon: "/figma/icon-podium.svg", href: null },
] as const;

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between bg-navy-950 px-10 py-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/figma/logo.png" alt="Shikho CRM" className="h-11 w-auto" />

      <nav className="flex h-11 items-center gap-0 rounded-full bg-white/15 p-0.5">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href != null && pathname.startsWith(item.href);
          const className = `flex h-10 items-center gap-2 rounded-full px-5 py-2 font-heading text-sm font-bold whitespace-nowrap transition-colors ${
            isActive ? "bg-white text-dark-950" : "text-white hover:bg-white/10"
          }`;
          const content = (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="" className="size-4" />
              {item.label}
            </>
          );
          return item.href ? (
            <Link key={item.id} href={item.href} className={className}>
              {content}
            </Link>
          ) : (
            <div key={item.id} className={className}>
              {content}
            </div>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Search"
          className="flex size-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma/icon-search.svg" alt="" className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Call"
          className="flex size-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma/icon-phone-flip.svg" alt="" className="size-4" />
        </button>
        <button
          type="button"
          className="flex h-11 items-center gap-1.5 whitespace-nowrap rounded-full bg-white/15 px-4 transition-colors hover:bg-white/25"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma/icon-status-dot.svg" alt="" className="size-4" />
          <span className="font-heading text-sm font-semibold text-white">Set Status</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma/icon-angle-small-down.svg" alt="" className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="flex size-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma/icon-bell-inner.svg" alt="" className="size-4" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/figma/avatar-nav.png" alt="Account" className="size-11 rounded-full object-cover" />
      </div>
    </header>
  );
}
