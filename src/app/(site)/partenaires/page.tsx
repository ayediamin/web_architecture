import Image from 'next/image';
import { Container } from '@/components/Container';
import { site } from '@/lib/content';

export default function PartnersPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-white">Partenaires</h1>
        <p className="mt-3 text-white/70">
          Nous collaborons avec des partenaires sélectionnés pour couvrir l'ensemble de la chaîne
          technologique.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {site.partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-6 rounded-3xl border border-white/10 bg-slateblue/40 p-6"
            >
              <Image src={partner.logo} alt={partner.name} width={140} height={60} />
              <div>
                <h2 className="text-lg font-semibold text-white">{partner.name}</h2>
                <p className="text-sm text-white/70">Alliance technologique et expertise partagée.</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
