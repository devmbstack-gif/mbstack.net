import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FOOTER } from "@/constants";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email us",
    value: FOOTER.email,
    href: `mailto:${FOOTER.email}`,
    accent: "from-emerald-500/10 to-brand/5",
  },
  {
    icon: Phone,
    label: "Call our team",
    value: FOOTER.helplines[0],
    href: "tel:+923161465299",
    accent: "from-sky-500/10 to-blue-500/5",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: `https://wa.me/${FOOTER.whatsappNumber.replace(/\D/g, "")}`,
    accent: "from-green-500/10 to-emerald-500/5",
    external: true,
  },
] as const;

export default function ContactChannels() {
  return (
    <section className="pb-10 sm:pb-14 md:pb-16">
      <div className="page-container max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              {...("external" in channel && channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-brand/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${channel.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                aria-hidden
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/25 group-hover:scale-105 transition-transform duration-300">
                  <channel.icon className="w-5 h-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {channel.label}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-brand transition-colors">
                    {channel.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {FOOTER.addresses.map((address, index) => (
            <div
              key={address}
              className="flex items-start gap-4 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/80 p-5 sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <MapPin className="w-5 h-5" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {index === 0 ? "Pakistan HQ" : "USA Office"}
                </p>
                <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                  {address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
