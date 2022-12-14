// import {defineField, defineType} from 'sanity'

export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'social media platform',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
  ],
}
