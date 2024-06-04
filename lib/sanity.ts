import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "y4g0alc0",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

/**
 * Generates a URL for the provided image source.
 * @param source - The image source to generate the URL for.
 * @returns The URL for the image source.
 */
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
