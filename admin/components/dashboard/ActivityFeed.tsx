"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDate, getInitials } from "@/lib/utils";
import type { ContactInquiry, ConsultancyRequest } from "@/lib/api";

type ActivityItem =
  | ({ kind: "contact" } & ContactInquiry)
  | ({ kind: "consultancy" } & ConsultancyRequest);

function statusVariant(status: string) {
  if (status === "contacted") return "contacted";
  if (status === "closed") return "closed";
  return "pending";
}

export default function ActivityFeed({
  contacts,
  consultancy,
}: {
  contacts: ContactInquiry[];
  consultancy: ConsultancyRequest[];
}) {
  const activity: ActivityItem[] = [
    ...contacts.map((item) => ({ kind: "contact" as const, ...item })),
    ...consultancy.map((item) => ({ kind: "consultancy" as const, ...item })),
  ]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 8);

  return (
    <Card className="card-3d border-0">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-lg sm:text-xl">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <ScrollArea className="h-72 pr-2 sm:h-80 sm:pr-4">
          <div className="space-y-4">
            {activity.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No recent inquiries yet.
              </p>
            ) : null}
            {activity.map((item) => (
              <div
                key={`${item.kind}-${item.id}`}
                className="flex gap-3 rounded-2xl border bg-white/70 p-3 shadow-sm sm:p-4"
              >
                <Avatar>
                  <AvatarFallback>{getInitials(item.name)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">{item.name}</p>
                    <Badge variant={statusVariant(item.status)}>
                      {item.status}
                    </Badge>
                    <Badge variant="secondary">
                      {item.kind === "contact" ? "Contact" : "Consultancy"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.email}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm">
                    {item.kind === "contact"
                      ? item.message
                      : `${item.type} · ${item.budget} · ${item.description}`}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {formatDate(item.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
