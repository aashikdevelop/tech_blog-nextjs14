import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myTheme} from './theme'

export default defineConfig({
  name: 'default',
  title: 'Sanity-CMS',

  projectId: 'onc7x2ct',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  theme: myTheme,
})
