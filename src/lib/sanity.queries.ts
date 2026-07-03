import { client, isSanityConfigured } from "@/sanity/client";

export interface UpdatePost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category: string;
  excerpt: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  body?: unknown;
}

export async function getAllPosts(): Promise<UpdatePost[]> {
  if (!isSanityConfigured) return [];
  return client.fetch(`
    *[_type == "update"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, category, excerpt, mainImage
    }
  `);
}

export async function getPostBySlug(slug: string): Promise<UpdatePost | null> {
  if (!isSanityConfigured) return null;
  return client.fetch(
    `*[_type == "update" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, category, excerpt, body, mainImage
    }`,
    { slug }
  );
}
