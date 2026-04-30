// @ts-nocheck
// Schemas copied into src/lib/sanity/schemas to avoid importing from
// studio-the-brickfast-club/node_modules which contains a duplicate react@18
// that conflicts with Next.js's react@19.
import {defineConfig} from "sanity"
import {structureTool} from "sanity/structure"
import {visionTool} from "@sanity/vision"
import {schemaTypes} from "./sanity/schemas"
import {projectId, dataset} from "../../studio-the-brickfast-club/sanity.env"

const config = defineConfig({
  name: "default",
  title: "TBC Compro Studio",

  projectId: projectId!,
  dataset: dataset!,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default config