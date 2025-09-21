import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Database,
  Mail,
  Server,
  FileText,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Strategic Lead Generation & Database Intelligence',
    description: 'We build hyper-targeted lead lists based on your ideal client profile. No more wasting time on unqualified prospects.',
    features: [
      'Ideal Client Profile (ICP) workshop',
      'Access to premium B2B data sources',
      'List building, cleaning, and verification',
    ],
  },
  {
    icon: Mail,
    title: 'Cold Email & LinkedIn Campaign Management',
    description: 'We manage your outreach campaigns from start to finish, ensuring consistent and professional communication.',
    features: [
      'Multi-channel outreach (Email & LinkedIn)',
      'A/B testing of copy, subject lines, and CTAs',
      'Daily campaign monitoring and optimization',
    ],
  },
  {
    icon: Server,
    title: 'Email Infrastructure Setup & Management',
    description: 'Protect your main domain and ensure high deliverability with a dedicated outreach infrastructure.',
    features: [
      'New domain procurement and warm-up',
      'SPF, DKIM, DMARC record setup',
      'Ongoing deliverability monitoring and management',
    ],
  },
  {
    icon: FileText,
    title: 'Ultra-Personalized Email Copywriting',
    description: 'Our team writes compelling, personalized copy that gets replies by focusing on your prospects\' pain points.',
    features: [
      'Value proposition-focused copywriting',
      'Personalization at scale',
      'Follow-up sequences that build relationships',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Response Management & Call Booking',
    description: 'We use AI to manage positive replies, handle objections, and book qualified meetings directly into your calendar.',
    features: [
      '24/7 inbox monitoring',
      'AI-assisted response handling',
      'Seamless calendar integration for call booking',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="w-full bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Cold Outreach Services - What We Actually Do
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            We provide a complete, done-for-you system to generate a predictable stream of high-quality leads for your B2B business.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6">
          {services.map((service, index) => (
            <Card key={index} className="animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What you get</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {service.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
