import { site } from '@/lib/content';
import { Container } from './Container';

export function Stats() {
  return (
    <section className="py-12">
      <Container className="grid gap-6 md:grid-cols-4">
        {site.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-slateblue/40 p-6 text-center shadow-soft"
          >
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
