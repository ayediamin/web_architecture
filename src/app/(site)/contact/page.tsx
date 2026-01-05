import { Container } from '@/components/Container';
import { site } from '@/lib/content';

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-white">Contact</h1>
        <p className="mt-3 text-white/70">
          Parlons de vos objectifs et de la façon dont Architecture Logique peut vous accompagner.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
          <form className="space-y-5 rounded-3xl border border-white/10 bg-slateblue/30 p-8 shadow-soft">
            <div>
              <label className="text-sm text-white/80" htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-midnight/70 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-sm text-white/80" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-midnight/70 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-sm text-white/80" htmlFor="subject">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-midnight/70 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-sm text-white/80" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-white/10 bg-midnight/70 px-4 py-3 text-sm text-white"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-midnight transition hover:brightness-110"
            >
              Envoyer
            </button>
          </form>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slateblue/40 p-6">
              <h2 className="text-lg font-semibold text-white">Coordonnées</h2>
              <p className="mt-3 text-sm text-white/70">{site.contact.location}</p>
              <p className="text-sm text-white/70">{site.contact.phone}</p>
              <p className="text-sm text-white/70">{site.contact.email}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slateblue/40 p-6">
              <h2 className="text-lg font-semibold text-white">Disponibilité</h2>
              <p className="mt-3 text-sm text-white/70">
                Nous répondons sous 24 à 48 heures ouvrables pour planifier un échange.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
