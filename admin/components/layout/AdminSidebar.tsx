"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogOut, ShieldCheck } from "lucide-react";
import { adminNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AdminSidebar({ onLogout }: { onLogout: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="sidebar-panel hidden w-72 shrink-0 flex-col text-white lg:flex">
      <div className="p-6">
        <Image
          src="/logo.png"
          alt="MB Stack"
          width={180}
          height={56}
          className="h-10 w-auto object-contain"
        />
        <h2 className="mt-3 text-lg font-bold">Admin Console</h2>
        <p className="mt-4 text-sm leading-relaxed text-white/60">
          Professional control center for inquiries, consultancy pipeline and
          team workflow.
        </p>
      </div>

      <Separator className="bg-white/10" />

      <nav className="flex-1 space-y-1 p-4">
        {adminNavItems.map((item) => {
          const active = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all",
                    active
                      ? "bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.18)] translate-x-1"
                      : "text-white/70 hover:bg-white/8 hover:text-white hover:translate-x-1",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl transition-all",
                      active
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "bg-white/8 text-white/80 group-hover:bg-white/12",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.hint}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>

      <div className="p-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Secure Session
          </div>
          <p className="mt-2 text-xs leading-relaxed text-white/55">
            API key authentication active. Logout when leaving the workstation.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={onLogout}
            className="mt-4 w-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
