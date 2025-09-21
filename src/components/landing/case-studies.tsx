'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import {
  ChartTooltipContent,
  ChartContainer,
  type ChartConfig,
} from '@/components/ui/chart';

const caseStudies = [
  {
    company: 'Fintech SaaS',
    details: [
      'Built a list of 500+ contacts',
      'Targeted CTOs & VPs of Engineering',
      'A/B tested 3 email angles',
    ],
    results: '12.6% Response Rate',
    insights: 'Personalized opening lines drove the highest engagement.',
    chartData: [{ name: 'Response Rate', value: 12.6, fill: 'hsl(var(--primary))' }],
  },
  {
    company: 'Creative Agency',
    details: [
      'Scraped 1,200 leads from industry directories',
      'Focused on Marketing Directors',
      'Managed LinkedIn and Email campaigns in parallel',
    ],
    results: '22 Meetings Booked',
    insights: 'LinkedIn follow-ups significantly increased meeting conversions.',
    chartData: [{ name: 'Meetings', value: 22, fill: 'hsl(var(--accent))' }],
  },
  {
    company: 'Consulting Firm',
    details: [
      'Cleaned and enriched an existing database of 2,000 leads',
      'Personalized emails based on company news',
      'Automated follow-up sequences',
    ],
    results: '45.5% Open Rate',
    insights: 'Subject lines mentioning recent company achievements were most effective.',
    chartData: [{ name: 'Open Rate', value: 45.5, fill: 'hsl(var(--primary))' }],
  },
  {
    company: 'Logistics B2B',
    details: [
      'Identified 800 potential clients in niche markets',
      'Ran a hyper-personalized campaign for 3 months',
      'Booked calls directly into sales team calendars',
    ],
    results: '7 New Contracts Signed',
    insights: 'A multi-touch strategy over 90 days built trust and credibility.',
    chartData: [{ name: 'New Contracts', value: 7, fill: 'hsl(var(--accent))' }],
  },
  {
    company: 'Software Dev Agency',
    details: [
      'Targeted non-technical founders of funded startups',
      'Focused on pain points around technical debt',
      'Used AI to manage initial responses',
    ],
    results: '8 Qualified Leads per Month',
    insights: 'Addressing specific business pain points resonated more than technical features.',
    chartData: [{ name: 'Qualified Leads', value: 8, fill: 'hsl(var(--primary))' }],
  },
];

const chartConfig = {
  value: {
    label: 'Value',
  },
} satisfies ChartConfig;

export function CaseStudies() {
  return (
    <section id="results" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Proven Results: What Cold Outreach and High-Quality Lead Generation Can Actually Achieve
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            We don't just talk about results, we deliver them. Here's a look at what we've done for other B2B companies.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
              <CardHeader>
                <CardTitle>{study.company}</CardTitle>
                <CardDescription>{study.results}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {study.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="h-[150px] w-full">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <BarChart accessibilityLayer data={study.chartData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                      <CartesianGrid vertical={false} />
                      <YAxis dataKey="value" tickLine={false} axisLine={false} tickMargin={8} />
                      <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" hideLabel />} />
                      <Bar dataKey="value" radius={8} />
                    </BarChart>
                  </ChartContainer>
                </div>
                <Badge variant="secondary" className="whitespace-normal bg-accent/20 text-accent-foreground">
                  <strong>Key Insight:</strong> {study.insights}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
