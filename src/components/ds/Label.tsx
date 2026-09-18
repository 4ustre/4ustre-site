// Ported from the 4ustre design system (components/core/Label.jsx).
// An uppercase grotesk label, Medium 500 with 0.16em tracking. Labels are the only
// place uppercase is allowed — never a headline. Optionally prefixed with a rule.
import { CSSProperties, ElementType, ReactNode } from "react";

export type LabelProps = {
  children?: ReactNode;
  tone?: "muted" | "field" | "ink" | "accent";
  rule?: boolean;
  as?: ElementType;
  style?: CSSProperties;
};

export function Label({ children, tone = "muted", rule = false, as, style }: LabelProps) {
  const color =
    tone === "field"
      ? "var(--text-on-field)"
      : tone === "ink"
      ? "var(--ink)"
      : tone === "accent"
      ? "var(--accent-primary)"
      : "var(--text-muted)";
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      style={{
        font: "var(--type-label)",
        letterSpacing: "var(--track-label)",
        textTransform: "uppercase",
        color,
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        ...style,
      }}
    >
      {rule ? (
        <span style={{ width: 24, height: 1, background: "currentColor", opacity: 0.5, flex: "none" }} />
      ) : null}
      {children}
    </Tag>
  );
}
