"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatusChart({
  contacts,
  consultancy,
  pendingContacts,
  pendingConsultancy,
}: {
  contacts: number;
  consultancy: number;
  pendingContacts: number;
  pendingConsultancy: number;
}) {
  const data = [
    { name: "Contacts", total: contacts, pending: pendingContacts },
    { name: "Consultancy", total: consultancy, pending: pendingConsultancy },
  ];

  return (
    <Card className="card-3d border-0">
      <CardHeader>
        <CardTitle>Inquiry Pipeline Overview</CardTitle>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={42}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} axisLine={false} tickLine={false} />
            <RechartsTooltip
              cursor={{ fill: "rgba(49,181,116,0.08)" }}
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #dbe3ee",
              }}
            />
            <Bar dataKey="total" fill="#31b574" radius={[10, 10, 0, 0]} />
            <Bar dataKey="pending" fill="#f59e0b" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
