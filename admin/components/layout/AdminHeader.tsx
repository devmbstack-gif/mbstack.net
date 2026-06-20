"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bell, Menu, RefreshCw } from "lucide-react";
import { adminNavItems } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AdminHeader({
  title,
  subtitle,
  onRefresh,
  refreshing,
  onMenuClick,
}: {
  title: string;
  subtitle?: string;
  onRefresh?: () => void;
  refreshing?: boolean;
  onMenuClick: () => void;
}) {
  const pathname = usePathname();

  return (
    <header className="glass-header sticky top-0 z-20 border-b">
      <div className="flex flex-col gap-3 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open navigation menu</span>
            </Button>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="MB Stack"
                  width={120}
                  height={36}
                  className="h-7 w-auto object-contain lg:hidden"
                />
                <p className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:block">
                  MB Stack Admin
                </p>
              </div>
              <h1 className="mt-1 truncate text-xl font-bold tracking-tight sm:text-2xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground sm:line-clamp-none">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {onRefresh ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={onRefresh}
                    disabled={refreshing}
                  >
                    <RefreshCw
                      className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Refresh current page data</TooltipContent>
              </Tooltip>
            ) : null}

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Notifications coming soon</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {adminNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-xs font-semibold whitespace-nowrap sm:px-4 sm:text-sm ${
                pathname.startsWith(item.href)
                  ? "bg-primary text-white shadow-md"
                  : "border bg-white/80 text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
