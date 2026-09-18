import { notFound } from "next/navigation";
import { ProjectView } from "@/components/ProjectView";
import { WORK } from "@/lib/work";

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = WORK.find((w) => w.slug === slug);
  if (!item) return { title: "Work — Austė Vagoraitė" };
  return {
    title: `${item.title} — ${item.meta} | Austė Vagoraitė`,
    description: `${item.short} By Austė Vagoraitė, illustrator and graphic designer in Vilnius, Lithuania.`,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!WORK.some((w) => w.slug === slug)) notFound();
  return <ProjectView initialSlug={slug} />;
}
