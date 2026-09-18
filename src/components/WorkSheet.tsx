"use client";
import { useRouter } from "next/navigation";
import { Label } from "./ds/Label";
import { ImageFrame } from "./ds/ImageFrame";
import { Caption } from "./ds/Caption";
import { Button } from "./ds/Button";
import { altFor } from "@/lib/content";
import type { WorkItem, ImageRef } from "@/lib/work";

export type SheetItem = ImageRef & { project: WorkItem; cap?: string; isCover?: boolean };

export function WorkSheet({ item, close }: { item: SheetItem | null; close: () => void }) {
  const router = useRouter();
  if (!item) return null;
  const w = item.project;
  const img = item.src ? item : w.home[0];
  return (
    <div className="sheet" onClick={close}>
      <div className="sheetinner" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 32 }}>
          <button className="closebtn" onClick={close}>Close</button>
        </div>
        <Label rule>{w.meta}</Label>
        <h2 style={{ fontSize: 52, lineHeight: 1.02, letterSpacing: "-0.02em", margin: "24px 0 8px" }}>
          {w.title}
        </h2>
        {w.sub && (
          <p style={{ font: "400 26px/1.2 'Instrument Serif', Georgia, serif", color: "var(--ink-60)", margin: "0 0 24px" }}>
            {w.sub}
          </p>
        )}
        <div style={{ margin: "24px 0" }}>
          <ImageFrame src={img.src} ratio={img.ratio} alt={altFor(w)} />
        </div>
        <Caption credit={w.client === "Self-initiated" ? undefined : w.client}>{w.title}</Caption>
        <div style={{ height: 32 }} />
        <p style={{ font: "300 20px/1.55 'Hanken Grotesk', Arial, sans-serif", maxWidth: "52ch", margin: "0 0 32px", color: "var(--ink-60)" }}>
          {item.cap || w.short}
        </p>
        <Button
          className="btn"
          variant="primary"
          onClick={() => {
            close();
            router.push(`/work/${w.slug}`);
          }}
        >
          See the whole project
        </Button>
      </div>
    </div>
  );
}
