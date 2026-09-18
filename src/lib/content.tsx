import type { WorkItem } from "./work";

export function altFor(w: WorkItem, extra?: string) {
  const who = w.client && w.client !== "Self-initiated" ? " for " + w.client : "";
  return (extra ? extra + " — " : "") + w.meta.toLowerCase() + who + ": " + w.title;
}

export function renderPara(t: string) {
  return t.split(/_(.*?)_/).map((p, i) => (i % 2 ? <i key={i}>{p}</i> : p));
}
