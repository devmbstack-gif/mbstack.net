"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { LogOut, ShieldCheck, X } from "lucide-react";
import { adminNavItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AdminMobileNav({
  open,
  onOpenChange,
  onLogout,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLogout: () => void;
}) {
  const pathname = usePathname();

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 flex w-[min(100vw-3rem,20rem)] flex-col outline-none transition-transform duration-300 data-[state=closed]:-translate-x-full">
          <aside className="sidebar-panel flex h-full flex-col text-white">
            <div className="flex items-start justify-between gap-3 p-5 pb-4">
              <div>
                <Image
                  src="/logo.png"
                  alt="MB Stack"
                  width={160}
                  height={48}
                  className="h-9 w-auto object-contain"
                />
                <Dialog.Title className="mt-3 text-lg font-bold">
                  Admin Console
                </Dialog.Title>
                <Dialog.Description className="sr-only">
                  Mobile navigation menu for the MB Stack admin panel
                </Dialog.Description>
              </div>
              <Dialog.Close asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </Dialog.Close>
            </div>

            <Separator className="bg-white/10" />

            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
              {adminNavItems.map((item) => {
                const active = pathname.startsWith(item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all",
                      active
                        ? "bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.18)]"
                        : "text-white/70 hover:bg-white/8 hover:text-white",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-xl",
                        active
                          ? "bg-primary text-white shadow-lg shadow-primary/30"
                          : "bg-white/8 text-white/80",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block">{item.label}</span>
                      <span className="mt-0.5 block text-xs font-normal text-white/50">
                        {item.hint}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="safe-bottom p-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Secure Session
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/55">
                  API key authentication active. Logout when leaving the
                  workstation.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onOpenChange(false);
                    onLogout();
                  }}
                  className="mt-4 w-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </aside>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
