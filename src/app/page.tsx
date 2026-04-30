import { getAllWorks } from "@/lib/sanity/queries";
import { STATIC_WORKS } from "@/lib/data/works";
import HomeClient from "./HomeClient";

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export default async function Home() {
  const sanityWorks = await getAllWorks();

  const works: Project[] = sanityWorks.length > 0
    ? sanityWorks.map((w) => ({
        slug: w.slug,
        title: w.title,
        description: w.description,
        image: w.thumbnail ?? w.galleryImages[0] ?? "",
      }))
    : STATIC_WORKS.map((w) => ({
        slug: w.slug,
        title: w.title,
        description: w.description,
        image: w.thumbnail ?? w.galleryImages[0] ?? "",
      }));

  return <HomeClient works={works} />;
}
