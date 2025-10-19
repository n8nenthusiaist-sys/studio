'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Users,
  MailOpen,
  DollarSign,
  TrendingUp,
  Target,
  Repeat,
  UserCheck,
  Award,
  Zap,
  Crosshair,
  BarChart,
  ClipboardCheck,
  Scaling,
  AreaChart,
  CalendarCheck,
  MailCheck,
  Briefcase,
  Bot,
  Filter,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const caseStudies = [
  {
    company: 'Ambition - Software Productivity Co.',
    results: '73 new leads in 6 weeks',
    insights: 'Systematic persistence pays off. The 8th follow-up generated as many leads as the 2nd email, proving that most sales reps give up too early.',
    Icon: BarChart,
    className: 'md:col-span-2',
    features: [
      'Multi-step outreach sequence',
      'Consistent follow-up strategy',
      'A/B testing of subject lines',
      'Targeted lead segmentation',
      'Performance tracking and optimization'
    ],
    featureIcon: Repeat,
  },
  {
    company: 'Shane Snow - Author/Journalist',
    results: '45.5% Open Rate, Double Industry Average',
    insights: 'Personalization is critical. High-level executives open emails but only respond when they see personal relevance answering "why me?".',
    Icon: MailOpen,
     features: [
        'Deep research on prospect background',
        'Customized email introductions',
        'Reference to specific articles/work',
        'High-relevance value proposition',
        'Manual quality assurance on every email'
    ],
    featureIcon: UserCheck,
  },
  {
    company: 'Jake Jorgovan - Creative Strategist',
    results: '$12,030 Generated from Dream Clients',
    insights: 'A research-heavy, personalized approach identifying specific prospect problems dramatically outperforms a high-volume strategy.',
    Icon: DollarSign,
    features: [
        'Ideal client profiling',
        'In-depth problem identification',
        'Value-first outreach messaging',
        'Focus on high-ticket services',
        'Nurturing high-value relationships'
    ],
    featureIcon: Award,
  },
  {
    company: 'LeadFuze - Lead Generation Software',
    results: 'Scaled from $0 to $30k/month in 12 months',
    insights: 'Automation combined with valuable content in follow-ups creates scalable and predictable revenue-generating systems.',
    className: 'md:col-span-2',
    Icon: Scaling,
    features: [
      'Automated prospecting funnels',
      'Scalable content delivery',
      'Predictive revenue modeling',
      'Lead nurturing sequences',
      'Integration with CRM systems'
    ],
    featureIcon: Zap,
  },
  {
    company: 'Marco Massaro - Web Consultancy',
    results: '$15,000 project from a single cold email campaign',
    insights: 'Hyper-specific targeting of ideal clients combined with a direct, attention-grabbing (though improvable) email yields high response rates.',
    className: 'md:grid-cols-3 md:col-span-3',
    Icon: Target,
     features: [
      'Hyper-targeted audience research',
      'Compelling, direct-response copywriting',
      'Single, high-impact email campaign',
      'Clear call-to-action',
      'Rapid client conversion'
    ],
    featureIcon: Crosshair,
  },
];


export function CaseStudies() {
  return (
    <section id="results" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Proven Results: What High-Quality Lead Generation Can Achieve
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            The pattern across all success stories: high response rates are achievable, follow-up is where the real results happen, and personalization outperforms generic messaging.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className={`flex flex-col overflow-hidden group h-full ${study.className || ''}`}>
               <div className="flex flex-col justify-between h-full">
                 <div>
                 <div className="relative h-56 w-full bg-primary/5 flex items-center justify-center">
                    <study.Icon className="h-24 w-24 text-primary" />
                  </div>
                   <CardHeader>
                      <CardTitle>{study.company}</CardTitle>
                      <CardDescription className="text-primary font-bold text-lg">{study.results}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Key Insight:</strong> {study.insights}
                    </p>
                    {study.features && study.featureIcon && (
                      <div className="mt-4 space-y-3">
                        <h4 className="font-semibold text-card-foreground">What You Get:</h4>
                        <ul className="space-y-2">
                          {study.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <study.featureIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </div>
                <CardContent className="pt-6">
                  <Button size="sm" asChild className="w-full">
                    <a href="https://calendly.com/n8nenthusiaist/dominik-jakubowsk" target="_blank" rel="noopener noreferrer">Learn More</a>
                  </Button>
                </CardContent>
               </div>
            </Card>
          ))}
        </div>
         <div className="mt-16 mx-auto max-w-4xl text-center">
          <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">The Blueprint for Success</h3>
          <p className="mt-4 text-muted-foreground md:text-lg">
            There are many steps involved in a successful cold email campaign, and for most people, it can be pretty time-consuming. You have to identify who you’re targeting, find their contact information, and then craft a personalized message with a compelling call to action. To make things more efficient, you can use software tools to automate your processes and track your data. By understanding the templates and numbers from these successful campaigns, you can create a system that is large enough to change the course of your business.
          </p>
        </div>
      </div>
    </section>
  );
}
