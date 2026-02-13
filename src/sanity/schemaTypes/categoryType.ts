import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
      description: 'Badge color for this category',
      options: {
        list: [
          { title: 'Green (Detox)', value: 'green' },
          { title: 'Orange (Energy)', value: 'orange' },
          { title: 'Blue (Focus)', value: 'blue' },
          { title: 'Purple', value: 'purple' },
          { title: 'Red', value: 'red' },
          { title: 'Yellow', value: 'yellow' },
        ],
      },
      initialValue: 'blue',
    }),
  ],
})
