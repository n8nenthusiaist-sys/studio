import { Button } from '@/components/ui/button';
import { Logo } from '@/components/landing/logo';

export function Navbar() {
  const navLinks = [
    { name: 'Results', href: '#results' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#benefits' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <a href="https://calendly.com/n8nenthusiaist/30min" target="_blank" rel="noopener noreferrer">Schedule Free Discovery Call</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
