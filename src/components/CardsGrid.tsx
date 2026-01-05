import Image from 'next/image';
import Link from 'next/link';

type CardsGridProps = {
  title: string;
  description?: string;
  items: {
    title: string;
    excerpt: string;
    image: string;
    href: string;
    meta?: string;
  }[];
};

export function CardsGrid({ title, description, items }: CardsGridProps) {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            {description ? <p className="mt-2 text-white/70">{description}</p> : null}
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slateblue/30 shadow-soft transition hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex h-full flex-col gap-3 p-6">
                {item.meta ? <span className="text-xs uppercase tracking-[0.2em] text-accent/80">{item.meta}</span> : null}
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/70">{item.excerpt}</p>
                <span className="mt-auto text-sm font-semibold text-accent transition group-hover:translate-x-1">
                  Découvrir →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
