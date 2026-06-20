import Image from "next/image";
import { LIVE_COUNTRIES } from "@/constants";

export default function ContactGlobalPresence() {
  return (
    <section className="pb-16 sm:pb-20 bg-slate-50/80 border-t border-slate-100">
      <div className="page-container max-w-6xl section-padding !pt-12 sm:!pt-14">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand mb-3">
            Global reach
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted by clients worldwide
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            We deliver software solutions across Pakistan, the Middle East, and North
            America — with teams aligned to your timezone.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {LIVE_COUNTRIES.map((country) => (
            <div
              key={country.flagCode}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand/20 transition-all duration-300"
            >
              <Image
                src={`https://flagcdn.com/w40/${country.flagCode}.png`}
                alt={`${country.name} flag`}
                width={28}
                height={20}
                className="rounded-sm object-cover"
                unoptimized
              />
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900">{country.shortName}</p>
                <p className="text-[10px] text-slate-500 font-medium">{country.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
