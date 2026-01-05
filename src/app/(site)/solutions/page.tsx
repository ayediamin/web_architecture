import { CardsGrid } from '@/components/CardsGrid';
import { Container } from '@/components/Container';
import { site } from '@/lib/content';

export default function SolutionsPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-white">Solutions</h1>
        <p className="mt-3 text-white/70">
          Des trajectoires concrètes pour moderniser vos systèmes, sécuriser les livraisons et fiabiliser
          vos opérations.
        </p>
      </Container>
      <CardsGrid
        title="Axes de transformation"
        items={site.solutions.map((solution) => ({
          title: solution.title,
          excerpt: solution.excerpt,
          image: solution.image,
          href: `/solutions/${solution.slug}`,
        }))}
      />
    </div>
  );
}
