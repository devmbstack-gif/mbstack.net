"use client";

import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FilterValue = "all" | "pending" | "contacted" | "closed";

export default function FilterToolbar({
  search,
  onSearchChange,
  searchPlaceholder,
  filter,
  onFilterChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder: string;
  filter: FilterValue;
  onFilterChange: (value: FilterValue) => void;
}) {
  return (
    <Card className="card-3d mb-6 border-0">
      <CardContent className="flex flex-col gap-4 p-4 sm:p-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="pl-10"
          />
        </div>

        <Tabs
          value={filter}
          onValueChange={(value) => onFilterChange(value as FilterValue)}
          className="w-full"
        >
          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <TabsList className="inline-flex h-auto min-h-11 w-max max-w-none flex-nowrap gap-1">
              <TabsTrigger value="all" className="px-3 sm:px-4">
                All
              </TabsTrigger>
              <TabsTrigger value="pending" className="px-3 sm:px-4">
                Pending
              </TabsTrigger>
              <TabsTrigger value="contacted" className="px-3 sm:px-4">
                Contacted
              </TabsTrigger>
              <TabsTrigger value="closed" className="px-3 sm:px-4">
                Closed
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
