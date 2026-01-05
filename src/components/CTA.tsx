import Link from 'next/link';
import { site } from '@/lib/content';
import { Container } from './Container';

export function CTA() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-3xl border border-accent/30 bg-gradient-to-r from-slateblue/60 to-midnight/60 p-10 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">{site.cta.title}</h2>
              <p className="mt-3 text-white/70">{site.cta.subtitle}</p>
            </div>
            <Link
              href={site.cta.button.href}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-midnight transition hover:brightness-110"
            >
              {site.cta.button.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
