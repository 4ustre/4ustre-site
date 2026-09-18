import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Label } from "@/components/ds/Label";
import { PageMark } from "@/components/PageMark";
import { WORK } from "@/lib/work";
import { altFor } from "@/lib/content";

export const metadata = {
  title: "Selected Work — Book Covers, Wedding Illustration & Brand Identity | Austė Vagoraitė",
  description: "Book cover design, wedding illustration, brand identity and illustrated products by Austė Vagoraitė, illustrator and graphic designer in Vilnius, Lithuania.",
};

export default function WorkPage() {
  return (
    <div data-section="terracotta" className="page">
      <Nav page="work" />
      <div className="grid12" style={{ marginBottom: 96 }}>
        <div style={{ gridColumn: "1/8" }}>
          <Label rule>Selected works</Label>
          <h1 style={{ fontSize: 43, lineHeight: 1, letterSpacing: "-0.02em", margin: "24px 0 0" }}>
            <i>Book</i> covers, <i>wedding</i> illustration, some ideas that became <i>products</i>
            <br /> and <em>personal work.</em>
          </h1>
        </div>
      </div>
      <div className="workgrid">
        {WORK.map((w) => (
          <Link key={w.slug} className="zoomcard" href={`/work/${w.slug}`}>
            <div className="sq">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="galimg"
                src={w.home[0].src}
                alt={altFor(w)}
                style={w.gridZoom ? { transform: `scale(${w.gridZoom})` } : undefined}
              />
            </div>
            <div style={{ marginTop: 16 }}>
              <Label>{w.meta}</Label>
              <h3 style={{ fontSize: 28, lineHeight: 1.1, margin: "8px 0 0" }}>{w.title}</h3>
              {w.sub && (
                <p style={{ margin: "4px 0 0", color: "var(--ink-60)", font: "300 15px/1.5 'Hanken Grotesk', Arial, sans-serif" }}>
                  {w.sub}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
      <PageMark />
    </div>
  );
}
