import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Calendar } from 'lucide-react';
import { PersonalizeCtaForm } from './personalize-cta-form';

const learnings = [
  "Whether cold outreach is a good fit for your specific situation.",
  "How our strategies could be adapted to your unique market and services.",
  "Realistic expectations for results and timeline for your firm.",
  "Best practices for lead generation in the accounting industry you can implement immediately.",
  "Answers to your technical questions about email marketing and automation.",
];

export function CtaSection() {
  return (
    <section id="cta" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Free Discovery Call - No Strings Attached
            </h2>
            <p className="max-w-xl text-muted-foreground md:text-xl">
              This is NOT a high-pressure sales pitch. It's a 15-30 minute chat to see if we can genuinely help you. If not, we'll tell you, and you'll get free advice either way.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">On the call, you will learn:</h3>
            <ul className="space-y-2">
              {learnings.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4">
            <PersonalizeCtaForm />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md animate-in fade-in-0 zoom-in-95 duration-500 bg-background">
            <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center text-center">
              <Calendar className="h-16 w-16 text-primary mb-4" />
              <h3 className="mb-4 text-center font-headline text-xl font-semibold text-card-foreground">Schedule Your Free Discovery Call</h3>
              <p className="text-muted-foreground mb-6">Find a time that works for you and let's discuss how we can help your firm grow.</p>
              <Button size="sm" asChild>
                <a href="https://calendly.com/n8nenthusiaist/30min" target="_blank" rel="noopener noreferrer">
                  Interested?
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
