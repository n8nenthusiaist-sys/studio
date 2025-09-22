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
  Calendar,
  Shapes,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

const tools = {
  'Apollo.io': 'https://www.apollo.io/favicon.ico',
  'LinkedIn Sales Navigator': 'https://static.licdn.com/aero-v1/sc/h/al73832cl2r1826ok2ag9xvsb',
  'ZeroBounce': 'https://www.zerobounce.net/favicon-32x32.png',
  'MillionVerifier': 'https://i.imgur.com/84QTq2F.png',
  'Instantly': 'https://i.imgur.com/b24x63y.png',
  'Smartlead': 'https://i.imgur.com/h5T2jV5.png',
  'Phantombuster': 'https://phantombuster.com/favicon.ico',
}

const services = [
  {
    icon: Database,
    title: 'Strategic Lead Generation & Database Intelligence',
    description:
      'We build hyper-targeted prospect lists using premium B2B databases. We identify key decision-makers at companies that match your exact ideal client profile, so you stop wasting time on unqualified leads.',
    features: [
      'Ideal Client Profile (ICP) development and validation',
      'Access to premium B2B data sources with millions of contacts',
      'Automated email and phone number verification',
      'Continuous database enrichment and hygiene',
    ],
    toolLogos: ['Apollo.io', 'LinkedIn Sales Navigator', 'ZeroBounce', 'MillionVerifier']
  },
  {
    icon: Mail,
    title: 'Multi-Channel Outreach Campaign Management',
    description:
      'We execute high-volume, personalized outreach campaigns across email and LinkedIn. Our multi-touch approach maximizes engagement and ensures your brand stays top-of-mind with key prospects.',
    features: [
      'Fully managed cold email and LinkedIn campaigns',
      'A/B testing of messaging, subject lines, and calls-to-action',
      'Multi-channel sequences for maximum reach and impact',
      'All campaigns run under your brand with your messaging',
    ],
    toolLogos: ['Instantly', 'Smartlead', 'Phantombuster']
  },
  {
    icon: Server,
    title: 'Technical Infrastructure & Deliverability Management',
    description:
      'We handle all the technical backend work that derails most outreach efforts, including domain setup, DNS configuration (MX, DKIM, DMARC), and email warm-up to ensure you land in the inbox, not the spam folder.',
    features: [
      'Complete domain and email infrastructure setup',
      'Proper authentication to maximize deliverability',
      'Automated email warm-up and health monitoring',
      'Blacklist monitoring and rapid remediation',
    ],
    toolLogos: []
  },
  {
    icon: FileText,
    title: 'Hyper-Personalized & AI-Enhanced Copywriting',
    description:
      'Our team writes compelling, personalized copy for every prospect. We research their company, role, and industry challenges to craft messages that resonate and get replies.',
    features: [
      'Custom icebreakers and introductions for each prospect',
      'Pain-point-driven messaging that speaks to their needs',
      'AI-powered copy optimization based on performance data',
      'Value propositions tailored to specific market segments',
    ],
    toolLogos: []
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Response Handling & Appointment Booking',
    description:
      "Our system uses a custom-trained AI agent to manage positive replies, answer questions, and book qualified meetings directly on your sales team's calendar, so you only spend time on sales-ready conversations.",
    features: [
      '24/7 automated response to prospect inquiries',
      'Intelligent lead qualification and scoring',
      'Automatic calendar scheduling across time zones',
      'Custom AI agent trained on your services and expertise',
    ],
    toolLogos: []
  },
  {
    icon: Shapes,
    title: 'Custom Projects & Consulting',
    description:
      "Have a unique challenge or a project that doesn't fit our standard services? We offer custom consulting and project-based work to tackle your most complex lead generation and outreach problems.",
    features: [
      'Bespoke strategy development for unique use cases',
      'Custom tool and workflow integrations',
      'In-depth market analysis and feasibility reports',
      'Dedicated project management and support',
      'Flexible engagement and pricing models',
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
            Our Done-For-You B2B Outreach Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            We've dedicated our entire business to solving the client acquisition problem for B2B companies like yours. Here's what we actually do.
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
                    
                    <div className="mt-6 flex flex-col gap-4">
                      {service.toolLogos.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-card-foreground">Tools We Use:</h4>
                          <div className="mt-2 flex flex-wrap items-center gap-4">
                            {service.toolLogos.map((tool) => (
                              <div key={tool} className="flex items-center gap-2">
                                <Image src={tools[tool as keyof typeof tools]} alt={`${tool} logo`} width={16} height={16} className="rounded-sm" unoptimized/>
                                <span className="text-sm text-muted-foreground">{tool}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <Button size="sm" asChild className="w-full md:w-auto">
                        <a href="https://calendly.com/n8nenthusiaist/30min" target="_blank" rel="noopener noreferrer">
                          <Calendar className="mr-2 h-4 w-4" />
                          Implement Now
                        </a>
                      </Button>
                    </div>
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
