"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { clearAdminKey } from "@/lib/api";
import { useRequireAuth } from "@/hooks/useRequireAuth";
import { useAppDispatch } from "@/store/hooks";
import { checkAuth, logout as logoutAction } from "@/store/slices/authSlice";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminMobileNav from "./AdminMobileNav";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminShell({
  children,
  title,
  subtitle,
  onRefresh,
  refreshing,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  onRefresh?: () => void;
  refreshing?: boolean;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const ready = useRequireAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (ready) {
      dispatch(checkAuth());
    }
  }, [ready, dispatch]);

  function logout() {
    clearAdminKey();
    dispatch(logoutAction());
    router.push("/login");
  }

  if (!ready) {
    return (
      <main className="min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl space-y-4">
          <Skeleton className="h-10 w-full max-w-64" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-32 sm:h-36" />
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen lg:flex">
      <AdminSidebar onLogout={logout} />
      <AdminMobileNav
        open={mobileNavOpen}
        onOpenChange={setMobileNavOpen}
        onLogout={logout}
      />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <AdminHeader
          title={title}
          subtitle={subtitle}
          onRefresh={onRefresh}
          refreshing={refreshing}
          onMenuClick={() => setMobileNavOpen(true)}
        />
        <main className="safe-bottom flex-1 px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
