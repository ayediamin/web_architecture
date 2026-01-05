import Image from 'next/image';
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { CardsGrid } from '@/components/CardsGrid';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { site } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <CardsGrid
        title="Services"
        description="Des expertises complémentaires pour cadrer vos projets et renforcer vos plateformes."
        items={site.services.map((service) => ({
          title: service.title,
          excerpt: service.excerpt,
          image: service.image,
          href: `/services/${service.slug}`,
        }))}
      />
      <CardsGrid
        title="Solutions"
        description="Des trajectoires concrètes pour moderniser, sécuriser et fiabiliser vos environnements."
        items={site.solutions.map((solution) => ({
          title: solution.title,
          excerpt: solution.excerpt,
          image: solution.image,
          href: `/solutions/${solution.slug}`,
        }))}
      />
      <CardsGrid
        title="Ressources & insights"
        description="Guides courts, checklists et recommandations pour passer à l'action."
        items={site.resources.map((resource) => ({
          title: resource.title,
          excerpt: resource.excerpt,
          image: resource.image,
          href: `/ressources/${resource.slug}`,
          meta: new Date(resource.date ?? '').toLocaleDateString('fr-CA'),
        }))}
      />
      <section className="py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Partenaires de confiance</h2>
              <p className="mt-2 text-white/70">
                Nous collaborons avec un écosystème éprouvé pour livrer rapidement les bons résultats.
              </p>
            </div>
            <Link href="/partenaires" className="text-sm font-semibold text-accent">
              Voir nos partenaires
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {site.partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-slateblue/40 p-6"
              >
                <Image src={partner.logo} alt={partner.name} width={160} height={60} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
