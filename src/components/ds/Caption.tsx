// Ported from the 4ustre design system (components/media/Caption.jsx).
// A caption sits under an image and names the actual thing: the book, the couple,
// the crisp. Light 300, 13px, ink at 60%, measure capped at 44ch. Left-aligned.
import { CSSProperties, ReactNode } from "react";

export type CaptionProps = {
  children?: ReactNode;
  credit?: string;
  tone?: "paper" | "field";
  style?: CSSProperties;
};

export function Caption({ children, credit, tone = "paper", style }: CaptionProps) {
  const color = tone === "field" ? "var(--text-on-field)" : "var(--text-muted)";
  return (
    <figcaption
      style={{
        font: "var(--type-caption)",
        color,
        maxWidth: "44ch",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-1)",
        ...style,
      }}
    >
      <span>{children}</span>
      {credit ? <span style={{ opacity: 0.7 }}>{credit}</span> : null}
    </figcaption>
  );
}
