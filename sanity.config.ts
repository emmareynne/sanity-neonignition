import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Neon Ignition',

  projectId: 'k5pcpszv',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, { currentUser, creationContext }) => {
      const { type, schemaType } = creationContext;
      if (type === 'structure' && (schemaType == 'homepageType' || schemaType == 'menus')) {
        return [];
      }
      return prev;
    },
  },
})
