"use client";
import { CSSProperties, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "./Nav";
import { Label } from "./ds/Label";
import { ImageFrame } from "./ds/ImageFrame";
import { ProjectBody } from "./ProjectBody";
import { WORK } from "@/lib/work";
import { altFor } from "@/lib/content";

const smallText: CSSProperties = { font: "300 14px/1.6 'Hanken Grotesk', Arial, sans-serif", color: "var(--ink-60)", margin: 0 };

export function ProjectView({ initialSlug }: { initialSlug: string }) {
  const start = Math.max(0, WORK.findIndex((w) => w.slug === initialSlug));
  const activeW = WORK[start];
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const wrap = wrapRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ppanel").forEach((panel) => {
        const cover = panel.querySelector<HTMLElement>(".pcover");
        if (!cover) return;
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: () => "+=" + Math.max(1, panel.offsetHeight - window.innerHeight),
          pin: cover,
          pinSpacing: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        });
        gsap.to(cover, {
          opacity: 0,
          scale: 0.96,
          ease: "none",
          scrollTrigger: { trigger: panel, start: "top top", end: () => "+=" + window.innerHeight * 0.5, scrub: 0.4, invalidateOnRefresh: true },
        });
      });
    }, wrap);

    const jump = () => {
      ScrollTrigger.refresh();
      const el = wrap.querySelectorAll<HTMLElement>(".ppanel")[start];
      if (el) window.scrollTo(0, el.offsetTop);
    };
    const t = setTimeout(jump, 250);

    const onWheel = (e: WheelEvent) => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const panels = wrap.querySelectorAll<HTMLElement>(".ppanel");
      if (e.deltaY < 0 && window.scrollY <= 1) {
        const cover = panels[panels.length - 1].querySelector<HTMLElement>(".pcover");
        gsap.to(cover, { opacity: 0, scale: 0.96, duration: 0.45, ease: "power2.inOut", onComplete: () => { window.scrollTo(0, max - 2); ScrollTrigger.refresh(); } });
      } else if (e.deltaY > 0 && window.scrollY >= max - 2) {
        const cover = panels[0].querySelector<HTMLElement>(".pcover");
        gsap.to(cover, { opacity: 0, scale: 0.96, duration: 0.45, ease: "power2.inOut", onComplete: () => { window.scrollTo(0, 1); ScrollTrigger.refresh(); } });
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener("wheel", onWheel);
      ctx.revert();
    };
  }, [start]);

  return (
    <div ref={wrapRef} data-section="terracotta">
      <div className="page" style={{ paddingBottom: 0 }}>
        <Nav page="work" />
      </div>
      {WORK.map((w, i) => (
        <article className="ppanel" key={w.slug}>
          <div className="pcover">
            <div className="pcover-in">
              <div style={{ gridColumn: "1/6" }} className="pcoverText">
                <div style={{ font: "400 clamp(96px,13vw,180px)/0.86 'Instrument Serif', Georgia, serif", letterSpacing: "-0.03em", color: "var(--ink-38)", marginBottom: 24 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                {!w.hideMetaLabel && <Label rule>{w.meta}</Label>}
                <div style={{ marginTop: 10 }}>{!w.hideClientLine && <Label rule>{"Client: " + w.client}</Label>}</div>
                {w.slug === activeW.slug ? (
                  <h1 style={{ fontSize: 64, lineHeight: 1.02, letterSpacing: "-0.02em", margin: "24px 0 8px" }}>{w.title}</h1>
                ) : (
                  <h2 style={{ fontSize: 64, lineHeight: 1.02, letterSpacing: "-0.02em", margin: "24px 0 8px", fontWeight: 400, fontFamily: "'Instrument Serif', Georgia, serif" }}>{w.title}</h2>
                )}
                {w.sub && <p style={{ font: "400 30px/1.2 'Instrument Serif', Georgia, serif", color: "var(--ink-60)", margin: "0 0 16px" }}>{w.sub}</p>}
                {w.written && <p style={smallText}>Written by {w.written}</p>}
              </div>
              <div style={{ gridColumn: "7/-1" }}>
                <ImageFrame ratio="4 / 3" fill="var(--paper-deep)" src={w.home[0]?.src} alt={altFor(w)} />
              </div>
            </div>
          </div>
          <ProjectBody w={w} smallText={smallText} />
        </article>
      ))}
      <section className="page" style={{ paddingTop: 0, paddingBottom: 0 }} />
    </div>
  );
}
