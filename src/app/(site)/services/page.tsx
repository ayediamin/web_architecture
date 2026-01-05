import { CardsGrid } from '@/components/CardsGrid';
import { Container } from '@/components/Container';
import { site } from '@/lib/content';

export default function ServicesPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-white">Services</h1>
        <p className="mt-3 text-white/70">
          Un accompagnement complet pour cadrer vos initiatives, sécuriser vos plateformes et transformer
          vos opérations.
        </p>
      </Container>
      <CardsGrid
        title="Nos expertises"
        items={site.services.map((service) => ({
          title: service.title,
          excerpt: service.excerpt,
          image: service.image,
          href: `/services/${service.slug}`,
        }))}
      />
    </div>
  );
}
