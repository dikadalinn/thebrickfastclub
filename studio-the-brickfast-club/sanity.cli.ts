import {defineCliConfig} from "sanity/cli"

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId) {
  throw new Error(
    "Missing required environment variable: SANITY_STUDIO_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID"
  )
}

if (!dataset) {
  throw new Error(
    "Missing required environment variable: SANITY_STUDIO_DATASET or NEXT_PUBLIC_SANITY_DATASET"
  )
}

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
