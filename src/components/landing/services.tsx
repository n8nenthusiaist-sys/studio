import {
  Card,
  CardContent,
  CardDescription,
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
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Database,
    title: 'Strategic Lead Generation & Database Intelligence',
    description:
      'We build hyper-targeted lead lists based on your ideal client profile. No more wasting time on unqualified prospects.',
    features: [
      'Ideal Client Profile (ICP) workshop',
      'Access to premium B2B data sources',
      'List building, cleaning, and verification',
    ],
    caseStudy: {
      company: 'Fintech SaaS',
      problem: 'Struggled to reach the right decision-makers (CTOs & VPs of Engineering) and wasted their budget on poor-quality leads.',
      results: 'Built a targeted list of 500+ contacts, achieving a 12.6% response rate.',
      imageHint: 'data analysis',
      imageId: 'case-study-1',
    },
  },
  {
    icon: Mail,
    title: 'Cold Email & LinkedIn Campaign Management',
    description:
      'We manage your outreach campaigns from start to finish, ensuring consistent and professional communication.',
    features: [
      'Multi-channel outreach (Email & LinkedIn)',
      'A/B testing of copy, subject lines, and CTAs',
      'Daily campaign monitoring and optimization',
    ],
    caseStudy: {
      company: 'Creative Agency',
      problem: 'Had difficulty converting leads into meetings and lacked a systematic follow-up process.',
      results: 'Booked 22 new meetings by running parallel LinkedIn and Email campaigns with strategic follow-ups.',
      imageHint: 'social media marketing',
      imageId: 'case-study-2',
    },
  },
  {
    icon: Server,
    title: 'Email Infrastructure Setup & Management',
    description:
      'Protect your main domain and ensure high deliverability with a dedicated outreach infrastructure.',
    features: [
      'New domain procurement and warm-up',
      'SPF, DKIM, DMARC record setup',
      'Ongoing deliverability monitoring and management',
    ],
    caseStudy: {
      company: 'Consulting Firm',
      problem: 'Their emails were landing in spam folders, and they feared their domain reputation was being damaged.',
      results: 'Achieved a 45.5% open rate after we set up and managed their email infrastructure, ensuring high deliverability.',
      imageHint: 'server security',
      imageId: 'case-study-3',
    },
  },
  {
    icon: FileText,
    title: 'Ultra-Personalized Email Copywriting',
    description:
      "Our team writes compelling, personalized copy that gets replies by focusing on your prospects' pain points.",
    features: [
      'Value proposition-focused copywriting',
      'Personalization at scale',
      'Follow-up sequences that build relationships',
    ],
    caseStudy: {
      company: 'Logistics B2B',
      problem: 'Generic email templates were getting ignored, failing to build trust with potential clients in niche markets.',
      results: 'Signed 7 new contracts in 3 months with a hyper-personalized, multi-touch campaign that built credibility.',
      imageHint: 'contract signing',
      imageId: 'case-study-4',
    },
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Response Management & Call Booking',
    description:
      'We use AI to manage positive replies, handle objections, and book qualified meetings directly into your calendar.',
    features: [
      '24/7 inbox monitoring',
      'AI-assisted response handling',
      'Seamless calendar integration for call booking',
    ],
    caseStudy: {
      company: 'Software Dev Agency',
      problem: 'Their team was overwhelmed with managing responses, and qualified leads were slipping through the cracks.',
      results: 'Generated 8 qualified leads per month by using AI to manage initial responses and focusing on business pain points.',
      imageHint: 'AI chatbot',
      imageId: 'case-study-5',
    },
  },
];

export function Services() {
  return (
    <section id="services" className="w-full bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services Deliver Real-World Results
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            We provide a complete, done-for-you system that solves your biggest growth challenges and generates a predictable stream of high-quality leads.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-12">
          {services.map((service, index) => {
            const caseStudyImage = PlaceHolderImages.find(
              (img) => img.id === service.caseStudy.imageId
            );
            return (
              <div
                key={index}
                className="grid gap-8 md:grid-cols-2 animate-in fade-in-0 slide-in-from-bottom-10 duration-500"
              >
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">
                      {service.description}
                    </p>
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
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{service.caseStudy.company} Case Study</CardTitle>
                    <CardDescription>
                      <span className="font-semibold text-card-foreground">Problem: </span>
                      {service.caseStudy.problem}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    {caseStudyImage && (
                      <Image
                        src={caseStudyImage.imageUrl}
                        alt={caseStudyImage.description}
                        width={600}
                        height={400}
                        className="rounded-lg border object-cover shadow-lg aspect-[3/2]"
                        data-ai-hint={service.caseStudy.imageHint}
                      />
                    )}
                     <Badge variant="secondary" className="whitespace-normal bg-green-500/10 text-green-600">
                      <strong>Result:</strong> {service.caseStudy.results}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
