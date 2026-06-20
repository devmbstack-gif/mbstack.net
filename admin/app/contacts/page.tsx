"use client";

import { useEffect, useMemo, useState } from "react";
import { Mail } from "lucide-react";
import AdminShell from "@/components/layout/AdminShell";
import FilterToolbar from "@/components/shared/FilterToolbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchContacts,
  setContactFilter,
  updateContactStatus,
} from "@/store/slices/contactsSlice";
import { STATUS_OPTIONS, formatDate } from "@/lib/utils";

function statusVariant(status: string) {
  if (status === "contacted") return "contacted";
  if (status === "closed") return "closed";
  return "pending";
}

function ContactStatusSelect({
  status,
  updating,
  onStatusChange,
}: {
  status: string;
  updating: boolean;
  onStatusChange: (status: string) => void;
}) {
  return (
    <Select
      value={status}
      onValueChange={onStatusChange}
      disabled={updating}
    >
      <SelectTrigger className="w-full sm:w-36">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {STATUS_OPTIONS.map((option) => (
          <SelectItem key={option} value={option}>
            <Badge variant={statusVariant(option)}>{option}</Badge>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default function ContactsPage() {
  const dispatch = useAppDispatch();
  const { items, loading, error, updatingId, filter } = useAppSelector(
    (state) => state.contacts,
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesFilter = filter === "all" || item.status === filter;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.message.toLowerCase().includes(query) ||
        (item.subject ?? "").toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [items, filter, search]);

  return (
    <AdminShell
      title="Contact Inquiries"
      subtitle="Review, filter and update every contact submission with full detail."
      onRefresh={() => dispatch(fetchContacts())}
      refreshing={loading}
    >
      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <FilterToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search name, email, subject or message..."
        filter={filter}
        onFilterChange={(value) => dispatch(setContactFilter(value))}
      />

      <Card className="card-3d overflow-hidden border-0">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="flex flex-wrap items-center gap-2 text-lg sm:text-xl">
            <Mail className="h-5 w-5 text-primary" />
            Inquiry Records
            <Badge variant="secondary">{filtered.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="space-y-3 p-4 sm:p-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-24 sm:h-16" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              No contact inquiries match your filters.
            </p>
          ) : (
            <>
              <div className="space-y-4 p-4 md:hidden">
                {filtered.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-2xl border bg-white/70 p-4 shadow-sm"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold break-words">{item.name}</p>
                        <a
                          href={`mailto:${item.email}`}
                          className="mt-1 block text-sm text-primary break-all"
                        >
                          {item.email}
                        </a>
                      </div>
                      <Badge variant={statusVariant(item.status)}>
                        {item.status}
                      </Badge>
                    </div>

                    <div className="mt-4 space-y-3 text-sm">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                          Subject
                        </p>
                        <p className="mt-1 break-words">
                          {item.subject || "General inquiry"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                          Message
                        </p>
                        <p className="mt-1 whitespace-pre-wrap break-words text-muted-foreground">
                          {item.message}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 border-t pt-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                            Submitted
                          </p>
                          <p className="mt-1 text-muted-foreground">
                            {formatDate(item.createdAt)}
                          </p>
                        </div>
                        <ContactStatusSelect
                          status={item.status}
                          updating={updatingId === item.id}
                          onStatusChange={(status) =>
                            dispatch(updateContactStatus({ id: item.id, status }))
                          }
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="line-clamp-2 max-w-xs">
                                {item.subject || "General inquiry"}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              {item.subject || "No subject provided"}
                            </TooltipContent>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="line-clamp-3 max-w-md whitespace-pre-wrap">
                                {item.message}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-sm whitespace-pre-wrap">
                              {item.message}
                            </TooltipContent>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <ContactStatusSelect
                            status={item.status}
                            updating={updatingId === item.id}
                            onStatusChange={(status) =>
                              dispatch(
                                updateContactStatus({ id: item.id, status }),
                              )
                            }
                          />
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {formatDate(item.createdAt)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </AdminShell>
  );
}

