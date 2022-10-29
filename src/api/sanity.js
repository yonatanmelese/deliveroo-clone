import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
});
const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);

export default client;
