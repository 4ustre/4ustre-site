/* @ds-bundle: {"format":4,"namespace":"Ds4ustreDesignSystem_43cae6","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ColorField","sourcePath":"components/layout/ColorField.jsx"},{"name":"Caption","sourcePath":"components/media/Caption.jsx"},{"name":"ImageFrame","sourcePath":"components/media/ImageFrame.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"c48eb9442c90","components/cards/ProjectCard.jsx":"87692caad88b","components/core/Button.jsx":"653b39962922","components/core/Label.jsx":"de5d737e9d89","components/core/Tag.jsx":"4af6c0f8bc82","components/layout/ColorField.jsx":"ab853b801c16","components/media/Caption.jsx":"a83e233c120e","components/media/ImageFrame.jsx":"688bf607e485","ui_kits/website/About.jsx":"76f377ae688b","ui_kits/website/Chrome.jsx":"dd42c2f7ad19","ui_kits/website/Home.jsx":"f8cd8b031d9c","ui_kits/website/Work.jsx":"7b378d77b795"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds4ustreDesignSystem_43cae6 = window.Ds4ustreDesignSystem_43cae6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VIEW_BOX = "0 0 141.73 141.73";
const MARK = "<path class=\"cls-1\" d=\"M125.47,66.43c-.26-.86-.54-1.75-.6-2.77-.05-.69.19-1.47.44-2.3.48-1.59,1.03-3.38-.37-4.96-.82-.93-1.17-1.72-1.31-2.94-.07-.62-.15-1.35-.22-2.1-.15-1.45-.3-2.96-.46-4.06-.48-3.32-3.11-4.19-5.43-4.94l-.36-.12c-1.81-.6-2.92-1.71-3.99-2.77-.88-.88-1.71-1.71-2.87-2.21-1.32-.58-2.24-.55-3.12-.53-.64.02-1.24.04-2.03-.17-2.51-.65-3.74-1.65-4.83-2.54-1.85-1.51-3.31-2.71-9.16-1.25-3.8.95-7.3.98-10.71.11-.35-.09-1.15-.26-1.21-.26-6.39-1.11-10.28,2.54-14.39,6.4l-.21.19c-1.68,1.58-3.05,2.23-4.37,2.87-.07.03-.14.07-.21.1.48.46,1.7,1.06,3.02,3.76.11-.63.11-1.92,1.2-2.68,1.41-.98,2.63-2.88,4.29-4.95.63-.79,1.9-.5,2.15.47.79,3.02,1.87,6.73,2.48,9.2.27,1.09-.49,2.19-1.61,2.3-1.37.13-3.84-.42-4.97-.96s-3.66-2.27-4.69-4.15c-.84-1.18-1.73-2.15-2.36-2.75-.27.13-.53.28-.8.43l1.53,1.89-.39.31-1.58-1.95c-.21.13-.42.27-.62.42l1.49,1.89-.39.31-1.49-1.9c-.22.18-.45.38-.67.6l1.45,1.85-.39.31-1.4-1.8c-.21.23-.43.48-.65.76.73,1.23,4.25,5.31,9.82,6.92,2.11.61,6.34,1.16,8.93.21,1.88,12.75,2.55,19.77,4.3,31.68-2.74-7.38-9.8-12.06-11.22-12.99-4.23-2.87-11.38-5.86-12.71-10.06-.49-1.56-1.93-5.27.57-9.86.66-1.22,2.18-1.4,4.05-1.11-2.06-1.36-3.42-3.27-4.08-4.36,0,0-.01.02-.02.02-.46.62-.91,1.28-1.37,1.96-1.02,1.5-2.08,3.04-3.33,4.29-1.19,1.19-2.62,2.02-4.1,2.83-1.63.89-3.42,1.99-5.61,3.46-1.53,1.02-3.05,3.19-3.63,4.4-1.23,2.55-3.49,4.39-5.66,6.18-2.47,2.02-5.01,4.1-5.97,7.19-1.92,6.18-3.77,9.22-6.33,13.43-.68,1.12-1.41,2.33-2.22,3.7-2.58,4.42-1.53,9.32,2.81,13.11,2.5,2.18,6.45,2.04,9.93,1.92.72-.03,1.43-.05,2.09-.05,2.51,0,5.05.31,7.5.61,2.13.27,4.34.54,6.55.61.44.01.87.02,1.29.02,1.65,0,3.22-.13,5.21-.54,1.59-.33,2.95-1.04,4.27-1.73,1.66-.86,3.37-1.76,5.6-1.93,1.77-.14,4.34-.09,6.83-.04l1.39.02c1.91.02,3.84-.36,5.61-1.14.58-.26,1.16-.52,1.73-.78,2.8-1.28,5.45-2.49,8.91-2.86,1.5-.16,5.42-.56,7.3-.7,2.52-.18,5.3-1.92,6.09-2.44,1.54-1.03,3.21-1.63,4.83-2.21,2.5-.9,4.86-1.75,6.37-4.04,1.47-2.24,3-3.82,4.54-4.69,2.21-1.25,2.76-3.53,3.25-5.54.25-1.06.5-2.05.95-2.79.73-1.19,1.72-2.13,2.68-3.04,1.73-1.63,3.36-3.17,3.29-5.91-.03-1.02-.31-1.95-.59-2.85ZM47.5,56.99c.28-.52,1.63-2.33,2.67-3.1.24-.18.55.06.45.34-.83,2.21-1.31,4.54-1.34,6.8,0,.31-.43.39-.53.09-.65-1.78-1.92-2.87-1.25-4.13ZM18.25,99.12c-.95-2.01,1.23-4.47,3.36-7.79,1.94-3.02,4.39-6.45,5.78-11.76.1-.38.62-.42.78-.06,2.42,5.5,5.79,11.18,5.98,16.64.01.36-.28.65-.64.65-4.29,0-13.36,6.32-15.25,2.31ZM32.64,106.92c-1.13-.2-2.83-.09-3.56-.06-3.3.11-4.47-.23-7.62-1.53-3.16-1.31-1.81-2.45-.85-2.4,5.09.26,7.24-3.08,13.05-2.41.38.04.72.27.9.61.44.82.75,2.23.77,3.29.02,1.12-1.02,2.8-2.69,2.5ZM38.54,95.93c-1.64-6.68-6.6-13.63-8.79-19.95-.31-.89,2.53-4.53,3.11-3.78,1.95,2.53,3.92,8.76,4.85,10.96,1.84,4.35,2.96,7.11,4.68,11.43.15.37.06.8-.24,1.07-.52.46-1.42,1.05-2.33,1.2-.6.1-1.14-.33-1.28-.92ZM47.44,108.66c-2.86-1.44-2.56-.34-4.12-1.3-2.21-1.36-2.58-3.18-3.37-5.78-.05-.16-.15-.61-.25-1-.07-.29.11-.59.41-.63,1.57-.24,2.49-1,3.29-1.46.27-.16.62,0,.7.29,1.04,3.7,1.89,7.86,3.52,9.37.2.18.06.63-.18.51ZM51.79,100.71c-3.31,1.73-5.06-3.1-5.92-6.08-3.43-11.95-10.98-23.03-7.64-29.31,1.52-2.86,1.22-4.51,3.69-6.23.54-.37,1.27-.2,1.59.37,2.25,4.04,5.18,12.49,6.52,17.27,2.02,7.24,3.06,10.93,5.04,18.19-.91,3.59-2.06,5.15-3.27,5.79ZM56.59,105.26c-1.41.98-2.93,2.16-2.99,2.19-1.04.51.79-1.84,1.23-2.91.52-1.26.6-1.99,1.03-3.47.22-.74,1.23-.84,1.57-.14.61,1.24,1.27,2.46,1.61,3.45.13.4-1.46.19-2.45.88ZM71.62,98.53c-.99.85-5.9,2.48-9.9-1.83-.85-2.04-1.61-4.17-2.43-6.53-2.57-7.33-5.05-14-7.53-20.79,3.11,4.7,7.73,4.74,13.46,9.06,3.24,2.59,4.49,3.21,6.85,7.83,1.67,3.28,1.02,11.01-.44,12.26ZM114.54,47.88c1.43.3,4.9,5.95,5.65,14.23.31,3.45-1.01,3.76-2.23,4.07-2,.52-8.01.35-8.59-.15-.24-.36-.91-1.88-.24-7.48.97-8.15,3.66-11.02,5.41-10.66ZM76.38,45.33c.25-.04.5.24.57.64s-.07.76-.31.8c-.25.04-.5-.24-.57-.64s.07-.76.31-.8ZM75.01,47.2c-.25.04-.5-.24-.57-.64s.07-.76.31-.8c.25-.04.5.24.57.64s-.07.76-.31.8ZM77.02,49.15c-.29.24-.72.4-1.12.22l.08-.16c.68.2,1.21-.55,1.49-1.08l.27.15c-.2.31-.42.63-.73.86ZM85.06,99.92c-2.5-.11-3.13.82-4.76.77-1.08-.03-2.4,1-2.16.62.9-1.43,1.55-3.35,1.79-5.84.07-.67.97-.83,1.24-.22,1.01,2.21,2.29,3.5,3.91,4.08.3.11.3.61-.02.6ZM93.89,94.54c-1.86.36-4.18-.14-5.78-1.12-2.66-1.62-3.12-7.84-3.38-10-1.54-12.45-2.3-18.68-3.84-31.12,5.11.71,9.14-.5,11.19-1.65.74-.5,3.92-2.68,5.3-3.89-.03-.41-.06-.84-.1-1.29-.56.47-1.09.99-1.1,1l-.39-.39s.74-.74,1.43-1.27c-.03-.37-.07-.76-.11-1.15-.84.56-1.93,1.71-1.94,1.72l-.2-.19h0s0,0,0,0l-.2-.19c.06-.06,1.35-1.42,2.28-1.95-.05-.43-.09-.86-.14-1.29-1.35.87-2.84,2.58-2.85,2.6l-.21-.18h0s0,0,0,0l-.21-.18c.07-.09,1.72-1.97,3.2-2.83-.03-.27-.06-.54-.1-.82-2.24,1.55-3.67,3.33-4.63,4.55-.42.53-1.48,2.01-1.77,2.3-1.13,1.1-3.84,2.07-5.58,2.12-4.58.13-5.45-2.54-5.64-4.16-.44-3.74-.99-9.28.44-10.01,2.36-1.19,4.81.59,7.07.18,1.39-.26,3.02-.15,3.84,1,1.26,1.76,1.37,2.42,1.46,5.47.03.93.03,1.85-.2,2.76,1.01-1.28,2.52-3.16,4.93-4.77-.2-1.68-.42-3.31-.62-4.66-.17-1.16.63-1.87,1.66-1.32.55.29,1.12.96,1.63,1.37.67.55,1.08,1.36,2.11,1.73.91.33,1.7,1.21.92,1.78-2.19,1.61-3.9,4.22-4.66,8.38-.03.16-4.89,3.67-5.44,4.04.51,4.54.9,9.25,1.01,12.09.2,4.32.4,8.63.6,12.95.35,6.03.47,11.58.6,17.65,0,.34-.26.66-.6.73ZM104.84,92.53c-.64,1.19-2.59.38-3.3.46-2.13.24-3.23,3.41-3.88-2.48-.41-3.71-.72-6.86-.71-11.39.01-5.93.17-8.89.28-14.81.2-10.23,2.09-13.7,4.59-16.41,1.13-1.24,5.5-5.11,8.02-1.2.35.54.22,1.2-.13,1.72-1.1,1.62-3.07,6.07-3.07,6.07-1.44,3.43-2.21,6.18-2.54,12.7-.52,10.26,4.64,18.19.75,25.34ZM123.49,71.66c-.55.91-1.4,2.19-2.35,3.09-1.01.95-2.03,1.94-2.85,3.24-1.13,1.79-1.71,6.07-6.34,6.31-3.03.16-3.34-5.21-3.16-15.03,0-.35.31-.62.66-.59,6.31.6,9.22.54,12.97-.33.41-.1.77.14,1.06.55.57.81.51,1.91,0,2.76Z\"></path>";

/* The hand-drawn creature whose closed silhouette spells a-u-s-t-r-e.
   Never redrawn, smoothed, outlined, rotated or shadowed. Only the ink colour changes. */
