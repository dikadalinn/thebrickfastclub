'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schema} from './src/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bffutwi3'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'TBC Compro Studio',
  schema,
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: '2026-03-01'}),
  ],
})
