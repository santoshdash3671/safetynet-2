# Sanity CMS & Automated SEO Blog Playbook (Replication Guide)

This guide documents the end-to-end architecture, implementation steps, bug fixes, and automation workflows implemented for **Sharon Safety Nets Hyderabad**. Follow this playbook to replicate the exact same high-ranking SEO blog and Sanity CMS setup for any new website (such as a **Bangalore-based Safety Nets** website).

---

## Architecture Overview

```
                      ┌──────────────────────────────────────┐
                      │          Sanity CMS Cloud            │
                      │  (Project: ID, Dataset: production)  │
                      └──────────────────┬───────────────────┘
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 │                                               │
                 ▼                                               ▼
     ┌──────────────────────┐                       ┌──────────────────────┐
     │  Next.js App Router  │                       │  Automated Publisher │
     │  - /updates (Feed)   │                       │  - Seeding Scripts   │
     │  - /updates/[slug]   │                       │  - Daily Cron Job    │
     │  - /sitemap.xml      │                       │  - GitHub Actions    │
     └──────────────────────┘                       └──────────────────────┘
```

---

## Step 1: Initialize Sanity CMS in Next.js

1. In the project root, run:
   ```bash
   npx sanity init --env
   ```
   * Choose: **Embedded Studio** (`/studio`).
   * Select: **Clean project** (or Blog schema).
   * Confirm configuration files generation.

2. Verify or create the `post` document schema in `src/sanity/schemas/postType.ts`:
   ```ts
   import { defineField, defineType } from 'sanity'

   export const postType = defineType({
     name: 'post',
     title: 'Blog Post (Updates)',
     type: 'document',
     fields: [
       defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required(),
       }),
       defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: { source: 'title', maxLength: 96 },
         validation: (Rule) => Rule.required(),
       }),
       defineField({
         name: 'mainImage',
         title: 'Main image',
         type: 'image',
         options: { hotspot: true },
       }),
       defineField({
         name: 'publishedAt',
         title: 'Published at',
         type: 'datetime',
         initialValue: () => new Date().toISOString(),
       }),
       defineField({
         name: 'excerpt',
         title: 'Excerpt',
         type: 'text',
         rows: 4,
       }),
       defineField({
         name: 'body',
         title: 'Body',
         type: 'array',
         of: [{ type: 'block' }, { type: 'image' }],
       }),
     ],
   })
   ```

---

## Step 2: Critical Next.js & Vercel Configuration (Avoid Common Gotchas)

### 1. Robust Fallback in `src/sanity/env.ts`
> **Critical Issue:** `.env.local` is in `.gitignore`. When deployed to Vercel, `process.env.NEXT_PUBLIC_SANITY_PROJECT_ID` is `undefined`, causing standard `assertValue` checks to crash and return an empty blog list on production!

**The Solution:** Add hardcoded fallbacks to your Sanity project ID and dataset:
```ts
// src/sanity/env.ts
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_SANITY_PROJECT_ID'
```

### 2. Bypass Next.js Stale Data Cache in `src/lib/sanity.queries.ts`
> **Critical Issue:** Next.js caches server-side `client.fetch`. If the site compiles when the dataset is empty, it caches the empty list forever!

**The Solution:** Pass `{ next: { revalidate: 0 }, cache: 'no-store' }`:
```ts
// src/lib/sanity.queries.ts
import { client } from "@/sanity/client";

export const getPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt
}`;

export const getPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  body
}`;

export async function getAllPosts() {
  if (!client) return [];
  try {
    return await client.fetch(
      getPostsQuery,
      {},
      { next: { revalidate: 0 }, cache: 'no-store' }
    );
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  if (!client) return null;
  try {
    return await client.fetch(
      getPostBySlugQuery,
      { slug },
      { next: { revalidate: 0 }, cache: 'no-store' }
    );
  } catch (error) {
    console.error(`Failed to fetch post for slug ${slug}:`, error);
    return null;
  }
}
```

### 3. Next.js 15+ Async Route Parameters in `src/app/updates/[slug]/page.tsx`
> **Critical Issue:** In Next.js 15+, `params` is a Promise. Synchronously reading `params.slug` returns `undefined`, triggering `notFound()`.

**The Solution:**
```tsx
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  ...
}

export default async function SingleUpdatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  ...
}
```

---

## Step 3: Frontend Typography & PortableText (Preventing the "Generic Wall of Text")

Tailwind v4's preflight reset strips margins, weights, and sizes from `<h2>`, `<h3>`, `<ul>`, and `<li>`. Without custom components, blog bodies look like an unstyled, single-paragraph wall of text.

### Implementation:
Create custom `PortableTextComponents` in `src/app/updates/[slug]/page.tsx`:
```tsx
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { CheckCircle2 } from "lucide-react";

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <div className="mt-12 mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight flex items-start gap-3">
          <span className="w-2 h-8 rounded-full bg-[var(--color-brand-primary)] flex-shrink-0 mt-1"></span>
          <span>{children}</span>
        </h2>
      </div>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4 tracking-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 font-normal">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-4 my-6 pl-2 list-none">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3.5 text-base sm:text-lg text-gray-700 leading-relaxed">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-[var(--color-brand-primary)] flex-shrink-0 mt-1">
          <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-primary)]" />
        </span>
        <span className="flex-1 font-medium text-gray-800">{children}</span>
      </li>
    ),
  },
};
```

