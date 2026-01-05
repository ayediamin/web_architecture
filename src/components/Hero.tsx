import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/content';
import { Container } from './Container';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-midnight via-slateblue/70 to-midnight py-16">
      <Container className="grid items-center gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Architecture Logique</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            {site.hero.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{site.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={site.hero.primaryCta.href}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-midnight transition hover:brightness-110"
            >
              {site.hero.primaryCta.label}
            </Link>
            <Link
              href={site.hero.secondaryCta.href}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              {site.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="relative min-h-[260px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-soft">
          <Image
            src={site.hero.image}
            alt="Equipe Architecture Logique"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
