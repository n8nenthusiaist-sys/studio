
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
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Without Having To Rely On Unpredictable Referrals
          </p>
          <Button size="sm" asChild>
            <a href="https://calendly.com/n8nenthusiaist/30min" target="_blank" rel="noopener noreferrer">
              Book a Free Discovery Call
            </a>
          </Button>
        </div>
        <div className="relative mt-12 w-full max-w-4xl aspect-video">
          <iframe
            src="https://www.loom.com/embed/7bf2a62603544bcfafa701a348607464"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg border shadow-2xl absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