---

## Step 4: Asset Pipeline & Dynamic Images

1. Always use `urlFor` from `@/sanity/lib/image` instead of hardcoding CDN URLs:
   ```tsx
   import { urlFor } from "@/sanity/lib/image";

   {post.mainImage?.asset && (
     <img 
       src={urlFor(post.mainImage).width(1200).height(675).fit('crop').url()} 
       alt={post.title} 
       className="w-full h-full object-cover"
     />
   )}
   ```
2. Upload image assets via Node script directly to Sanity's asset store:
   ```js
   const asset = await client.assets.upload('image', fs.createReadStream(imagePath), {
     filename: path.basename(imagePath),
   });
   const mainImage = {
     _type: 'image',
     asset: { _type: 'reference', _ref: asset._id },
   };
   ```

---

## Step 5: Bangalore-Specific Content Strategy

When replicating for a **Bangalore** safety net business, adapt keywords and topics:

### 1. Key High-Intent Bangalore Localities:
* **Tech Corridors & High-Rises:** Whitefield, Electronic City, Bellandur, Sarjapur Road, Outer Ring Road (ORR), Marathahalli, Mahadevapura.
* **Premium Central & East Suburbs:** Indiranagar, Koramangala, HSR Layout, BTM Layout, Domlur.
* **North Bangalore & Airport Belt:** Hebbal, Yelahanka, Thanisandra, Manyata Tech Park, Jakkur, Hennur.
* **South & West Suburbs:** Jayanagar, JP Nagar, Banashankari, Rajajinagar, Malleshwaram, Bannerghatta Road.

### 2. Major Apartment Builders to Reference for RWA Bylaws:
* Prestige Group (e.g., Prestige Shantiniketan, Prestige Lakeside Habitat, Prestige Falcon City)
* Sobha Ltd (e.g., Sobha Dream Acres, Sobha Silicon Oasis)
* Brigade Group (e.g., Brigade Metropolis, Brigade Gateway)
* Godrej Properties, Salarpuria Sattva, Puravankara

### 3. Regional Problem Angles:
* Heavy pigeon nesting around Balconies and AC compressors during Bangalore monsoon/winter.
* Fall protection for children on 30+ floor towers in Electronic City and Whitefield.
* Monkey menace netting in greenery-adjacent areas (Bannerghatta, Kanakapura Road, Yelahanka).

---

## Step 6: 45-Day Backdated Seeding Engine

### Rules Enforced:
1. **Strictly 1 post per day** backdated over the last 1.5 months (e.g., Day 1: Aug 13 to Day 45: Sep 26).
2. **Strictly NO em dashes (`—`) or en dashes (`–`)**:
   ```js
   function sanitizeText(str) {
     if (!str) return '';
     let cleaned = str.replace(/[\u2014]/g, ' - ').replace(/[\u2013]/g, ' - ');
     cleaned = cleaned.replace(/\s+-\s+/g, ' - ');
     if (/[\u2013\u2014]/.test(cleaned)) {
       throw new Error(`En/em dash detected: ${cleaned}`);
     }
     return cleaned;
   }
   ```
3. **1,200+ Word Comprehensive Post Structure:**
   * Architectural & High-Rise Context
   * Material Science (100% Virgin Garware Polyamide Nylon vs Recycled PP; 316 Marine Stainless Steel for Invisible Grills)
   * Transparent Local Pricing & Rate Card (Per sq. ft. breakdown)
   * 5-Step Certified Engineering Installation Methodology
   * Local Gated Community RWA Bylaw Compliance
   * Frequently Asked Questions (FAQ)
   * Direct Local Phone & WhatsApp Call-to-Action

---

## Step 7: Ongoing Automated Daily Publishing (GitHub Action)

Create `.github/workflows/daily-blog.yml` in the target repository:
```yaml
name: Daily Automated Blog Post

on:
  schedule:
    # 03:30 UTC = 09:00 AM IST every day
    - cron: '30 3 * * *'
  workflow_dispatch:

jobs:
  publish-post:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - name: Run daily publisher
        env:
          NEXT_PUBLIC_SANITY_PROJECT_ID: ${{ secrets.NEXT_PUBLIC_SANITY_PROJECT_ID }}
          NEXT_PUBLIC_SANITY_DATASET: ${{ secrets.NEXT_PUBLIC_SANITY_DATASET || 'production' }}
          SANITY_API_TOKEN: ${{ secrets.SANITY_API_TOKEN }}
        run: node scripts/auto-publish-daily.mjs
```

---

## Step 8: Vercel Hobby Plan Author Requirement

When pushing from Git, Vercel Hobby accounts block deployments if the commit author does not match the Vercel owner:
```bash
git config user.name "YourVercelUsername"
git config user.email "YourVercelEmail@gmail.com"
git commit --amend --reset-author --no-edit
git push --force origin main
```
