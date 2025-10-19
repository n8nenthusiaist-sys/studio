
import { Button } from '@/components/ui/button';
import { ClientHeader } from './client-header';

export function Header() {
  return (
    <section
      id="header"
      className="relative w-full overflow-hidden bg-card py-20 md:py-32"
    >
      <div className="container z-10 mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Predictably Land 5 New B2B Clients in 90 Days Through Done-For-You, AI-Enhanced Prospecting
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Fill Your Calendar with Qualified B2B Leads Through AI-Enhanced Outbound Automation — Gain the Competitive Edge That Manual Prospecting Can’t Deliver
          </p>
          <ClientHeader />
        </div>
        <div id="loom-video" className="relative mt-12 w-full max-w-4xl aspect-video">
          <iframe
            src="https://www.loom.com/embed/10c44262fd2b4d75a69a9229e7c97a3f"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg border shadow-2xl absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
