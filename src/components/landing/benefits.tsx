import { Check } from 'lucide-react';

const benefits = [
  'You\'ll sleep peacefully knowing your calendar is filled with high-quality prospect meetings, regardless of season or economic conditions.',
  'You\'ll establish predictable monthly revenue streams that smooth out the brutal feast-or-famine cycle plaguing most accounting firms.',
  'You\'ll attract premium clients who understand your value and are willing to pay professional fees instead of bargain hunting.',
  'You\'ll eliminate the stress of wondering where next month\'s revenue will come from.',
  'You\'ll have 15+ hours per week freed up from manual prospecting to focus on billable client work.',
];

export function Benefits() {
  return (
    <section id="benefits" className="w-full bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What You Get When Working With Us
            </h2>
            <p className="text-muted-foreground md:text-xl">
              This is about more than just leads. It's about transforming your business from the ground up.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
