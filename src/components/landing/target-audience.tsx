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
    text: 'You are the Managing Partner, Founder, or Owner whose company is part of the Accounting and Tax Advisory space.',
  },
  {
    icon: Calendar,
    text: 'You are looking for a predictable way to get new high-paying clients month after month, not just during tax season.',
  },
  {
    icon: Handshake,
    text: "You are currently relying on referrals & networking events but understand that it's not a predictable way to acquire new clients & makes growing the firm extremely difficult.",
  },
  {
    icon: TrendingUp,
    text: "You wake up in the middle of the night in cold sweats wondering how you'll hit your revenue goals when 82% of your income is concentrated in just 4 months of the year.",
  },
  {
    icon: Award,
    text: "You're tired of taking on unprofitable clients just to fill gaps, when you know there are businesses out there that would gladly pay premium fees for quality accounting services.",
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
