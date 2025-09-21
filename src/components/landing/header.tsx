import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <section
      id="header"
      className="relative w-full overflow-hidden bg-card py-20 md:py-32"
    >
      <div className="container z-10 mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
            For Accounting Firms... How To Get An Extra 5 High-Value Clients Every 90 Days Through Laser Targeted Outbound Prospecting Campaigns
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Without Having To Rely On Unpredictable Referrals
          </p>
          <Button size="sm" asChild>
            <a href="https://calendly.com/n8nenthusiaist/30min" target="_blank" rel="noopener noreferrer">
              Book a Free Discovery Call
            </a>
          </Button>
        </div>
        <div className="relative mt-12 h-auto w-full max-w-4xl">
          <Image
            src="https://images.ui8.net/uploads/features-page-8_1748066539881.jpg"
            alt="AI-powered sales outreach dashboard"
            width={1200}
            height={800}
            className="rounded-lg border object-cover shadow-2xl"
            data-ai-hint="dashboard analytics"
            priority
          />
        </div>
      </div>
    </section>
  );
}
