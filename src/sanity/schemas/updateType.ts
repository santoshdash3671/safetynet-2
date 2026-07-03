import { defineField, defineType } from "sanity";

export const updateType = defineType({
  name: "update",
  title: "Blog Update",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alternative text" }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Locality Guide", value: "Locality Guide" },
          { title: "Safety Guide", value: "Safety Guide" },
          { title: "Company News", value: "Company News" },
        ],
      },
      initialValue: "Safety Guide",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "Used on the updates listing page",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      group: "seo",
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description: "Optimal length: 50-60 chars",
          validation: (Rule) => Rule.max(60).warning("Longer titles may be truncated by search engines"),
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          description: "Optimal length: 150-160 chars",
          validation: (Rule) => Rule.max(160).warning("Longer descriptions may be truncated"),
        },
        {
          name: "keywords",
          title: "Target Keywords",
          type: "array",
          of: [{ type: "string" }],
          options: { layout: "tags" },
        },
        {
          name: "ogImage",
          title: "Social Sharing Image (Open Graph)",
          type: "image",
          description: "Recommended dimension: 1200x630. Defaults to Main Image if empty.",
        },
        {
          name: "canonicalUrl",
          title: "Canonical URL",
          type: "url",
        },
      ],
    }),
  ],
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
});
