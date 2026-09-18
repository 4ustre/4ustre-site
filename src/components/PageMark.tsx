import { CSSProperties } from "react";

export function PageMark({ tone, style }: { tone?: "paper" | "ink"; style?: CSSProperties }) {
  return (
    <p
      style={{
        font: "500 12px/1.2 'Hanken Grotesk', Arial, sans-serif",
        letterSpacing: ".16em",
        textTransform: "uppercase",
        textAlign: "center",
        color: tone === "paper" ? "var(--paper-70)" : "var(--ink-38)",
        margin: "64px 0 0",
        maxWidth: "none",
        ...style,
      }}
    >
      @4ustre2026
    </p>
  );
}
