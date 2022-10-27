export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: Rule => Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of Dish in ETB',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Dish Image',
    },
  ],
};
