import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '../ui/input';

const resources = [
  {
    category: 'AUTOMATION',
    title: 'Free Automation: 100 Weekly Personalised Connects',
    description: 'This video will show you how to automate your LinkedIn outreach to save time and book more meetings.',
    imageId: 'resource-template-2',
    link: 'https://www.loom.com/share/3aee1324234b4379941ae000d7783ac5?sid=11b09372-0124-406f-bcc6-787004accfc5'
  },
  {
    category: 'TUTORIAL',
    title: 'Build a Cold Outreach System in Under 10 Minutes',
    description: 'Watch a step-by-step tutorial on how to set up the technical infrastructure for a successful cold outreach campaign.',
    imageId: 'resource-guide-1',
    link: 'https://www.loom.com/share/849c8b72d5ab46e1a50f492c633687b6',
  },
  {
    category: 'TEMPLATES',
    title: 'High-Converting Sales Script Templates',
    description: 'A collection of proven sales scripts for various B2B industries and scenarios. (Still in the making)',
    imageId: 'resource-template-1',
    link: '#',
  },
  {
    category: 'PLAYBOOK',
    title: 'The B2B Lead Generation Playbook',
    description: 'A step-by-step playbook for building a predictable lead generation machine. (Still in the making)',
    imageId: 'resource-playbook-1',
    link: '#',
  },
  {
    category: 'CHECKLIST',
    title: 'Campaign Launch Checklist',
    description: 'Ensure every outbound campaign is set up for success with this comprehensive checklist. (Still in the making)',
    imageId: 'resource-checklist-1',
    link: '#',
  },
  {
    category: 'GUIDE',
    title: 'LinkedIn Prospecting: The Definitive Guide',
    description: 'Master the art of finding and engaging with your ideal clients on LinkedIn. (Still in the making)',
    imageId: 'resource-guide-2',
    link: '#',
  },
];

const getImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id);
}

export function FreeResources() {
  return (
    <section id="resources" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Free Resources
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Get free access to our library of resources to help you get more customers & scale your B2B company.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const imageData = getImage(resource.imageId);
            const isComingSoon = resource.link === '#';
            return (
              <Card key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
                {imageData && (
                    <div className="relative h-56 w-full">
                        <Image
                            src={imageData.imageUrl}
                            alt={resource.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            data-ai-hint={imageData.imageHint}
                        />
                    </div>
                )}
                <CardContent className="p-6">
                  <Badge variant="default" className="mb-2 bg-primary text-primary-foreground">{resource.category}</Badge>
                  <h3 className="font-headline text-xl font-bold">{resource.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{resource.description}</p>
                  <Button variant="link" className="mt-4 px-0" asChild disabled={isComingSoon}>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {isComingSoon ? 'Coming Soon' : (resource.link.includes('loom') || resource.link.includes('youtu') ? 'Watch Now' : 'Read Now')} &rarr;
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20">
          <Card className="bg-card shadow-xl">
            <CardHeader>
              <CardTitle>Request a Resource</CardTitle>
              <CardDescription>
                Have an idea for a resource you'd like to see? Let us know!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4 sm:flex-row">
                <Input
                  type="text"
                  placeholder="e.g., A guide to A/B testing email copy"
                  className="flex-grow bg-background"
                />
                <Button type="submit">Submit Request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