function Logo({
  variant = "mark",
  size = 96,
  tone = "ink",
  clearspace = false,
  title = "4ustre",
  style,
  ...rest
}) {
  const color = tone === "cream" ? "var(--paper)" : tone === "ink" ? "var(--ink)" : tone;
  const pad = clearspace ? size * 0.18 : 0;
  const mark = /*#__PURE__*/React.createElement("svg", {
    viewBox: VIEW_BOX,
    role: "img",
    "aria-label": title,
    width: size,
    height: size,
    style: {
      color,
      display: "block",
      overflow: "visible"
    },
    dangerouslySetInnerHTML: {
      __html: MARK
    }
  });
  if (variant === "mark" || variant === "stamp") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        padding: pad,
        display: "inline-block",
        ...style
      }
    }, rest), mark);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: pad,
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: size * 0.12,
      ...style
    }
  }, rest), mark, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) " + Math.round(size * 0.42) + "px/1 var(--font-display)",
      letterSpacing: "-0.01em",
      color
    }
  }, "4ustre"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  font: "var(--type-body-strong)",
  fontSize: "var(--size-small)",
  border: "1px solid transparent",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--space-2)",
  textDecoration: "none",
  transition: "background-color var(--motion-base) var(--motion-ease), color var(--motion-base) var(--motion-ease), border-color var(--motion-base) var(--motion-ease), opacity var(--motion-fast) var(--motion-ease)"
};
const SIZES = {
  small: {
    padding: "8px 16px",
    fontSize: "var(--size-caption)"
  },
  medium: {
    padding: "12px 24px"
  },
  large: {
    padding: "16px 32px",
    fontSize: "var(--size-body)"
  }
};
function skin(variant, hovered) {
  switch (variant) {
    case "primary":
      return {
        background: hovered ? "var(--ink)" : "var(--accent-primary)",
        color: "var(--paper)",
        borderColor: hovered ? "var(--ink)" : "var(--accent-primary)"
      };
    case "secondary":
      return {
        background: hovered ? "var(--ink-08)" : "transparent",
        color: "var(--ink)",
        borderColor: "var(--line-rule)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: hovered ? "var(--accent-primary)" : "var(--ink)",
        borderColor: "transparent",
        padding: 0
      };
    case "onField":
      return {
        background: hovered ? "var(--paper)" : "transparent",
        color: hovered ? "var(--surface-field)" : "var(--text-on-field)",
        borderColor: "var(--text-on-field)"
      };
    default:
      return {};
  }
}

