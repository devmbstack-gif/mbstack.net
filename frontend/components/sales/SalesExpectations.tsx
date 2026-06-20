"use client";

import React from "react";
import { Map, Settings, ShieldCheck, Users } from "lucide-react";
import { SALES } from "@/constants";

const iconMap = {
  map: Map,
  users: Users,
  settings: Settings,
  shield: ShieldCheck,
} as const;

export default function SalesExpectations() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-brand font-bold tracking-widest uppercase text-sm mb-3">
            Use your full potential
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
            What you can expect
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {SALES.expectations.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.title}
                className="group p-8 bg-white border border-stone-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-stone-50 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
