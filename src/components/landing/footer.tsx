'use client';
import { Logo } from './logo';
import React from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="w-full border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p>&copy; {currentYear} OrbytLynx Team. All rights reserved.</p>
            <a href="mailto:hello@orbytlynx.com" className="hover:text-primary">hello@orbytlynx.com</a>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <p className="max-w-xs text-sm italic text-muted-foreground">
              <strong>P.S.</strong> Remember, most of your competitors are still relying on inconsistent referrals while the top players are building systematic outreach engines. The companies that adapt first will dominate their markets.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
