import ContactChannels from "@/components/contact/ContactChannels";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactGlobalPresence from "@/components/contact/ContactGlobalPresence";
import ContactHero from "@/components/contact/ContactHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactChannels />
      <ContactFormSection />
      <ContactGlobalPresence />
    </main>
  );
}
