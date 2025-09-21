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
    text: 'CEO, Founder, or Owner of a B2B service company.',
  },
  {
    icon: Calendar,
    text: 'Looking for a predictable and consistent way to acquire new clients.',
  },
  {
    icon: Handshake,
    text: 'Currently relying on referrals and networking, which are inconsistent.',
  },
  {
    icon: TrendingUp,
    text: 'Experiencing unpredictable revenue streams ("revenue rollercoaster").',
  },
  {
    icon: Award,
    text: 'Want to attract premium clients who see the value in their services.',
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
            Our outbound prospecting campaigns are designed for a specific type of B2B service company. See if you fit the profile.
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
