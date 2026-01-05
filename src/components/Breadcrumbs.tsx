import Link from 'next/link';

type Breadcrumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Fil d'ariane" className="text-xs uppercase tracking-[0.2em] text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
            {index < items.length - 1 ? <span className="text-white/40">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
