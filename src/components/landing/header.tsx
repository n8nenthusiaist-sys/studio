import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section
      id="header"
      className="relative w-full overflow-hidden bg-card py-20 md:py-32"
    >
      <div className="container z-10 grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left">
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
            For B2B Service Companies... How To Get An Extra 5 High-Value Clients Every 90 Days Through Laser Targeted Outbound Prospecting Campaigns
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Without Having To Rely On Unpredictable Referrals
          </p>
          <Button size="lg" asChild>
            <a href="#cta">Schedule Free Discovery Call</a>
          </Button>
        </div>
        <div className="relative flex items-center justify-center">
          {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-lg border object-cover shadow-2xl"
                data-ai-hint={heroImage.imageHint}
             />
          )}
        </div>
      </div>
    </section>
  );
}
