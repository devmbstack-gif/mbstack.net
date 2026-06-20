"use client";

import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function StatCard3D({
  label,
  value,
  hint,
  icon: Icon,
  accent,
  trend,
}: {
  label: string;
  value: string | number;
  hint: string;
  icon: LucideIcon;
  accent: string;
  trend?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className={cn("card-3d overflow-hidden border-0", accent)}>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                  {label}
                </p>
                <p className="mt-2 text-3xl font-black tracking-tight sm:mt-3 sm:text-4xl">
                  {value}
                </p>
                {trend ? (
                  <p className="mt-2 text-xs font-semibold text-primary">
                    {trend}
                  </p>
                ) : null}
              </div>
              <div className="shrink-0 rounded-2xl bg-white/80 p-2.5 shadow-inner sm:p-3">
                <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">{hint}</TooltipContent>
    </Tooltip>
  );
}
