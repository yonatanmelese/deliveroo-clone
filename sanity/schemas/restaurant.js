export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: Rule => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longtiude of the restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of the restaurant',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from <1-5> stars',
      validation: Rule =>
        Rule.required().min(1).max(5).error('Please enter a value from <1-5>'),
    },
    {
      name: 'type',
      title: 'Category',
      validation: Rule => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      validation: Rule => Rule.required(),
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
};
