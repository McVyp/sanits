import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBIC_SANITY_DATASET!;
export default defineConfig({
  basePath: '/studio',
  name: 'blog-content-studio',
  title: 'bumblog',
  projectId,
  dataset,
  
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
