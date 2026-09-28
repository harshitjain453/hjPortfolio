import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = process.env.REACT_APP_SANITY_PROJECT_ID ? createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-04-10',
  useCdn: true,
}) : null;

const builder = client ? imageUrlBuilder(client) : null;

export const urlFor = (source) => builder.image(source);