/** A quiet pill. Sentence case, first person where it speaks. No shadows, no lift. */
function Button({
  variant = "primary",
  size = "medium",
  as = "button",
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      ...BASE,
      ...SIZES[size],
      ...skin(variant, hovered && !disabled),
      opacity: disabled ? 0.38 : 1,
      pointerEvents: disabled ? "none" : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** An uppercase grotesk label, Medium 500 with 0.16em tracking. Labels are the only
 *  place uppercase is allowed — never a headline. Optionally prefixed with a rule. */
function Label({
  children,
  tone = "muted",
  rule = false,
  as = "div",
  style,
  ...rest
}) {
  const color = tone === "field" ? "var(--text-on-field)" : tone === "ink" ? "var(--ink)" : tone === "accent" ? "var(--accent-primary)" : "var(--text-muted)";
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: "currentColor",
      opacity: 0.5,
      flex: "none"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  outline: {
    background: "transparent",
    color: "var(--ink)",
    borderColor: "var(--line-rule)"
  },
  quiet: {
    background: "var(--paper-deep)",
    color: "var(--ink-60)",
    borderColor: "transparent"
  },
  field: {
    background: "var(--surface-field)",
    color: "var(--text-on-field)",
    borderColor: "transparent"
  },
  accent: {
    background: "transparent",
    color: "var(--accent-primary)",
    borderColor: "var(--accent-primary)"
  }
};

/** A small pill naming a medium, a client or a year. Sentence case, never a call to action. */
function Tag({
  children,
  tone = "outline",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      font: "var(--type-caption)",
      fontWeight: "var(--weight-medium)",
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid transparent",
      display: "inline-block",
      whiteSpace: "nowrap",
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/layout/ColorField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A flat section-colour surface with the mandatory grain. One section colour per
 *  piece — set `section` once, high up, and let children inherit --surface-field.
 *  `circle` renders the recurring arrangement: a circle holding an image or a title,
 *  centred on the field. */
function ColorField({
  section = "rose",
  circle = false,
  pad = "var(--pad-field)",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-section": section,
    style: {
      position: "relative",
      background: "var(--surface-field)",
      color: "var(--text-on-field)",
      padding: pad,
      display: circle ? "grid" : "block",
      placeItems: circle ? "center" : undefined,
      ...style
    }
  }, rest), circle ? /*#__PURE__*/React.createElement("div", {
    style: {
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
      zIndex: 1
    }
  }, children) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "var(--grain-url)",
      backgroundSize: "var(--grain-size) var(--grain-size)",
      mixBlendMode: "var(--grain-blend)",
      opacity: "var(--grain-opacity-field)"
    }
  }));
}
Object.assign(__ds_scope, { ColorField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ColorField.jsx", error: String((e && e.message) || e) }); }

// components/media/Caption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A caption sits under an image and names the actual thing: the book, the couple,
 *  the crisp. Light 300, 13px, ink at 60%, measure capped at 44ch. Left-aligned. */
function Caption({
  children,
  credit,
  tone = "paper",
  style,
  ...rest
}) {
  const color = tone === "field" ? "var(--text-on-field)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("figcaption", _extends({
    style: {
      font: "var(--type-caption)",
      color,
      maxWidth: "44ch",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), credit ? /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, credit) : null);
}
Object.assign(__ds_scope, { Caption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Caption.jsx", error: String((e && e.message) || e) }); }

// components/media/ImageFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Holds a painting. Three shapes only: a rectangle, a circle crop, or a full-bleed
 *  band. Always grained, never rounded (except the circle), never shadowed.
 *  With no `src` it renders a flat section-colour field — the honest placeholder. */
function ImageFrame({
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
  ...rest
}) {
  const circle = shape === "circle";
  const holder = {
    position: "relative",
    overflow: "hidden",
    background: src ? "var(--paper-deep)" : fill,
    aspectRatio: circle ? "1" : ratio,
    borderRadius: circle ? "var(--radius-circle)" : "var(--radius-none)",
    width: "100%",
    marginRight: bleed === "right" ? "calc(var(--margin-page) * -1)" : undefined,
    marginLeft: bleed === "left" ? "calc(var(--margin-page) * -1)" : undefined
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: holder
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--paper-70)",
      textAlign: "center",
      padding: "var(--space-5)"
    }
  }, alt || "image"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "var(--grain-url)",
      backgroundSize: "var(--grain-size) var(--grain-size)",
      mixBlendMode: "var(--grain-blend)",
      opacity: grain === "paper" ? "var(--grain-opacity-paper)" : "var(--grain-opacity-field)"
    }
  })), caption ? /*#__PURE__*/React.createElement(__ds_scope.Caption, {
    credit: credit
  }, caption) : null);
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One piece of work, quietly. Image, then the year and medium, then the title.
 *  No border, no shadow, no rounding — the image edge is the card edge.
 *  On hover the title takes the section colour; nothing moves. */
