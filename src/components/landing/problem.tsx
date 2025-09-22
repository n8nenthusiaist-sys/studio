import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    text: '80% of B2B companies that fail do so because of a lack of new customers and a dried-up sales pipeline.',
  },
  {
    text: 'Sales teams spend up to 40% of their time on manual, non-revenue-generating prospecting activities.',
  },
  {
    text: "61% of marketers say generating high-quality leads is their biggest challenge.",
  },
  {
    text: 'Only 24% of sales emails are ever opened, leaving vast amounts of potential revenue untapped.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Harsh Reality of B2B Growth
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            It is 100% possible to predictably acquire high-value clients and escape the brutal "feast or famine" cycle. The problem is that most B2B companies are stuck using outdated, inefficient, and unscalable strategies that are failing in today's competitive market.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary/5 animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
              <CardContent className="p-6">
                <p className="text-center text-lg font-semibold text-primary">
                  "{stat.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
