import { Check } from 'lucide-react';

const benefits = [
  'Sleep peacefully knowing your calendar is consistently filled with high-quality, pre-qualified sales meetings.',
  'Establish predictable monthly revenue streams that eliminate the brutal feast-or-famine cycle.',
  'Attract premium B2B clients who see the value in your offer and are willing to pay professional fees.',
  'Eliminate the stress and uncertainty of wondering where your next customers will come from.',
  'Free up 15+ hours per week for your sales team to focus on closing deals instead of manual prospecting.',
  'Gain a massive competitive advantage in your market by building a scalable client acquisition machine.',
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
              This is about more than just leads. It's about building a predictable and scalable growth engine for your business.
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
