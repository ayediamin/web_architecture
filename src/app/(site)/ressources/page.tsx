import { CardsGrid } from '@/components/CardsGrid';
import { Container } from '@/components/Container';
import { site } from '@/lib/content';

export default function ResourcesPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-white">Ressources</h1>
        <p className="mt-3 text-white/70">
          Des guides et checklists courts pour accélérer vos prises de décision.
        </p>
      </Container>
      <CardsGrid
        title="Articles récents"
        items={site.resources.map((resource) => ({
          title: resource.title,
          excerpt: resource.excerpt,
          image: resource.image,
          href: `/ressources/${resource.slug}`,
          meta: new Date(resource.date ?? '').toLocaleDateString('fr-CA'),
        }))}
      />
    </div>
  );
}
