"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAdminKey } from "@/lib/api";

export default function AdminHomePage() {
  const router = useRouter();

  useEffect(() => {
    if (getAdminKey()) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-slate-500">Loading admin...</p>
    </main>
  );
}
