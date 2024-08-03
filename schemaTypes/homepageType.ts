// ./schemas/homepageType.ts

import {defineArrayMember, defineField, defineType} from 'sanity'

export const homepageType = defineType({
  name: 'homepageType',
  type: 'document',
  title: 'Homepage',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
        defineArrayMember({
          name: 'callToAction',
          type: 'reference',
          to: [{type: 'promotion'}],
        }),
        // etc...
      ],
    }),
  ],
})