import {
  Target,
  Calendar,
  Handshake,
  TrendingUp,
  Award,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const audienceList: { icon: LucideIcon; text: string }[] = [
  {
    icon: Target,
    text: 'You are the Founder, CEO, or Head of Sales at a B2B company (like a SaaS, agency, or consultancy).',
  },
  {
    icon: Calendar,
    text: 'You are looking for a predictable way to book qualified sales meetings and acquire new high-value clients every month.',
  },
  {
    icon: Handshake,
    text: "You are tired of relying on inconsistent referrals and networking, and you understand it's not a scalable way to grow your business.",
  },
  {
    icon: TrendingUp,
    text: "You are struggling to hit your revenue goals because your sales pipeline is either empty or filled with unqualified leads.",
  },
  {
    icon: Award,
    text: "You're tired of competing on price and want to attract premium clients who value your solution and are willing to pay for it.",
  },
];

export function TargetAudience() {
  return (
    <section id="target-audience" className="w-full bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Who Is This For?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            This is for you if you fit the following profile.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-1">
          {audienceList.map((item, index) => (
            <div key={index} className="flex items-start gap-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
