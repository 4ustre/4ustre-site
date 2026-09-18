"use client";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { Label } from "@/components/ds/Label";
import { ImageFrame } from "@/components/ds/ImageFrame";
import { PageMark } from "@/components/PageMark";
import { useLineReveal } from "@/lib/useLineReveal";

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  useLineReveal(aboutRef, []);

  return (
    <div ref={aboutRef} data-section="sage" className="page" style={{ paddingBottom: 32 }}>
      <Nav page="about" />
      <section className="aboutHero3">
        <div className="aboutHeroText">
          <Label rule>About</Label>
          <h1 style={{ font: "400 clamp(48px,5.4vw,84px)/1 'Instrument Serif', Georgia, serif", letterSpacing: "-0.02em", margin: "40px 0 28px" }}>
            I have a <i>dream</i>
          </h1>
          <p data-reveal="lead" style={{ font: "300 19px/1.55 'Hanken Grotesk', Arial, sans-serif", margin: 0 }}>
            to create worlds for other people&apos;s eyes. Worlds that are warm and beautiful, naive in the best way
            possible, inviting you to stay — or at least to carry a little of their calmness, innocence, and
            childishness with you on life&apos;s journey. I live that dream in Vilnius, Lithuania, as an illustrator.
          </p>
        </div>
        <div className="photoFrame aboutPhotoAbs">
          <ImageFrame shape="rect" ratio="4 / 5" src="/images/work/auste.jpg" alt="Portrait of Austė Vagoraitė, illustrator and graphic designer in Vilnius, Lithuania" />
        </div>
      </section>
      <div className="aboutRule" />
      <section className="aboutBody">
        <p data-reveal="line" style={{ font: "300 17px/1.68 'Hanken Grotesk', Arial, sans-serif", color: "var(--ink-60)", margin: 0 }}>
          I live to observe, listen carefully, empathise with what&apos;s given to me, and find the way to show its
          essence — I am a strong believer that the essence of everything worth our attention is beauty. I dedicate
          myself to making sure that the beauty of the subject becomes visible — almost inevitable.
        </p>
        <p data-reveal="line" style={{ font: "300 17px/1.68 'Hanken Grotesk', Arial, sans-serif", color: "var(--ink-60)", margin: 0 }}>
          Coming from a humanities background, I have always been sensitive to words, symbols, and the meanings we
          attach to things. I believe images carry their own language, and I enjoy weaving subtle layers of meaning
          into my work — sometimes consciously, sometimes intuitively.
        </p>
        <p data-reveal="line" style={{ font: "300 17px/1.68 'Hanken Grotesk', Arial, sans-serif", color: "var(--ink-60)", margin: 0 }}>
          I am particularly drawn to portraying characters in motion. There is something deeply revealing about the
          way we move: a gesture, a posture, the direction of a glance can often tell a story before words do. I
          like capturing those fleeting moments where an image begins to feel like someone — a character whose story
          continues somewhere beyond the frame.
        </p>
        <p data-reveal="line" style={{ font: "300 17px/1.68 'Hanken Grotesk', Arial, sans-serif", color: "var(--ink-60)", margin: 0 }}>
          Curiosity is probably what keeps me moving. I am drawn to unfamiliar fields, ideas, and mediums, and I
          rarely feel comfortable staying in one place creatively for too long. Exploring is not a distraction from
          finding my voice — it is how I continue shaping it.
        </p>
      </section>
      <PageMark style={{ marginTop: 32 }} />
    </div>
  );
}
