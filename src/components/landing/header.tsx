
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
            Fill Your Sales Pipeline with High-Value B2B Clients Through Laser-Targeted Outbound Prospecting
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Without Having To Rely On Unpredictable Referrals or Inconsistent Inbound Leads
          </p>
          <ClientHeader />
        </div>
        <div id="loom-video" className="relative mt-12 w-full max-w-4xl aspect-video">
          <iframe
            src="https://www.loom.com/embed/6ec4c92ec0224256ba814b2528fff751"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg border shadow-2xl absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
