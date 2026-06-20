import {
  BriefcaseBusiness,
  LayoutDashboard,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type AdminNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  hint: string;
};

export const adminNavItems: AdminNavItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    hint: "Overview, KPIs, charts and recent activity",
  },
  {
    href: "/contacts",
    label: "Contacts",
    icon: Mail,
    hint: "Manage contact form inquiries and statuses",
  },
  {
    href: "/consultancy",
    label: "Consultancy",
    icon: BriefcaseBusiness,
    hint: "Review consultancy requests, budgets and packages",
  },
];
