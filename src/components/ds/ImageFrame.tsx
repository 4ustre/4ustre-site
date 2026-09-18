// Ported from the 4ustre design system (components/media/ImageFrame.jsx).
// Holds a painting. Three shapes only: a rectangle, a circle crop, or a full-bleed
// band. Always grained, never rounded (except the circle), never shadowed.
// With no `src` it renders a flat section-colour field — the honest placeholder.
import { CSSProperties } from "react";
import { Caption } from "./Caption";

export type ImageFrameProps = {
  src?: string;
  alt?: string;
  shape?: "rect" | "circle";
  ratio?: string;
  fill?: string;
  grain?: "field" | "paper";
  caption?: string;
  credit?: string;
  bleed?: "none" | "left" | "right";
  style?: CSSProperties;
};

export function ImageFrame({
  src,
  alt = "",
  shape = "rect",
  ratio = "3 / 2",
  fill = "var(--surface-field)",
  grain = "field",
  caption,
  credit,
  bleed = "none",
  style,
}: ImageFrameProps) {
  const circle = shape === "circle";
  const holder: CSSProperties = {
    position: "relative",
    overflow: "hidden",
    background: src ? "var(--paper-deep)" : fill,
    aspectRatio: circle ? "1" : ratio,
    borderRadius: circle ? "var(--radius-circle)" : "var(--radius-none)",
    width: "100%",
    marginRight: bleed === "right" ? "calc(var(--margin-page) * -1)" : undefined,
    marginLeft: bleed === "left" ? "calc(var(--margin-page) * -1)" : undefined,
  };
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-4)", ...style }}>
      <div style={holder}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              font: "var(--type-label)",
              letterSpacing: "var(--track-label)",
              textTransform: "uppercase",
              color: "var(--paper-70)",
              textAlign: "center",
              padding: "var(--space-5)",
            }}
          >
            {alt || "image"}
          </span>
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
            opacity: grain === "paper" ? "var(--grain-opacity-paper)" : "var(--grain-opacity-field)",
          }}
        />
      </div>
      {caption ? <Caption credit={credit}>{caption}</Caption> : null}
    </figure>
  );
}
