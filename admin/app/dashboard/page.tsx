"use client";

import { useEffect } from "react";
import {
  BriefcaseBusiness,
  Clock3,
  Mail,
  Users,
} from "lucide-react";
import AdminShell from "@/components/layout/AdminShell";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import StatCard3D from "@/components/dashboard/StatCard3D";
import StatusChart from "@/components/dashboard/StatusChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchContacts } from "@/store/slices/contactsSlice";
import { fetchConsultancy } from "@/store/slices/consultancySlice";
import { fetchDashboardStats } from "@/store/slices/dashboardSlice";
import { formatDate } from "@/lib/utils";

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { stats, loading, error, lastUpdated } = useAppSelector(
    (state) => state.dashboard,
  );
  const contacts = useAppSelector((state) => state.contacts.items);
  const consultancy = useAppSelector((state) => state.consultancy.items);

  function refreshAll() {
    dispatch(fetchDashboardStats());
    dispatch(fetchContacts());
    dispatch(fetchConsultancy());
  }

  useEffect(() => {
    refreshAll();
  }, [dispatch]);

  const totalPending =
    (stats?.pendingContacts ?? 0) + (stats?.pendingConsultancy ?? 0);
  const totalItems = (stats?.contacts ?? 0) + (stats?.consultancy ?? 0);
  const completionRate =
    totalItems === 0
      ? 0
      : Math.round(((totalItems - totalPending) / totalItems) * 100);

  return (
    <AdminShell
      title="Dashboard"
      subtitle="Comprehensive overview of inquiries, pipeline health and recent activity."
      onRefresh={refreshAll}
      refreshing={loading}
    >
      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground sm:mb-6 sm:gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border bg-white/80 px-3 py-2 text-xs shadow-sm sm:px-4 sm:text-sm">
              <Clock3 className="h-4 w-4 shrink-0 text-primary" />
              <span className="truncate">
                Last updated: {lastUpdated ? formatDate(lastUpdated) : "—"}
              </span>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            Data is fetched live from the MB Stack backend API
          </TooltipContent>
        </Tooltip>
      </div>

      {loading && !stats ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-36" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard3D
            label="Contact Inquiries"
            value={stats?.contacts ?? 0}
            hint="Total number of contact form submissions received from the website."
            icon={Mail}
            accent="bg-gradient-to-br from-white to-emerald-50"
            trend={`${stats?.pendingContacts ?? 0} pending review`}
          />
          <StatCard3D
            label="Consultancy Requests"
            value={stats?.consultancy ?? 0}
            hint="Total consultancy leads including type, budget and project details."
            icon={BriefcaseBusiness}
            accent="bg-gradient-to-br from-white to-sky-50"
            trend={`${stats?.pendingConsultancy ?? 0} pending review`}
          />
          <StatCard3D
            label="Pending Contacts"
            value={stats?.pendingContacts ?? 0}
            hint="Contact inquiries still waiting for first response or follow-up."
            icon={Users}
            accent="bg-gradient-to-br from-white to-amber-50"
          />
          <StatCard3D
            label="Pending Consultancy"
            value={stats?.pendingConsultancy ?? 0}
            hint="Consultancy requests that still need qualification or a sales call."
            icon={Clock3}
            accent="bg-gradient-to-br from-white to-violet-50"
          />
        </div>
      )}

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <StatusChart
            contacts={stats?.contacts ?? 0}
            consultancy={stats?.consultancy ?? 0}
            pendingContacts={stats?.pendingContacts ?? 0}
            pendingConsultancy={stats?.pendingConsultancy ?? 0}
          />
        </div>

        <Card className="card-3d border-0">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-lg sm:text-xl">Pipeline Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 px-4 sm:space-y-6 sm:px-6">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">Completion Rate</span>
                <span className="font-bold text-primary">{completionRate}%</span>
              </div>
              <Progress value={completionRate} />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between rounded-xl bg-muted/70 px-4 py-3">
                <span>Total inquiries</span>
                <strong>{totalItems}</strong>
              </div>
              <div className="flex justify-between rounded-xl bg-muted/70 px-4 py-3">
                <span>Open pending items</span>
                <strong>{totalPending}</strong>
              </div>
              <div className="flex justify-between rounded-xl bg-muted/70 px-4 py-3">
                <span>Resolved / progressed</span>
                <strong>{totalItems - totalPending}</strong>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <ActivityFeed contacts={contacts} consultancy={consultancy} />
      </div>
    </AdminShell>
  );
}
