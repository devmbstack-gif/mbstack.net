import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from "react-hot-toast";
import { SITE, SITE_URL, SEO, FOOTER } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#31B574",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.defaultDescription,
  keywords: SEO.keywords,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: SEO.openGraph.type,
    locale: SEO.openGraph.locale,
    url: SITE_URL,
    siteName: SEO.openGraph.siteName,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 160,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: SEO.twitter.card,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
  category: "technology",
};

function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: FOOTER.companyDescription,
    email: FOOTER.email,
    telephone: FOOTER.helplines[0]?.split("|")[0]?.trim(),
    address: FOOTER.addresses.map((a) => ({
      "@type": "PostalAddress",
      streetAddress: a,
    })),
    sameAs: [
      "https://facebook.com",
      "https://twitter.com",
      "https://linkedin.com",
      "https://instagram.com",
      "https://youtube.com",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    description: SEO.defaultDescription,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-stone-900`}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <Toaster
          position="top-center"
          containerStyle={{ top: 72 }}
          toastOptions={{
            duration: 4000,
            style: { maxWidth: "calc(100vw - 2rem)" },
          }}
        />
        <div className="floating-widget-pad">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
