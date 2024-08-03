// ./schemas/promotionType.ts

import {defineField, defineType} from 'sanity'

export const promotionType = defineType({
  name: 'promotion',
  type: 'object',
  title: 'Promotion',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
})