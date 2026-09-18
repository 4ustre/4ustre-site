"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Logo } from "@/components/ds/Logo";
import { Social } from "@/components/Social";
import { PageMark } from "@/components/PageMark";
import { WorkSheet, type SheetItem } from "@/components/WorkSheet";
import { HOMEITEMS } from "@/lib/work";
import { altFor } from "@/lib/content";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState<SheetItem | null>(null);
  const galRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const track = trackRef.current;
    const gal = galRef.current;
    let galCtx: gsap.Context | undefined;
    if (track && gal) {
      galCtx = gsap.context(() => {
        if (window.innerWidth > 640) {
          const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
          gsap.to(track, {
            x: () => -dist(),
            ease: "none",
            scrollTrigger: { trigger: gal, start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 },
          });
        }
      }, gal);
    }

    const t = setTimeout(() => ScrollTrigger.refresh(), 300);

    const wctx = gal
      ? gsap.context(() => {
          gsap.from(".worldReveal", { y: 24, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: gal, start: "top 85%", once: true } });
        }, gal)
      : undefined;

    const fctx = gsap.context(() => {
      gsap.from(".ftbounce", { y: 120, opacity: 0, duration: 1.1, ease: "elastic.out(0.9,0.5)", scrollTrigger: { trigger: ".ftbounce", start: "top 92%", once: true } });
      const st = document.querySelector<HTMLElement>(".scrambleTitle");
      if (st) {
        document.fonts.ready.then(() => {
          try {
            const split = SplitText.create(st, { type: "chars" });
            gsap.from(split.chars, { x: 150, opacity: 0, duration: 0.7, ease: "power4", stagger: 0.04, scrollTrigger: { trigger: st, start: "top 92%", once: true } });
          } catch {
            // SplitText can throw if the element has no measurable text yet
          }
        });
      }
    });

    return () => {
      clearTimeout(t);
      galCtx?.revert();
      wctx?.revert();
      fctx.revert();
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    let ctx: gsap.Context | undefined;
    const raf = requestAnimationFrame(() => {
      document.fonts.ready.then(() => {
        ctx = gsap.context(() => {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.05 });
          const nameEl = hero.querySelector<HTMLElement>(".heroName");
          let chars: Element[] = [];
          if (nameEl) {
            try {
              chars = SplitText.create(nameEl, { type: "chars" }).chars;
            } catch {
              // ignore
            }
          }
          tl.from(".hero-logo", { scale: 3.4, opacity: 0, duration: 0.9, ease: "elastic.out(0.85,0.62)" })
            .from(".hero-logo", { rotation: -6, duration: 0.5, ease: "back.out(3)" }, "-=0.45");
          if (chars.length) {
            tl.from(chars, { yPercent: 120, rotation: (i: number) => (i % 2 ? 9 : -9), opacity: 0, duration: 0.55, stagger: { each: 0.035, from: "start" }, ease: "back.out(2.6)" }, "-=0.25");
          }
          tl.from(".hero-word", { y: 14, opacity: 0, duration: 0.4, stagger: 0.06 }, "-=0.15");
        }, hero);
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, []);

  return (
    <div>
      <div
        ref={heroRef}
        className="heroRoot"
        data-section="rose"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column", padding: "48px 96px 64px", boxSizing: "border-box", position: "relative" }}
      >
        <div className="heroNavWrap" style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
          <nav className="navlinks">
            <button className="navlink" onClick={() => router.push("/work")}>Works</button>
            <button className="navlink" onClick={() => router.push("/about")}>About</button>
            <button className="navlink" onClick={() => router.push("/contact")}>Contact</button>
          </nav>
        </div>
        <div className="heroStack" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 40, position: "relative", zIndex: 10 }}>
          <div className="hero-logo">
            <Logo variant="mark" size={188} />
          </div>
          <div>
            <h1 className="heroName" style={{ fontSize: 88, lineHeight: 0.98, letterSpacing: "-0.02em", margin: "-.24em 0 0", overflow: "hidden", padding: ".24em 0 .2em" }}>
              Austė Vagoraitė
            </h1>
            <p className="heroTag" style={{ font: "300 22px/1.5 'Hanken Grotesk', Arial, sans-serif", margin: "20px 0 0", color: "var(--ink-60)" }}>
              {"thinking world into images".split(" ").map((w, i) => (
                <span className="hero-word" key={i} style={{ marginRight: ".32em" }}>{w}</span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <section id="work" ref={galRef} data-section="sage" className="workband hgal">
        <div className="worldPad" style={{ padding: "64px 96px 0", display: "flex", flexDirection: "column", gap: 12 }}>
          <h2 className="worldReveal" style={{ font: "400 clamp(32px,4vw,52px)/1.1 'Instrument Serif', Georgia, serif", letterSpacing: "-0.02em", margin: 0, maxWidth: "14ch", color: "var(--paper)", fontSize: 51 }}>
            This is my world…
          </h2>
          <p className="worldReveal" style={{ font: "300 22px/1.4 'Hanken Grotesk', Arial, sans-serif", margin: 0, color: "var(--paper-70)", maxWidth: "20ch", position: "relative", top: -13 }}>
            and bits of what I do
          </p>
        </div>
        <div className="hstage">
          <div className="htrack" ref={trackRef}>
            {HOMEITEMS.map((h, i) => (
              <div className="hitem" key={h.src + i}>
                <button className="zoomcard" onClick={() => setOpen(h)} aria-label={h.project.title}>
                  <div className="hframe">
                    <div className="zoomclip">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="galimg" src={h.src} alt={altFor(h.project, h.cap)} />
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page ftbounce" style={{ paddingTop: 128, paddingBottom: 48 }}>
        <div className="grid12">
          <div style={{ gridColumn: "1/7" }}>
            <h2 className="scrambleTitle" style={{ fontSize: 56, lineHeight: 1.02, letterSpacing: "-0.02em", margin: "24px 0 0", width: 700, height: 58 }}>
              Meaning lives only where we put it!
            </h2>
            <div style={{ marginTop: 32 }}>
              <Social />
            </div>
          </div>
        </div>
      </section>
      <PageMark />
      <WorkSheet item={open} close={() => setOpen(null)} />
    </div>
  );
}
