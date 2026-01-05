import Link from 'next/link';
import { Container } from '@/components/Container';

export default function Custom404Page() {
  return (
    <div className="py-24">
      <Container className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Erreur 404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page introuvable</h1>
        <p className="mt-3 text-white/70">
          La page demandée n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-midnight"
        >
          Retour à l'accueil
        </Link>
      </Container>
    </div>
  );
}
