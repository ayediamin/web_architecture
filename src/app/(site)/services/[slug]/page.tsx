import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Container } from '@/components/Container';
import { getServiceBySlug, getServices } from '@/lib/content';

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-16">
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]}
        />
        <h1 className="mt-4 text-3xl font-semibold text-white">{service.title}</h1>
        <p className="mt-3 text-white/70">{service.excerpt}</p>
        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-3xl border border-white/10 shadow-soft">
          <Image src={service.image} alt={service.title} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {service.sections?.map((section) => (
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
