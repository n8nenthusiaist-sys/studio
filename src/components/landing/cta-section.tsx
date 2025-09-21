import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { PersonalizeCtaForm } from './personalize-cta-form';
import { Scheduler } from './scheduler';

const learnings = [
  "Whether cold outreach is a good fit for your specific situation.",
  "How our strategies could be adapted to your unique market and ICP.",
  "Realistic expectations for results and timeline for your company.",
  "Best practices for B2B lead generation you can implement immediately.",
  "Answers to your technical questions about email marketing and automation.",
];

export function CtaSection() {
  return (
    <section id="cta" className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Free Discovery Call - No Strings Attached
            </h2>
            <p className="max-w-xl text-primary-foreground/80 md:text-xl">
              This is NOT a high-pressure sales pitch. It's a 15-30 minute chat to see if we can genuinely help you. If not, we'll tell you.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">On the call, you will learn:</h3>
            <ul className="space-y-2">
              {learnings.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-primary-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4">
            <PersonalizeCtaForm />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md animate-in fade-in-0 zoom-in-95 duration-500">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 text-center font-headline text-xl font-semibold text-card-foreground">Schedule Your Free Discovery Call</h3>
              <Scheduler />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
