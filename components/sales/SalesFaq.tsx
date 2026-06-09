"use client";

import React, { useState } from "react";
import { SALES } from "@/constants";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SalesFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {SALES.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="text-lg font-bold text-stone-900">{faq.question}</span>
                  {openIdx === idx ? <ChevronUp className="w-5 h-5 text-[#31B574]" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
                </button>
                {openIdx === idx && (
                  <div className="p-6 pt-0 text-stone-600 border-t border-stone-50 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
