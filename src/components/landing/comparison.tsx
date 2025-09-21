import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, CheckCircle } from 'lucide-react';

const inHouseCons = [
  'High costs for data tools ($5k+/yr)',
  'Steep learning curve for outreach',
  'Risk of damaging domain reputation',
  'Time-consuming (15-20 hrs/week)',
  'Inconsistent results without expertise',
];

const withUsPros = [
  'Access to our full tech stack',
  'Expert campaign management',
  'Protected domain and high deliverability',
  'Frees up 20+ hours per week',
  'Predictable pipeline of meetings',
];

export function Comparison() {
  return (
    <section id="comparison" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Working With Us Makes Sense
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            You could try to build an outbound system yourself, but the time, cost, and risk are significant. Here's a comparison.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="border-destructive/50 bg-destructive/5 animate-in fade-in-0 slide-in-from-left-10 duration-500">
            <CardHeader>
              <CardTitle className="text-destructive">
                Option 1: Try to build this in-house
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {inHouseCons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-500/50 bg-green-500/5 animate-in fade-in-0 slide-in-from-right-10 duration-500">
            <CardHeader>
              <CardTitle className="text-green-600">
                Option 2: Let us handle everything
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {withUsPros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
