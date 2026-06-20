"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import ReduxProvider from "./ReduxProvider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
    </ReduxProvider>
  );
}
