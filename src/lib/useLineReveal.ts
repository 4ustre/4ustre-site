import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function splitLines(el: HTMLElement | null) {
  if (!el) return [];
  if (!el.dataset.orig) el.dataset.orig = el.textContent || "";
  const words = el.dataset.orig.split(/\s+/).filter(Boolean);
  el.innerHTML = words.map((w) => `<span class="w">${w}</span>`).join(" ");
  const spans = [...el.querySelectorAll<HTMLElement>(".w")];
  const lines: string[][] = [];
  let top: number | null = null;
  spans.forEach((s) => {
    const t = Math.round(s.getBoundingClientRect().top);
    if (top === null || Math.abs(t - top) > 4) {
      lines.push([]);
      top = t;
    }
    lines[lines.length - 1].push(s.textContent || "");
  });
  el.innerHTML = lines.map((l) => `<span class="lnMask"><span class="lnIn">${l.join(" ")}</span></span>`).join("");
  return [...el.querySelectorAll<HTMLElement>(".lnIn")];
}

export function useLineReveal(scopeRef: RefObject<HTMLElement | null>, deps: unknown[]) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx: gsap.Context | undefined;
    const build = () => {
      if (!scopeRef.current) return;
      if (ctx) ctx.revert();
      ctx = gsap.context(() => {
        const lead = scopeRef.current!.querySelector<HTMLElement>("[data-reveal='lead']");
        const leadLines = splitLines(lead);
        gsap.from(leadLines, { yPercent: 115, duration: 0.85, ease: "power3.out", stagger: 0.07, delay: 0.15 });
        scopeRef.current!.querySelectorAll<HTMLElement>("[data-reveal='line']").forEach((p) => {
          const ls = splitLines(p);
          gsap.from(ls, {
            yPercent: 110,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: { trigger: p, start: "top 88%", once: true },
          });
        });
      }, scopeRef);
      ScrollTrigger.refresh();
    };
    const raf = requestAnimationFrame(() => requestAnimationFrame(build));
    let tm: ReturnType<typeof setTimeout>;
    let lastWidth = window.innerWidth;
    const onResize = () => {
      // Mobile browsers fire resize when the address bar shows/hides while
      // scrolling; that only changes height, so ignore it and rebuild only
      // on an actual width change (real resize or orientation change).
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      clearTimeout(tm);
      tm = setTimeout(build, 250);
    };
    window.addEventListener("resize", onResize);
    const imgs = scopeRef.current ? [...scopeRef.current.querySelectorAll("img")] : [];
    const onImgLoad = () => ScrollTrigger.refresh();
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onImgLoad);
    });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(tm);
      window.removeEventListener("resize", onResize);
      imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
      if (ctx) ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
