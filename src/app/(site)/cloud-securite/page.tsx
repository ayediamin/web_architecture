import { Container } from '@/components/Container';
import { CardsGrid } from '@/components/CardsGrid';
import { site } from '@/lib/content';

export default function CloudSecurityPage() {
  const highlights = site.services.filter((service) => ['cloud', 'securite'].includes(service.slug));

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-white">Cloud & Sécurité</h1>
        <p className="mt-3 text-white/70">
          Une approche unifiée pour moderniser vos infrastructures, sécuriser les accès et automatiser la
          conformité.
        </p>
      </Container>
      <CardsGrid
        title="Nos expertises Cloud & Sécurité"
        items={highlights.map((service) => ({
          title: service.title,
          excerpt: service.excerpt,
          image: service.image,
          href: `/services/${service.slug}`,
        }))}
      />
      <Container>
        <div className="rounded-3xl border border-white/10 bg-slateblue/40 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-white">Pourquoi Architecture Logique ?</h2>
          <p className="mt-3 text-white/70">
            Nous combinons architecture cloud, gouvernance et automatisation DevSecOps pour livrer des
            plateformes résilientes, maîtrisées et alignées aux exigences réglementaires.
          </p>
        </div>
      </Container>
    </div>
  );
}
