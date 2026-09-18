import { Nav } from "@/components/Nav";
import { ColorField } from "@/components/ds/ColorField";
import { Button } from "@/components/ds/Button";
import { Social } from "@/components/Social";
import { PageMark } from "@/components/PageMark";

export const metadata = {
  title: "Contact — Austė Vagoraitė, Illustrator & Graphic Designer in Vilnius",
  description: "Get in touch with Austė Vagoraitė, illustrator and graphic designer in Vilnius, Lithuania, for illustration, brand identity and wedding stationery projects.",
};

export default function ContactPage() {
  return (
    <div
      data-section="sage"
      className="contactPage grain grain--field"
      style={{ background: "var(--sage)", minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}
    >
      <div className="page" style={{ paddingBottom: 0, width: "100%", boxSizing: "border-box" }}>
        <Nav page="contact" logoTone="cream" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/work/contact-figure.webp"
        alt=""
        className="contactFigure"
        style={{ position: "absolute", bottom: 0, right: "-3vmin", height: "64vmin", width: "auto", maxWidth: "none", objectFit: "contain", objectPosition: "right bottom", pointerEvents: "none", zIndex: 2, opacity: 0.9 }}
      />
      <ColorField
        section="sage"
        pad="96px"
        className="contactField"
        style={{ marginBottom: 0, flex: "1 0 auto", position: "relative", zIndex: 1, display: "grid", placeItems: "center" }}
      >
        <div
          className="contactCircle"
          style={{ aspectRatio: "1", width: "58vmin", minWidth: 0, borderRadius: "var(--radius-circle)", background: "var(--paper)", color: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative", zIndex: 1, boxSizing: "border-box", overflow: "hidden" }}
        >
          <div
            className="contactWrap"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "clamp(10px,2.2vmin,18px)", width: "100%", height: "100%", padding: "clamp(20px,6vmin,44px)", boxSizing: "border-box" }}
          >
            <div className="contactLabel" style={{ font: "500 12px/1.2 'Hanken Grotesk', Arial, sans-serif", letterSpacing: ".16em", textTransform: "uppercase" }}>
              Contact
            </div>
            <h1 className="contactHeading" style={{ fontSize: "clamp(16px,3.2vmin,32px)", lineHeight: 1.14, margin: 0, maxWidth: "26ch" }}>
              If you feel like we could dream something beautiful into existence together, I&apos;d love to hear from you.
            </h1>
            <Button
              className="greenbtn btn"
              variant="primary"
              as="a"
              href="mailto:auste.vagoraite@gmail.com"
              style={{ fontSize: "clamp(11px,1.5vmin,15px)", padding: "clamp(6px,1.2vmin,10px) clamp(14px,2.3vmin,20px)" }}
            >
              Write me a letter
            </Button>
            <a
              href="mailto:auste.vagoraite@gmail.com"
              style={{ font: "300 clamp(11px,1.5vmin,15px)/1.2 'Hanken Grotesk', Arial, sans-serif", color: "var(--ink)", borderBottom: "1px solid var(--ink-38)", textDecoration: "none" }}
            >
              auste.vagoraite@gmail.com
            </a>
            <div className="contactFind" style={{ position: "relative", top: 33 }}>
              <div style={{ font: "500 clamp(8px,1vmin,11px)/1.2 'Hanken Grotesk', Arial, sans-serif", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-60)", marginBottom: 5 }}>
                You can find me
              </div>
              <div style={{ display: "flex", gap: 9, justifyContent: "center" }}>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </ColorField>
      <PageMark tone="paper" style={{ padding: "48px 0" }} />
    </div>
  );
}
