import Link from 'next/link';
import { site } from '@/lib/content';
import { Container } from './Container';

export function Header() {
  return (
    <header className="border-b border-white/10 bg-midnight/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          {site.site.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-midnight"
        >
          Contact
        </Link>
      </Container>
    </header>
  );
}
