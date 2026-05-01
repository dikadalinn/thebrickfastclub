import { getAllWorks } from "@/lib/sanity/queries";
import { STATIC_WORKS } from "@/lib/data/works";
import WorksListClient from "./WorksListClient";

export default async function Works() {
  const sanityWorks = await getAllWorks();
  const rawProjects = sanityWorks.length > 0
    ? sanityWorks.map((w, i) => ({
        key: w._id,
        order: typeof w.order === 'number' ? w.order : i + 1,
        slug: w.slug,
        title: w.title,
        img: w.thumbnail ?? w.galleryImages[0] ?? "",
      }))
    : STATIC_WORKS.map((w, i) => ({
        key: `static-${i + 1}`,
        order: typeof w.order === 'number' ? w.order : i + 1,
        slug: w.slug,
        title: w.title,
        img: w.thumbnail ?? w.galleryImages[0] ?? "",
      }));

  const projects = rawProjects.map((project) => ({
    ...project,
    order: Number(project.order) || 0,
  }));

  return <WorksListClient projects={projects} />;
}
