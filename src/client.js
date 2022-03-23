import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "2py3mp2r",
    dataset: "production"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
