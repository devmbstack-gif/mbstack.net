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
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {label}
                </p>
                <p className="mt-3 text-4xl font-black tracking-tight">
                  {value}
                </p>
                {trend ? (
                  <p className="mt-2 text-xs font-semibold text-primary">
                    {trend}
                  </p>
                ) : null}
              </div>
              <div className="rounded-2xl bg-white/80 p-3 shadow-inner">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">{hint}</TooltipContent>
    </Tooltip>
  );
}
