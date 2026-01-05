import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Container } from '@/components/Container';
import { getSolutionBySlug, getSolutions } from '@/lib/content';

export function generateStaticParams() {
  return getSolutions().map((solution) => ({ slug: solution.slug }));
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="py-16">
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: solution.title },
          ]}
        />
        <h1 className="mt-4 text-3xl font-semibold text-white">{solution.title}</h1>
        <p className="mt-3 text-white/70">{solution.excerpt}</p>
        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-3xl border border-white/10 shadow-soft">
          <Image src={solution.image} alt={solution.title} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {solution.sections?.map((section) => (
            <div key={section.title} className="rounded-2xl border border-white/10 bg-slateblue/40 p-6">
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-sm text-white/70">{section.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
