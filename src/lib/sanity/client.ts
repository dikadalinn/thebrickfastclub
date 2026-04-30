import {createClient} from "next-sanity";
import urlBuilder from "@sanity/image-url";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-01";

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!dataset) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_DATASET");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export function urlFor(source: SanityImageSource) {
  return urlBuilder({projectId: projectId!, dataset: dataset!}).image(source);
}
