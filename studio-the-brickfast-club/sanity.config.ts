// @ts-nocheck — standalone Sanity Studio CLI config, not imported by Next.js
import {defineConfig} from "sanity"
import {structureTool} from "sanity/structure"
import {visionTool} from "@sanity/vision"
import {schemaTypes} from "./schemas"
import {projectId, dataset} from "./sanity.env"

export default defineConfig({
  name: "default",
  title: "TBC Compro Studio",

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
