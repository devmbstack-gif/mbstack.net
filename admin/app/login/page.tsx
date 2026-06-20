"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { KeyRound, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { loginAdmin } from "@/lib/api";
import { useAppDispatch } from "@/store/hooks";
import { setAuthenticated } from "@/store/slices/authSlice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const featureItems = [
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "API key protected access",
  },
  {
    icon: LockKeyhole,
    title: "Private",
    text: "Session-based admin auth",
  },
  {
    icon: KeyRound,
    title: "Controlled",
    text: "Role-ready architecture",
  },
];

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginAdmin(apiKey);
      dispatch(setAuthenticated());
      router.push("/dashboard");
    } catch {
      setError("Invalid admin API key");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mesh-bg safe-bottom safe-top flex min-h-screen min-h-dvh items-center justify-center p-4 sm:p-6">
      <div className="grid w-full max-w-5xl gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-xl lg:block card-3d">
          <div className="flex h-full flex-col justify-between">
            <div>
              <Image
                src="/logo.png"
                alt="MB Stack"
                width={200}
                height={64}
                className="mb-6 h-14 w-auto object-contain"
                priority
              />
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                MB Stack Enterprise Admin
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-tight">
                Professional control center for your business inquiries
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Manage contact submissions, consultancy pipeline, status
                workflows, analytics and team operations from one secure console.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {featureItems.map((item) => (
                <Tooltip key={item.title}>
                  <TooltipTrigger asChild>
                    <div className="rounded-2xl border bg-white/80 p-4 shadow-sm">
                      <item.icon className="h-5 w-5 text-primary" />
                      <p className="mt-3 font-bold">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{item.text}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>

        <Card className="card-3d w-full border-0 shadow-2xl">
          <CardHeader className="px-4 sm:px-6">
            <Image
              src="/logo.png"
              alt="MB Stack"
              width={160}
              height={50}
              className="mb-4 h-10 w-auto object-contain lg:hidden"
              priority
            />
            <CardTitle className="text-xl sm:text-2xl">
              Sign in to Admin
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Enter your backend `ADMIN_API_KEY` to access the dashboard.
            </p>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="mb-5 grid gap-3 sm:grid-cols-3 lg:hidden">
              {featureItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-white/70 p-3 text-center shadow-sm"
                >
                  <item.icon className="mx-auto h-4 w-4 text-primary" />
                  <p className="mt-2 text-xs font-bold">{item.title}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="apiKey"
                  className="text-sm font-semibold text-foreground"
                >
                  Admin API Key
                </label>
                <Input
                  id="apiKey"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  required
                  placeholder="Enter ADMIN_API_KEY"
                  autoComplete="current-password"
                />
              </div>

              {error ? (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </p>
              ) : null}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Access Dashboard"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
