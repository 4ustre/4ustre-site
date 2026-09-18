// Ported from the 4ustre design system (components/core/Button.jsx).
// A quiet pill. Sentence case, first person where it speaks. No shadows, no lift.
"use client";
import { CSSProperties, ElementType, ReactNode, useState } from "react";

const BASE: CSSProperties = {
  font: "var(--type-body-strong)",
  fontSize: "var(--size-small)",
  border: "1px solid transparent",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--space-2)",
  textDecoration: "none",
  transition:
    "background-color var(--motion-base) var(--motion-ease), color var(--motion-base) var(--motion-ease), border-color var(--motion-base) var(--motion-ease), opacity var(--motion-fast) var(--motion-ease)",
};

const SIZES: Record<string, CSSProperties> = {
  small: { padding: "8px 16px", fontSize: "var(--size-caption)" },
  medium: { padding: "12px 24px" },
  large: { padding: "16px 32px", fontSize: "var(--size-body)" },
};

function skin(variant: string, hovered: boolean): CSSProperties {
  switch (variant) {
    case "primary":
      return {
        background: hovered ? "var(--ink)" : "var(--accent-primary)",
        color: "var(--paper)",
        borderColor: hovered ? "var(--ink)" : "var(--accent-primary)",
      };
    case "secondary":
      return {
        background: hovered ? "var(--ink-08)" : "transparent",
        color: "var(--ink)",
        borderColor: "var(--line-rule)",
      };
    case "ghost":
      return {
        background: "transparent",
        color: hovered ? "var(--accent-primary)" : "var(--ink)",
        borderColor: "transparent",
        padding: 0,
      };
    case "onField":
      return {
        background: hovered ? "var(--paper)" : "transparent",
        color: hovered ? "var(--surface-field)" : "var(--text-on-field)",
        borderColor: "var(--text-on-field)",
      };
    default:
      return {};
  }
}

export type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "onField";
  size?: "small" | "medium" | "large";
  as?: ElementType;
  disabled?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
  href?: string;
  [key: string]: unknown;
};

export function Button({
  variant = "primary",
  size = "medium",
  as,
  disabled = false,
  children,
  style,
  ...rest
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const Tag = (as ?? "button") as ElementType;
  return (
    <Tag
      disabled={Tag === "button" ? disabled : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...BASE,
        ...SIZES[size],
        ...skin(variant, hovered && !disabled),
        opacity: disabled ? 0.38 : 1,
        pointerEvents: disabled ? "none" : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
