"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdminKey } from "@/lib/api";

export function useRequireAuth() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!getAdminKey()) {
      router.replace("/login");
      return;
    }
    setReady(true);
  }, [router]);

  return ready;
}
