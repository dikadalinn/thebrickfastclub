import { getAllWorkSlugs, getWorkBySlug, getAllWorks } from "@/lib/sanity/queries";
import { STATIC_WORKS } from "@/lib/data/works";
import WorksDetailClient from "./WorksDetailClient";

export async function generateStaticParams() {
  const sanitySlugs = await getAllWorkSlugs();
  if (sanitySlugs.length > 0) {
    return sanitySlugs.map((slug) => ({ slug }));
  }
  return STATIC_WORKS.map((w) => ({ slug: w.slug }));
}

export default async function WorksDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sanityWork = await getWorkBySlug(slug);
  const sanityAllWorks = await getAllWorks();

  const work = sanityWork ?? STATIC_WORKS.find((w) => w.slug === slug) ?? null;
  const allWorks = sanityAllWorks.length > 0 ? sanityAllWorks : STATIC_WORKS;

  if (!work) {
    return <div>Work not found</div>;
  }

  const currentIndex = Math.max(
    0,
    allWorks.findIndex((w) => w.slug === slug)
  );
  const nextProject = allWorks[(currentIndex + 1) % allWorks.length];

  return <WorksDetailClient work={work} nextProject={nextProject} />;
}
