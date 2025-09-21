import { Check } from 'lucide-react';

const benefits = [
  'A predictable pipeline of qualified meetings booked directly in your calendar.',
  'Consistent, predictable monthly revenue streams you can count on.',
  'A roster of premium, high-value clients who respect your expertise.',
  'Eliminate uncertainty and anxiety about where your next client will come from.',
  '15+ hours per week freed up from manual prospecting to focus on client work.',
];

export function Benefits() {
  return (
    <section id="benefits" className="w-full bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What You Get When Working With Us
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            This is about more than just leads. It's about transforming your business from the ground up.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
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
