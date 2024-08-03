import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'menus',
  title: 'Menus',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      hidden: true,
    }),
    defineField({
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'menuItem',
          title: 'Menu Items',
          fields: [
            { type: 'string', name: 'name', title: 'Name' },
            {
              type: 'url',
              name: 'URL',
              title: 'URL',
              validation: (rule) =>
                rule.required().uri({ allowRelative: true }),
            },
            {
              type: 'array',
              name: 'subMenuItems',
              title: 'Submenu Items',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'subMenuItem',
                  title: 'Submenu Item',
                  fields: [
                    { type: 'string', name: 'name', title: 'Name' },
                    {
                      type: 'url',
                      name: 'URL',
                      title: 'URL',
                      validation: (rule) =>
                        rule.required().uri({ allowRelative: true }),
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
  initialValue: {
    title: 'Main Menu',
  },
  preview: {
    select: {
      title: 'title',
    },
  },
})
