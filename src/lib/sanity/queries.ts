import { client, urlFor } from "./client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { Work } from "./types";

function mapDoc(doc: Record<string, unknown>): Work {
  const galleryImages = (doc.galleryImages as SanityImageSource[] | undefined)?.map((img) =>
    urlFor(img).url()
  ) ?? [];

  return {
    _id: doc._id as string,
    title: doc.title as string,
    slug: (doc.slug as { current?: string } | undefined)?.current ?? "",
    location: doc.location as string,
    year: doc.year as string,
    description: doc.description as string,
    galleryImages,
    thumbnail:
      (doc.thumbnail as SanityImageSource | undefined)
        ? urlFor(doc.thumbnail as SanityImageSource).url()
        : galleryImages[0],
    order: doc.order as number | undefined,
  };
}

export async function getAllWorks(): Promise<Work[]> {
  try {
    const docs = await client.fetch<Record<string, unknown>[]>(
      `*[_type == "work"] | order(order asc, _createdAt asc) {
        _id, title, slug, location, year, description,
        galleryImages[] { asset-> }, thumbnail { asset-> }, order
      }`
    );
    return docs.map(mapDoc);
  } catch {
    return [];
  }
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  try {
    const doc = await client.fetch<Record<string, unknown> | null>(
      `*[_type == "work" && slug.current == $slug][0] {
        _id, title, slug, location, year, description,
        galleryImages[] { asset-> }, thumbnail { asset-> }, order
      }`,
      { slug }
    );
    return doc ? mapDoc(doc) : null;
  } catch {
    return null;
  }
}

export async function getAllWorkSlugs(): Promise<string[]> {
  try {
    return await client.fetch<string[]>(`*[_type == "work"].slug.current`);
  } catch {
    return [];
  }
}
