import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austė Vagoraitė — Illustrator & Graphic Designer in Vilnius, Lithuania",
  description:
    "Illustration, book covers, brand identity and wedding stationery by Austė Vagoraitė, an illustrator and graphic designer based in Vilnius, Lithuania.",
  metadataBase: new URL("https://4uste.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Austė Vagoraitė",
    title: "Austė Vagoraitė — Illustrator & Graphic Designer in Vilnius, Lithuania",
    description: "Illustration, book covers, brand identity and wedding stationery by Austė Vagoraitė, an illustrator and graphic designer in Vilnius, Lithuania.",
    images: ["/images/work/kukutis_crop_home2_png.jpg"],
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austė Vagoraitė — Illustrator & Graphic Designer",
    description: "Illustration, book covers, brand identity and wedding stationery by Austė Vagoraitė, based in Vilnius, Lithuania.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Austė Vagoraitė",
  jobTitle: "Illustrator & Graphic Designer",
  url: "https://4uste.com/",
  address: { "@type": "PostalAddress", addressLocality: "Vilnius", addressCountry: "LT" },
  sameAs: [
    "https://www.instagram.com/4ustre/",
    "https://www.facebook.com/auste.vagoraite",
    "https://www.linkedin.com/in/aust%C4%97-vagorait%C4%97-15a4a0255/",
  ],
  knowsAbout: ["Illustration", "Book cover design", "Brand identity", "Wedding stationery", "Event merchandise design"],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Austė Vagoraitė — Illustration & Design",
  description: "Illustration, book cover design, brand identity, wedding stationery and illustrated products.",
  areaServed: "Vilnius, Lithuania",
  address: { "@type": "PostalAddress", addressLocality: "Vilnius", addressCountry: "LT" },
  serviceType: ["Illustration", "Brand identity", "Book cover design", "Wedding stationery", "Event merchandise"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
