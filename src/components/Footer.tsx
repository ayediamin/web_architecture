import Link from 'next/link';
import { site } from '@/lib/content';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slateblue/40">
      <Container className="grid gap-10 py-12 md:grid-cols-[2fr,1fr,1fr]">
        <div>
          <p className="text-lg font-semibold text-white">{site.site.name}</p>
          <p className="mt-3 text-sm text-white/70">{site.site.description}</p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <p>{site.contact.location}</p>
            <p>{site.contact.phone}</p>
            <p>{site.contact.email}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Ressources</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/ressources" className="transition hover:text-white">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentialite" className="transition hover:text-white">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.site.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
