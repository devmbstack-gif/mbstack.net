"use client";

import { useEffect, useMemo, useState } from "react";
import { BriefcaseBusiness, Search } from "lucide-react";
import AdminShell from "@/components/layout/AdminShell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchConsultancy,
  setConsultancyFilter,
  updateConsultancyStatus,
} from "@/store/slices/consultancySlice";
import { STATUS_OPTIONS, formatDate } from "@/lib/utils";

function statusVariant(status: string) {
  if (status === "contacted") return "contacted";
  if (status === "closed") return "closed";
  return "pending";
}

export default function ConsultancyPage() {
  const dispatch = useAppDispatch();
  const { items, loading, error, updatingId, filter } = useAppSelector(
    (state) => state.consultancy,
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchConsultancy());
  }, [dispatch]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesFilter = filter === "all" || item.status === filter;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.budget.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.packageName ?? "").toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [items, filter, search]);

  return (
    <AdminShell
      title="Consultancy Requests"
      subtitle="Track project type, budget, package and full client requirements."
      onRefresh={() => dispatch(fetchConsultancy())}
      refreshing={loading}
    >
      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <Card className="card-3d mb-6 border-0">
        <CardContent className="flex flex-col gap-4 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search client, type, budget, package..."
              className="pl-10"
            />
          </div>
          <Tabs
            value={filter}
            onValueChange={(value) =>
              dispatch(
                setConsultancyFilter(
                  value as "all" | "pending" | "contacted" | "closed",
                ),
              )
            }
          >
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="contacted">Contacted</TabsTrigger>
              <TabsTrigger value="closed">Closed</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="card-3d border-0 overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BriefcaseBusiness className="h-5 w-5 text-primary" />
            Consultancy Pipeline
            <Badge variant="secondary">{filtered.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="space-y-3 p-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-16" />
              ))}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Package</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="py-16 text-center text-muted-foreground"
                    >
                      No consultancy requests match your filters.
                    </TableCell>
                  </TableRow>
                ) : null}
                {filtered.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="font-semibold text-primary">
                            {item.budget}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>Client stated budget range</TooltipContent>
                      </Tooltip>
                    </TableCell>
                    <TableCell>{item.packageName || "Custom"}</TableCell>
                    <TableCell>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="line-clamp-3 max-w-md whitespace-pre-wrap">
                            {item.description}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-sm whitespace-pre-wrap">
                          {item.description}
                        </TooltipContent>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={item.status}
                        onValueChange={(status) =>
                          dispatch(
                            updateConsultancyStatus({ id: item.id, status }),
                          )
                        }
                        disabled={updatingId === item.id}
                      >
                        <SelectTrigger className="w-36">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {STATUS_OPTIONS.map((status) => (
                            <SelectItem key={status} value={status}>
                              <Badge variant={statusVariant(status)}>
                                {status}
                              </Badge>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(item.createdAt)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </AdminShell>
  );
}
