import { Rocket } from 'lucide-react';

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <Rocket className="h-6 w-6 text-primary" />
      <span className="font-headline text-lg font-semibold text-foreground">
        OrbytLynx Prospect
      </span>
    </a>
  );
}
