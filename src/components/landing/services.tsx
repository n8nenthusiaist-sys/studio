import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Database,
  Mail,
  Server,
  FileText,
  BrainCircuit,
  type LucideIcon,
  CircleCheckBig,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

const tools = {
  'Apollo.io': 'https://www.apollo.io/favicon.ico',
  'LinkedIn Sales Navigator': 'https://static.licdn.com/aero-v1/sc/h/al73832cl2r1826ok2ag9xvsb',
  'ZeroBounce': 'https://www.zerobounce.net/favicon-32x32.png',
  'MillionVerifier': 'https://www.millionverifier.com/favicon.ico',
  'Instantly': 'https://instantly.ai/favicon.ico',
  'Smartlead': 'https://smartlead.ai/favicon.ico',
  'Phantombuster': 'https://phantombuster.com/favicon.ico',
}

const services = [
  {
    icon: Database,
    title: 'Strategic Lead Generation & Database Intelligence',
    description:
      'We build highly targeted prospect lists using premium databases. We identify decision-makers at companies that match your exact ideal client profile, so you stop wasting time on unqualified leads.',
    features: [
      'High-quality prospect databases with verified contacts',
      'Email verification through ZeroBounce & MillionVerifier',
      'Automated lead generation process that runs continuously',
      'Option to purchase an entire system',
    ],
    toolLogos: ['Apollo.io', 'LinkedIn Sales Navigator', 'ZeroBounce', 'MillionVerifier']
  },
  {
    icon: Mail,
    title: 'Cold Email & LinkedIn Campaign Management',
    description:
      'We send over 5,000 personalized emails and 100+ LinkedIn connection requests weekly on your behalf. Our multi-channel approach maximizes reach and runs under your brand.',
    features: [
      'Fully managed cold email campaigns',
      'Personalized LinkedIn outreach sequences',
      'Multi-channel approach for maximum reach',
      'All campaigns run under your brand with your messaging',
      'Option to purchase an entire system'
    ],
    toolLogos: ['Instantly', 'Smartlead', 'Phantombuster']
  },
  {
    icon: Server,
    title: 'Email Infrastructure Setup & Management',
    description:
      'We handle all the technical backend work that most firms struggle with, including proper DNS setup (MX, DKIM, DMARC) and email warm-up sequences to avoid spam folders.',
    features: [
      'Complete domain and email infrastructure setup',
      'Proper authentication to avoid spam folders',
      'Automated email health monitoring and optimization',
      '24/7 domain and email health monitoring',
      'Blacklist monitoring and recovery protocols',
      'Option to purchase an entire system'
    ],
    toolLogos: []
  },
  {
    icon: FileText,
    title: 'Ultra-Personalized Email Copywriting',
    description:
      'Every email is crafted specifically for each prospect. We conduct detailed research on their company, pain points, and industry challenges to write copy that gets replies.',
    features: [
      'Custom icebreakers for each prospect',
      'Industry-specific pain point identification',
      'Detailed company research reports stored in database',
      'Ongoing copy optimization based on response rates',
      'Option to purchase an entire system'
    ],
    toolLogos: []
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Response Management & Call Booking',
    description:
      "Our system automatically responds to interested prospects and books calls while you sleep. We use a trained AI agent with your company information, so you'll never miss an opportunity.",
    features: [
      '24/7 automated response to prospect inquiries',
      'Intelligent lead qualification and scoring',
      'Automatic calendar scheduling across time zones',
      'Custom RAG agent trained on your services and expertise',
      'Option to purchase an entire system'
    ],
    toolLogos: []
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
            We are one of the only companies who've dedicated our entire business to solving the client acquisition problem specifically for accounting firms like yours.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8">
          {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-xl border-border/40 bg-background shadow-lg transition-all hover:shadow-2xl animate-in fade-in-0 slide-in-from-bottom-10 duration-500"
              >
                <div className="grid md:grid-cols-2">
                  <CardContent className="flex flex-col p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="flex-1 text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="mt-4 flex-grow">
                      {service.description}
                    </CardDescription>

                    {service.toolLogos.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-card-foreground">Tools We Use:</h4>
                        <div className="mt-2 flex flex-wrap items-center gap-4">
                          {service.toolLogos.map((tool) => (
                            <div key={tool} className="flex items-center gap-2">
                              <Image src={tools[tool as keyof typeof tools]} alt={`${tool} logo`} width={16} height={16} className="rounded-sm" />
                              <span className="text-sm text-muted-foreground">{tool}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                     <Button size="sm" asChild className="mt-6">
                        <a href="https://www.levelingup.com/casestudies/6-cold-email-case-studies-great-reply-rates/" target="_blank" rel="noopener noreferrer">
                          See how to build
                        </a>
                    </Button>
                  </CardContent>
                  <div className="bg-primary/5 p-8">
                      <h4 className="font-headline text-lg font-semibold text-primary">What You Get:</h4>
                      <ul className="mt-2 space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <CircleCheckBig className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
