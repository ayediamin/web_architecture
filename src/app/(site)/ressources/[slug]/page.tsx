import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Container } from '@/components/Container';
import { getResourceBySlug, getResources } from '@/lib/content';

export function generateStaticParams() {
  return getResources().map((resource) => ({ slug: resource.slug }));
}

export default function ResourceDetailPage({ params }: { params: { slug: string } }) {
  const resource = getResourceBySlug(params.slug);

  if (!resource) {
    notFound();
  }

  return (
    <div className="py-16">
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Ressources', href: '/ressources' },
            { label: resource.title },
          ]}
        />
        <div className="mt-4 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-accent/80">
            {new Date(resource.date ?? '').toLocaleDateString('fr-CA')}
          </p>
          <h1 className="text-3xl font-semibold text-white">{resource.title}</h1>
          <p className="text-white/70">{resource.excerpt}</p>
        </div>
        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-3xl border border-white/10 shadow-soft">
          <Image src={resource.image} alt={resource.title} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-slateblue/30 p-6 text-white/80">
          {resource.content}
        </div>
      </Container>
    </div>
  );
}
