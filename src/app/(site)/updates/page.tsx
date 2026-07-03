import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Newspaper } from "lucide-react";
import { getAllPosts } from "@/lib/sanity.queries";
import { urlFor } from "@/sanity/client";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "Updates & Safety Guides",
  description: "Tips, guides and news on safety nets, invisible grills and home safety across Bangalore.",
  alternates: { canonical: "/updates" },
};

export const revalidate = 60;

export default async function UpdatesPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <section className="bg-forest text-cream">
        <div className="container-wide py-14 text-center">
          <div className="tag-chip mx-auto bg-cream/10 text-gold">
            <Newspaper className="h-3.5 w-3.5" /> From the team
          </div>
          <h1 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">
            Updates and safety guides
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/70">
            Practical notes on safety nets, invisible grills and home safety, written for Bangalore
            homes.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide">
          {posts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-display text-xl font-semibold text-ink">Nothing published yet</p>
              <p className="mt-2 text-sm text-ink/60">
                Check back soon, or reach out directly for advice in the meantime.
              </p>
              <a href={`mailto:${siteConfig.email}`} className="btn btn-terracotta mt-5 inline-flex">
                Contact us
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/updates/${post.slug.current}`}
                  className="card-notch group overflow-hidden hover:border-forest hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden bg-cream-dim">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        sizes="(min-width: 1024px) 380px, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-forest/30">
                        <Newspaper className="h-10 w-10" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="mb-2.5 flex items-center gap-2">
                      <span className="tag-chip bg-terracotta/10 text-terracotta">{post.category}</span>
                      <span className="text-xs text-ink/45">
                        {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-forest">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-ink/60">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
