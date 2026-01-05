import { Container } from '@/components/Container';
import { site } from '@/lib/content';

export default function AboutPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-white">À propos</h1>
        <p className="mt-4 text-white/70">
          Architecture Logique est un cabinet de conseil basé au Québec qui aide les organisations à
          structurer leurs transformations numériques. Notre équipe combine expertise stratégique,
          intelligence d'affaires, architecture cloud et sécurité pour livrer des résultats concrets.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slateblue/40 p-6">
            <h2 className="text-lg font-semibold text-white">Positionnement</h2>
            <p className="mt-3 text-sm text-white/70">
              {site.site.tagline}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slateblue/40 p-6">
            <h2 className="text-lg font-semibold text-white">Valeur</h2>
            <p className="mt-3 text-sm text-white/70">
              Des plans d'action clairs, des indicateurs mesurables et un accompagnement pragmatique.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slateblue/40 p-6">
            <h2 className="text-lg font-semibold text-white">Présence</h2>
            <p className="mt-3 text-sm text-white/70">{site.contact.location}</p>
            <p className="text-sm text-white/70">{site.contact.email}</p>
            <p className="text-sm text-white/70">{site.contact.phone}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