function ProjectCard({
  title,
  meta,
  src,
  alt,
  shape = "rect",
  ratio = "4 / 5",
  fill,
  href = "#",
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      textDecoration: "none",
      border: "none",
      color: "var(--ink)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    src: src,
    alt: alt || title,
    shape: shape,
    ratio: ratio,
    fill: fill
  }), meta ? /*#__PURE__*/React.createElement(__ds_scope.Label, null, meta) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-subtitle)",
      margin: 0,
      color: hovered ? "var(--accent-primary)" : "var(--ink)",
      transition: "color var(--motion-base) var(--motion-ease)"
    }
  }, title));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function About() {
  const {
    ImageFrame,
    Label,
    Button,
    ColorField
  } = window.Ds4ustreDesignSystem_43cae6;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    "data-section": "cornflower"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: 32,
      marginBottom: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / 6"
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "circle",
    alt: "Aust\u0117, in the studio",
    caption: "Me, avoiding the camera. Vilnius, 2025."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "7 / -1"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    rule: true
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      fontSize: 64,
      letterSpacing: "-0.02em",
      margin: "24px 0"
    }
  }, "Aust\u0117 Vagorait\u0117"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      maxWidth: "40ch"
    }
  }, "I am an illustrator and graphic designer in Vilnius."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)"
    }
  }, "I studied graphic design at the Vilnius Academy of Arts and have been drawing for publishers, magazines and couples since 2019. I like a brief with a constraint in it. I also run The Chips Critics Club, which is exactly what it sounds like."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)"
    }
  }, "If you have an idea, I'd love to see where we could take it."))), /*#__PURE__*/React.createElement(ColorField, {
    section: "cornflower",
    pad: "96px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-title)",
      fontSize: 44,
      marginBottom: 16
    }
  }, "Write to me"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "30ch"
    }
  }, "Tell me what it is, when it's for, and roughly what you can spend. I answer within a few days.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, [["Your name", "text"], ["Email", "email"]].map(([l, t]) => /*#__PURE__*/React.createElement("label", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase"
    }
  }, l), /*#__PURE__*/React.createElement("input", {
    type: t,
    required: true,
    style: {
      font: "var(--type-body)",
      color: "var(--ink)",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid var(--ink-38)",
      padding: "6px 0",
      outline: "none"
    }
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase"
    }
  }, "The idea"), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    style: {
      font: "var(--type-body)",
      color: "var(--ink)",
      background: "transparent",
      resize: "none",
      border: "none",
      borderBottom: "1px solid var(--ink-38)",
      padding: "6px 0",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      alignSelf: "flex-start"
    }
  }, sent ? "Thank you — I'll write back" : "Send it")))));
}
function Shop() {
  const {
    ProjectCard,
    Label,
    Tag
  } = window.Ds4ustreDesignSystem_43cae6;
  const items = [{
    title: "Moth pin",
    meta: "€14 · Enamel, edition of 60",
    section: "plum"
  }, {
    title: "Three greens print",
    meta: "€38 · Giclée, A3",
    section: "grass"
  }, {
    title: "Crisp shirt",
    meta: "€32 · Screenprint, cream",
    section: "rose"
  }, {
    title: "Crow postcard set",
    meta: "€9 · Six cards",
    section: "terracotta"
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-section": "sage"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      fontSize: 72,
      letterSpacing: "-0.02em",
      marginBottom: 24
    }
  }, "Shop"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      maxWidth: "40ch",
      marginBottom: 48
    }
  }, "Small things, printed properly. Posted from Vilnius on Thursdays."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32
    }
  }, items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.title,
    "data-section": i.section
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    title: i.title,
    meta: i.meta,
    ratio: "1"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "quiet"
  }, "Ships within the EU"), /*#__PURE__*/React.createElement(Tag, {
    tone: "quiet"
  }, "Uncoated stock")), /*#__PURE__*/React.createElement(Label, {
    rule: true,
    style: {
      marginTop: 32
    }
  }, "Restocked when I remember"));
}
Object.assign(window, {
  About,
  Shop
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const NAV = [["work", "Work"], ["about", "About"], ["shop", "Shop"]];
function Header({
  route,
  go
}) {
  const {
    Logo
  } = window.Ds4ustreDesignSystem_43cae6;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "32px 0 64px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      border: "none",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    size: 44
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 32,
      alignItems: "center"
    }
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: route === id ? "var(--accent-primary)" : "var(--ink)",
      borderBottom: "none"
    }
  }, label))));
}
function Footer() {
  const {
    Logo,
    Label
  } = window.Ds4ustreDesignSystem_43cae6;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 160,
      paddingBottom: 64,
      borderTop: "1px solid var(--line-hairline)",
      paddingTop: 32,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-title)",
      fontSize: 28
    }
  }, "auste@4ustre.lt"), /*#__PURE__*/React.createElement(Label, null, "Vilnius, Lithuania")), /*#__PURE__*/React.createElement(Logo, {
    variant: "stamp",
    size: 34
  }));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WORK = [{
  title: "Debesų knyga",
  meta: "2025 · Book cover",
  section: "terracotta",
  ratio: "4 / 5"
}, {
  title: "Elena & Jonas",
  meta: "2024 · Wedding stationery",
  section: "sage",
  ratio: "4 / 5"
}, {
  title: "A quiet week in Vilnius",
  meta: "2025 · Editorial, Naujasis Židinys",
  section: "cornflower",
  ratio: "4 / 5"
}, {
  title: "Six crisps, ranked",
  meta: "Ongoing · The Chips Critics Club",
  section: "grass",
  ratio: "4 / 5"
}, {
  title: "Rūta's greengrocer",
  meta: "2024 · Brand identity",
  section: "rose",
  ratio: "4 / 5"
}, {
  title: "Moth pin, edition of 60",
  meta: "2023 · Illustrated product",
  section: "plum",
  ratio: "4 / 5"
}];
function Home({
  go
}) {
  const {
    ImageFrame,
    Label,
    Button,
    ProjectCard,
    ColorField
  } = window.Ds4ustreDesignSystem_43cae6;
  return /*#__PURE__*/React.createElement("div", {
    "data-section": "terracotta"
  }, /*#__PURE__*/React.createElement("section", {
    className: "arr-text-bleed",
    style: {
      marginBottom: 160
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    rule: true
  }, "Illustration & graphic design"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      fontSize: 96,
      letterSpacing: "-0.02em",
      margin: "24px 0 24px"
    }
  }, "I draw for books,", /*#__PURE__*/React.createElement("br", null), "magazines and people", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "getting married.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      maxWidth: "38ch",
      marginBottom: 32
    }
  }, "I work in Vilnius. Most things start on paper and end up printed on something uncoated."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("work")
  }, "See the work")), /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4 / 5",
    alt: "Cover painting \u2014 Debes\u0173 knyga"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Label, {
    rule: true,
    style: {
      marginBottom: 32
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32
    }
  }, WORK.slice(0, 3).map(w => /*#__PURE__*/React.createElement("div", {
    key: w.title,
    "data-section": w.section
  }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, w, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("project");
    }
  })))))), /*#__PURE__*/React.createElement(ColorField, {
    section: "grass",
    circle: true,
    pad: "96px",
    style: {
      marginBottom: 160
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    tone: "ink",
    style: {
      justifyContent: "center",
      marginBottom: 16
    }
  }, "Side project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-title)",
      fontSize: 40,
      marginBottom: 16
    }
  }, "The Chips", /*#__PURE__*/React.createElement("br", null), "Critics Club"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "24ch",
      margin: "0 auto 24px"
    }
  }, "Two people, one bag of crisps a week, notes taken far too seriously."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small"
  }, "Read the notes"))), /*#__PURE__*/React.createElement("section", {
    className: "arr-bleed-cap"
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "3 / 2",
    alt: "Wedding stationery, letterpress on cream",
    caption: "Invitations for Elena and Jonas \u2014 letterpress, two passes, one crow.",
    credit: "Photographed in the studio, 2024"
  })));
}
Object.assign(window, {
  Home,
  WORK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILTERS = ["Everything", "Book covers", "Editorial", "Identity", "Wedding", "Products"];
function Work({
  go
}) {
  const {
    ProjectCard,
    Tag,
    Label
  } = window.Ds4ustreDesignSystem_43cae6;
  const [active, setActive] = React.useState("Everything");
  return /*#__PURE__*/React.createElement("div", {
    "data-section": "rose"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      fontSize: 72,
      letterSpacing: "-0.02em",
      marginBottom: 32
    }
  }, "Work"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      maxWidth: "42ch",
      marginBottom: 48
    }
  }, "Twenty-odd projects since 2019. Covers, invitations, a greengrocer, some pins."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 64,
      flexWrap: "wrap"
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setActive(f),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: active === f ? "accent" : "outline"
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32,
      rowGap: 64
    }
  }, window.WORK.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.title,
    "data-section": w.section
  }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, w, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("project");
    }
  }))))), /*#__PURE__*/React.createElement(Label, {
    rule: true,
    style: {
      marginTop: 64
    }
  }, "Older work on request"));
}
function Project({
  go
}) {
  const {
    ImageFrame,
    Label,
    Button,
    Caption,
    Tag
  } = window.Ds4ustreDesignSystem_43cae6;
  return /*#__PURE__*/React.createElement("div", {
    "data-section": "terracotta"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: 32,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / 7"
    }
  }, /*#__PURE__*/React.createElement(Label, {
    rule: true
  }, "2025 \xB7 Book cover"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display)",
      fontSize: 72,
      letterSpacing: "-0.02em",
      margin: "24px 0"
    }
  }, "Debes\u0173 knyga"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)"
    }
  }, "Rasa's second novel is about a summer that will not end. I painted three greens and one crow, then took the crow out and put it back twice."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)"
    }
  }, "Printed by Baltos lankos on uncoated cream stock, with the title foiled in ink."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "quiet"
  }, "Gouache"), /*#__PURE__*/React.createElement(Tag, {
    tone: "quiet"
  }, "Foil"), /*#__PURE__*/React.createElement(Tag, {
    tone: "quiet"
  }, "Baltos lankos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "8 / -1"
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "4 / 5",
    alt: "Cover, final"
  }))), /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "16 / 9",
    alt: "Cover in place on the shelf",
    caption: "The finished cover, uncoated cream.",
    style: {
      marginBottom: 64
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "1",
    alt: "Sketch, first pass"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    ratio: "1",
    alt: "Sketch, crow removed"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "circle",
    alt: "Detail, three greens"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid var(--line-hairline)",
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "Next: Elena & Jonas, wedding stationery."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go("work")
  }, "\u2190 All work")));
}
Object.assign(window, {
  Work,
  Project
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ColorField = __ds_scope.ColorField;

__ds_ns.Caption = __ds_scope.Caption;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

})();
