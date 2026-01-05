import { Container } from '@/components/Container';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-white">Politique de confidentialité</h1>
        <div className="mt-6 space-y-4 text-sm text-white/70">
          <p>
            Architecture Logique collecte uniquement les informations nécessaires pour répondre à vos
            demandes de contact. Les données transmises via le formulaire sont utilisées exclusivement
            pour vous répondre.
          </p>
          <p>
            Aucune donnée personnelle n'est vendue ou partagée avec des tiers. Vous pouvez demander la
            suppression de vos informations en écrivant à contact@architecturelogique.ca.
          </p>
          <p>
            Ce site n'utilise pas de cookies de suivi marketing. Les journaux techniques sont conservés
            à des fins de sécurité et de performance.
          </p>
        </div>
      </Container>
    </div>
  );
}
