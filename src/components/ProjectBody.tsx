"use client";
import { CSSProperties, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageFrame } from "./ds/ImageFrame";
import { Caption } from "./ds/Caption";
import { Label } from "./ds/Label";
import { Button } from "./ds/Button";
import { altFor, renderPara } from "@/lib/content";
import { isImageRef, type WorkItem } from "@/lib/work";

export function ProjectBody({ w, smallText }: { w: WorkItem; smallText: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".pReveal", ref.current || undefined).forEach((el) => {
        gsap.from(el, { y: 28, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 60%", once: true } });
      });
    }, ref);
    const t = setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, [w]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const txt = el.querySelector<HTMLElement>(".pTextCol");
    const img = el.querySelector<HTMLElement>(".pHeroImg figure");
    if (!txt || !img) return;
    txt.style.fontSize = "15px";
    const contentH = () => [...txt.children].reduce((s, c) => s + c.getBoundingClientRect().height, 0) + (txt.children.length > 1 ? 12 : 0);
    const raf = requestAnimationFrame(() => {
      let size = 15;
      for (let i = 0; i < 6; i++) {
        const ih = img.getBoundingClientRect().height;
        const th = contentH();
        if (th <= ih + 2) break;
        size = Math.max(10, size * (ih / th));
        txt.style.fontSize = size + "px";
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [w]);

  const heroImg = w.main || w.gallery[0];
  const restGallery = w.main ? w.gallery : w.gallery.slice(1);
  const [firstPara, ...restParas] = w.text.split("\n\n");

  return (
    <div className="page" ref={ref} style={{ paddingTop: 0, paddingBottom: 72 }}>
      <div className="grid12" style={{ rowGap: 48 }}>
        {w.heroFull ? (
          <>
            <div className="pReveal" style={{ gridColumn: "1/9" }}>
              <p style={{ ...smallText, whiteSpace: "pre-line", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{firstPara}</p>
              {restParas.length > 0 && (
                <p style={{ ...smallText, whiteSpace: "pre-line", fontSize: 15, lineHeight: 1.7, margin: "16px 0 0" }}>{restParas.join("\n\n")}</p>
              )}
            </div>
            {heroImg && isImageRef(heroImg) && (
              <div className="pReveal" style={{ gridColumn: "1/-1" }}>
                <ImageFrame src={heroImg.src} ratio={heroImg.ratio} alt={altFor(w, heroImg.cap)} />
                {heroImg.cap && (
                  <div style={{ marginTop: 16 }}>
                    <Caption credit={w.main && w.client !== "Self-initiated" ? w.client : undefined}>{heroImg.cap}</Caption>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="pReveal pTwoCol" style={{ gridColumn: "1/-1", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,2fr)", gap: 48, alignItems: "stretch" }}>
            <div className="pTextCol" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", fontSize: 15, position: "relative" }}>
              <p style={{ ...smallText, whiteSpace: "pre-line", fontSize: "inherit", lineHeight: 1.55, margin: 0 }}>{renderPara(firstPara)}</p>
              {restParas.length > 0 && (
                <p style={{ ...smallText, whiteSpace: "pre-line", fontSize: "inherit", lineHeight: 1.55, margin: "12px 0 0" }}>{renderPara(restParas.join("\n\n"))}</p>
              )}
              {w.heroNote && (
                <div className="heroNoteBox" style={{ fontSize: 36, lineHeight: 1, fontFamily: "'Hanken Grotesk', Arial, sans-serif", fontStyle: "italic", position: "absolute", left: 0, top: 349 }}>
                  {w.heroNote}
                </div>
              )}
            </div>
            {heroImg && isImageRef(heroImg) && (
              <div className="pHeroImg">
                <ImageFrame src={heroImg.src} ratio={heroImg.ratio} alt={altFor(w, heroImg.cap)} />
                {heroImg.cap && (
                  <div style={{ marginTop: 16 }}>
                    <Caption credit={w.main && w.client !== "Self-initiated" ? w.client : undefined}>{heroImg.cap}</Caption>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {restGallery.map((g, i) =>
          !isImageRef(g) ? (
            <div className="pReveal" key={"txt" + i} style={{ gridColumn: "span " + (g.span || 12), textAlign: "left" }}>
              <p style={{ ...smallText, fontSize: 15, lineHeight: 1.7, maxWidth: "62ch", margin: 0 }}>{g.text}</p>
            </div>
          ) : (
            <div className="pReveal" key={g.src + i} style={{ gridColumn: "span " + (g.span || 6) }}>
              <ImageFrame src={g.src} ratio={g.ratio} alt={altFor(w, g.cap)} />
              {g.cap && (
                <div style={{ marginTop: 16 }}>
                  <Caption>{g.cap}</Caption>
                </div>
              )}
            </div>
          )
        )}

        {w.considerNote && (
          <div className="pReveal" style={{ gridColumn: "1/-1" }}>
            <Label rule>Considered directions</Label>
            <p style={{ ...smallText, margin: "16px 0 32px", maxWidth: "56ch" }}>{w.considerNote}</p>
          </div>
        )}
        {!w.considerNote && w.considered.length > 0 && (
          <div className="pReveal" style={{ gridColumn: "1/-1" }}>
            <Label rule>Considered directions</Label>
          </div>
        )}
        {w.considered.map((c, i) => (
          <div className="pReveal" key={c.src + i} style={{ gridColumn: "span " + Math.floor(12 / Math.min(4, w.considered.length)) }}>
            <ImageFrame src={c.src} ratio={c.ratio} alt={"Considered direction for " + w.title} />
          </div>
        ))}

        {w.captions && (
          <div className="pReveal" style={{ gridColumn: "1/-1" }}>
            <Label rule>Notes</Label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 32, marginTop: 24, maxWidth: "80%" }}>
              {w.captions.map((c, i) => (
                <p key={i} style={smallText}>{c}</p>
              ))}
            </div>
          </div>
        )}

        {w.link && (
          <div style={{ gridColumn: "1/-1" }}>
            <p style={{ font: "300 17px/1.62 'Hanken Grotesk', Arial, sans-serif", color: "var(--ink-60)", margin: "0 0 16px", fontSize: 21 }}>
              See it in action:
            </p>
            <Button className="btn" variant="primary" as="a" href={w.link.url} target="_blank" rel="noopener" style={{ background: "#E16126", borderColor: "var(--terracotta)" }}>
              The Chip Critics Club website
            </Button>
          </div>
        )}

        <div className="pBackRow" style={{ gridColumn: "1/-1", display: "flex", alignItems: "baseline", gap: 32 }}>
          <Button className="btn" variant="secondary" as={Link} href="/work">← Back to works gallery</Button>
          <p style={smallText}>Or keep scrolling to the next project.</p>
        </div>
      </div>
    </div>
  );
}
