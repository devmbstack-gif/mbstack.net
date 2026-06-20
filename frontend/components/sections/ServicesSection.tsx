import React from "react";
import { SERVICES } from "@/constants";
import ServiceDevCard from "./ServiceDevCard";

export default function ServicesSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 40px,
            #0f172a 40px,
            #0f172a 41px
          )`,
        }}
        aria-hidden
      />
      <div className="relative page-container max-w-6xl section-padding">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-800 uppercase tracking-wide">
            Our Services
          </h2>
          <div
            className="mt-3 w-12 h-0.5 bg-brand mx-auto rounded-full"
            aria-hidden
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceDevCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
