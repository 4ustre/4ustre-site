// Ported from the 4ustre design system (components/layout/ColorField.jsx).
// A flat section-colour surface with the mandatory grain. One section colour per
// piece — set `section` once, high up, and let children inherit --surface-field.
// `circle` renders the recurring arrangement: a circle holding an image or a title,
// centred on the field.
import { CSSProperties, ReactNode } from "react";

export type ColorFieldProps = {
  section?: string;
  circle?: boolean;
  pad?: string;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
};

export function ColorField({ section = "rose", circle = false, pad = "var(--pad-field)", children, style, className }: ColorFieldProps) {
  return (
    <div
      data-section={section}
      className={className}
      style={{
        position: "relative",
        background: "var(--surface-field)",
        color: "var(--text-on-field)",
        padding: pad,
        display: circle ? "grid" : "block",
        placeItems: circle ? "center" : undefined,
        ...style,
      }}
    >
      {circle ? (
        <div
          style={{
            aspectRatio: "1",
            width: "min(62%, 520px)",
            borderRadius: "var(--radius-circle)",
            background: "var(--paper)",
            color: "var(--ink)",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: "var(--space-8)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {children}
        </div>
      ) : (
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      )}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: "var(--grain-url)",
          backgroundSize: "var(--grain-size) var(--grain-size)",
          mixBlendMode: "multiply",
          opacity: "var(--grain-opacity-field)",
        }}
      />
    </div>
  );
}
