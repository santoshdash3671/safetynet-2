import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { Calendar, Phone, MessageCircle, ArrowLeft, CheckCircle2 } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/sanity/client";
import { SERVICES } from "@/lib/data/services";
import { ZONES, localitiesByZone } from "@/lib/data/localities";
import { siteConfig, telLink, whatsappLink } from "@/lib/data/siteConfig";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/updates/${slug}` },
  };
}

const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display mt-10 mb-4 text-2xl font-semibold text-ink">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display mt-8 mb-3 text-xl font-semibold text-ink">{children}</h3>
    ),
    normal: ({ children }) => <p className="mb-5 text-base leading-8 text-ink/75">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 rounded-r-md border-l-4 border-terracotta bg-cream-dim py-3 pl-5 pr-4 italic text-ink/75">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="my-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-5">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2.5 text-ink/75">
        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-forest" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="text-ink/75">{children}</li>,
  },
};

export default async function UpdatePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const waMessage = `Hi, I read your update "${post.title}" and would like a free quote.`;

  return (
    <div>
      <section className="bg-forest text-cream">
        <div className="container-wide py-12 md:py-16">
          <Link href="/updates" className="inline-flex items-center gap-1.5 text-sm text-cream/70 hover:text-cream">
            <ArrowLeft className="h-4 w-4" /> Back to updates
          </Link>
          <div className="mt-5 flex items-center gap-3">
            <span className="tag-chip bg-cream/10 text-gold">{post.category}</span>
            <span className="flex items-center gap-1.5 text-xs text-cream/60">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-display mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            {post.title}
          </h1>
          {post.excerpt && <p className="mt-3 max-w-2xl text-sm text-cream/75">{post.excerpt}</p>}
        </div>
      </section>

      {post.mainImage && (
        <div className="container-wide -mt-8 relative z-10">
          <div className="relative h-64 overflow-hidden rounded-md border-4 border-cream shadow-xl sm:h-96">
            <Image
              src={urlFor(post.mainImage).width(1400).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <section className="section-pad bg-cream">
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <article className="card-notch p-6 sm:p-10">
            {post.body ? (
              <PortableText value={post.body as never} components={ptComponents} />
            ) : (
              <p className="py-10 text-center italic text-ink/40">Content coming soon.</p>
            )}
          </article>

          <aside className="space-y-6">
            <div className="rounded-md bg-forest p-5 text-cream shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">Free consultation</p>
              <p className="font-display mt-2 text-lg font-semibold">Get a free site visit</p>
              <p className="mt-2 text-sm text-cream/70">
                Available across all {siteConfig.stats.localities} localities in Bangalore.
              </p>
              <a href={telLink()} className="btn btn-terracotta mt-4 w-full">
                <Phone className="h-4 w-4" /> Call {siteConfig.phoneDisplay}
              </a>
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mt-2.5 w-full"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            <div className="card-notch p-5">
              <p className="text-sm font-semibold text-ink">Our services</p>
              <ul className="mt-3 space-y-2">
                {SERVICES.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-sm text-ink/70 hover:text-forest">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-notch p-5">
              <p className="text-sm font-semibold text-ink">Zones we cover</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ZONES.map((z) => (
                  <Link
                    key={z.key}
                    href={`/areas`}
                    className="tag-chip bg-cream-dim text-ink/70 hover:bg-forest hover:text-cream"
                  >
                    {z.label} ({localitiesByZone(z.key).length})
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
