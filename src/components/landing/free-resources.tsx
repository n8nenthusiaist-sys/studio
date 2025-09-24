import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const resources = [
  {
    category: 'GUIDE',
    title: 'The Ultimate Guide to Cold Email Outreach',
    description: 'Learn how to write effective cold emails that get responses and book meetings.',
    imageId: 'resource-guide-1',
    link: '#',
  },
  {
    category: 'TEMPLATES',
    title: 'High-Converting Sales Script Templates',
    description: 'A collection of proven sales scripts for various B2B industries and scenarios.',
    imageId: 'resource-template-1',
    link: '#',
  },
  {
    category: 'PLAYBOOK',
    title: 'The B2B Lead Generation Playbook',
    description: 'A step-by-step playbook for building a predictable lead generation machine.',
    imageId: 'resource-playbook-1',
    link: '#',
  },
  {
    category: 'CHECKLIST',
    title: 'Campaign Launch Checklist',
    description: 'Ensure every outbound campaign is set up for success with this comprehensive checklist.',
    imageId: 'resource-checklist-1',
    link: '#',
  },
  {
    category: 'GUIDE',
    title: 'LinkedIn Prospecting: The Definitive Guide',
    description: 'Master the art of finding and engaging with your ideal clients on LinkedIn.',
    imageId: 'resource-guide-2',
    link: '#',
  },
  {
    category: 'AUTOMATION',
    title: 'Create an automation in under 5 minutes that sends 100 personalized LinkedIn connects while you sleep (weekly)',
    description: 'This video will show you how to automate your LinkedIn outreach to save time and book more meetings.',
    imageId: 'resource-template-2',
    link: 'https://www.loom.com/share/3aee1324234b4379941ae000d7783ac5?sid=11b09372-0124-406f-bcc6-787004accfc5'
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
                  <Button variant="link" className="mt-4 px-0" asChild>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.link.includes('loom') || resource.link.includes('youtu') ? 'Watch Now' : 'Read Now'} &rarr;
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 rounded-lg bg-card p-8 text-center shadow-xl">
            <h3 className="font-headline text-2xl font-bold">Request a Resource</h3>
            <p className="mt-2 text-muted-foreground">
                Can't find what you're looking for? Let us know what resource you'd like to see next.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <Input type="text" placeholder="e.g., A guide to social media marketing" className="bg-background" />
                <Button type="submit" className="w-full sm:w-auto">Request</Button>
            </form>
        </div>
      </div>
    </section>
  );
}
