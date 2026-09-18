// Ported from the 4ustre design system (components/core/Tag.jsx).
// A small pill naming a medium, a client or a year. Sentence case, never a call to action.
import { CSSProperties, ReactNode } from "react";

const TONES: Record<string, CSSProperties> = {
  outline: { background: "transparent", color: "var(--ink)", borderColor: "var(--line-rule)" },
  quiet: { background: "var(--paper-deep)", color: "var(--ink-60)", borderColor: "transparent" },
  field: { background: "var(--surface-field)", color: "var(--text-on-field)", borderColor: "transparent" },
  accent: { background: "transparent", color: "var(--accent-primary)", borderColor: "var(--accent-primary)" },
};

export type TagProps = {
  children?: ReactNode;
  tone?: "outline" | "quiet" | "field" | "accent";
  style?: CSSProperties;
};

export function Tag({ children, tone = "outline", style }: TagProps) {
  return (
    <span
      style={{
        font: "var(--type-caption)",
        fontWeight: "var(--weight-medium)",
        padding: "4px 12px",
        borderRadius: "var(--radius-pill)",
        border: "1px solid transparent",
        display: "inline-block",
        whiteSpace: "nowrap",
        ...TONES[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
