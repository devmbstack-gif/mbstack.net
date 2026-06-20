const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3701/api";

export function getAdminKey(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem("mbstack_admin_key");
}

export function setAdminKey(key: string) {
  sessionStorage.setItem("mbstack_admin_key", key);
}

export function clearAdminKey() {
  sessionStorage.removeItem("mbstack_admin_key");
}

async function adminFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const key = getAdminKey();
  if (!key) throw new Error("Not authenticated");

  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "x-admin-key": key,
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Request failed");
  }

  return res.json() as Promise<T>;
}

export async function loginAdmin(apiKey: string) {
  const res = await fetch(`${API_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apiKey }),
  });

  if (!res.ok) throw new Error("Invalid API key");
  setAdminKey(apiKey);
  return res.json();
}

export type Stats = {
  contacts: number;
  consultancy: number;
  pendingContacts: number;
  pendingConsultancy: number;
};

export type ContactInquiry = {
  id: string;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  status: string;
  createdAt: string;
};

export type ConsultancyRequest = {
  id: string;
  name: string;
  email: string;
  type: string;
  budget: string;
  packageName?: string | null;
  description: string;
  status: string;
  createdAt: string;
};

export const adminApi = {
  stats: () => adminFetch<Stats>("/admin/stats"),
  contacts: () => adminFetch<ContactInquiry[]>("/admin/contacts"),
  consultancy: () => adminFetch<ConsultancyRequest[]>("/admin/consultancy"),
  updateContactStatus: (id: string, status: string) =>
    adminFetch(`/admin/contacts/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  updateConsultancyStatus: (id: string, status: string) =>
    adminFetch(`/admin/consultancy/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};
