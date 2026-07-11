interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({
  items,
  title = "Common questions",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <div className="divide-y divide-line">
      {title && (
        <h2 className="font-display pb-4 text-2xl font-semibold text-ink">{title}</h2>
      )}
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink marker:content-none">
            {item.q}
            <span className="shrink-0 text-lg text-terracotta transition-transform duration-200 group-open:rotate-45">+</span>
          </summary>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
