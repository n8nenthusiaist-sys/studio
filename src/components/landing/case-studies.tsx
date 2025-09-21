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
  Bar,
  BarChart,
  Line,
  LineChart,
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
    company: 'Ambition - Software Productivity Co.',
    details: [
      'Targeted 578 VPs of Sales & Sales Ops',
      'Executed an 8-email follow-up sequence',
    ],
    results: '12.6% Response Rate',
    insights: 'The 8th follow-up generated as many leads as the 2nd. Systematic persistence is key.',
    chartData: [
        { email: '1st', responses: 5 }, { email: '2nd', responses: 12 },
        { email: '3rd', responses: 8 }, { email: '4th', responses: 9 },
        { email: '5th', responses: 6 }, { email: '6th', responses: 7 },
        { email: '7th', responses: 10 }, { email: '8th', responses: 12 }
    ],
    chartType: 'line'
  },
  {
    company: 'Shane Snow - Author/Journalist',
    details: [
      'Contacted 1,000 Fortune 500 & Inc 500 C-level executives',
      'Focused on personalized "Why me?" messaging',
    ],
    results: '45.5% Open Rate',
    insights: 'High-level execs open emails, but only respond to personal relevance.',
    chartData: [
        { metric: 'Open Rate', value: 45.5, industryAvg: 21.3 },
    ],
    chartType: 'bar'
  },
  {
    company: 'Jake Jorgovan - Creative Strategist',
    details: [
      'Targeted 20-25 "dream clients" instead of a mass list',
      'Researched 2-3 specific problems on each website before outreach',
    ],
    results: '$12,030 Generated',
    insights: 'A research-heavy, personalized approach dramatically outperforms volume.',
    chartData: [
        { approach: "Mass Outreach", revenue: 2500 },
        { approach: "Personalized", revenue: 12030 }
    ],
    chartType: 'bar'
  },
  {
    company: 'LeadFuze - Lead Generation Software',
    details: [
      'Used a systematic "Question, Value Prop, CTA" formula',
      'Follow-up sequences included case studies and value-adds',
    ],
    results: 'Scaled to $30k/month in 12 months',
    insights: 'Automation combined with valuable content creates scalable results.',
    chartData: [
        { month: "Jan", revenue: 0 }, { month: "Mar", revenue: 5000 },
        { month: "Jun", revenue: 15000 }, { month: "Sep", revenue: 25000 },
        { month: "Dec", revenue: 30000 }
    ],
    chartType: 'line'
  },
  {
    company: 'Crazy Eye Marketing - Mobile App Client',
    details: [
      'Sent a 3-email sequence to 2,160 verified prospects',
      'Achieved consistent response rates across all emails',
    ],
    results: 'Nearly 10% Reply Rate',
    insights: 'Each follow-up is equally valuable; there are no diminishing returns.',
    chartData: [
        { email: "Email 1", rate: 9.8 },
        { email: "Email 2", rate: 9.5 },
        { email: "Email 3", rate: 9.6 }
    ],
    chartType: 'bar'
  },
];

const chartConfig = {
  value: { label: 'Value', color: 'hsl(var(--primary))' },
  responses: { label: 'Responses', color: 'hsl(var(--accent))' },
  revenue: { label: 'Revenue', color: 'hsl(var(--primary))' },
  rate: { label: 'Rate (%)', color: 'hsl(var(--accent))' },
  industryAvg: { label: 'Industry Avg', color: 'hsl(var(--muted-foreground))' },
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
            The pattern across all success stories: Response rates between 1.7% - 12.6% are achievable, follow-up is where the real results happen, and personalization outperforms generic messaging.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
              <CardHeader>
                <CardTitle>{study.company}</CardTitle>
                <CardDescription>{study.results}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col space-y-4">
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {study.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="h-[150px] w-full flex-grow">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    {study.chartType === 'line' ? (
                        <LineChart accessibilityLayer data={study.chartData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey={Object.keys(study.chartData[0])[0]} tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                            <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" hideLabel />} />
                            <Line dataKey={Object.keys(study.chartData[0])[1]} type="monotone" strokeWidth={2} stroke={chartConfig[Object.keys(study.chartData[0])[1] as keyof typeof chartConfig]?.color || 'hsl(var(--primary))'} dot={false} />
                        </LineChart>
                    ) : (
                        <BarChart accessibilityLayer data={study.chartData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey={Object.keys(study.chartData[0])[0]} tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                            <YAxis dataKey={Object.keys(study.chartData[0])[1]} tickLine={false} axisLine={false} tickMargin={8} />
                            <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" hideLabel />} />
                            <Bar dataKey={Object.keys(study.chartData[0])[1]} radius={8} fill={chartConfig[Object.keys(study.chartData[0])[1] as keyof typeof chartConfig]?.color || 'hsl(var(--primary))'} />
                             {study.chartData[0].industryAvg && <Bar dataKey="industryAvg" radius={8} fill="hsl(var(--muted-foreground))" />}
                        </BarChart>
                    )}
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
