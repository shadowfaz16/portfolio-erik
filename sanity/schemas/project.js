// import {defineField, defineType} from 'sanity'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [{type: 'reference', to: {type: 'client'}}],
    },
    {
      name: 'linkToProject',
      title: 'LinkToProject',
      type: 'url',
    },
  ],
}
