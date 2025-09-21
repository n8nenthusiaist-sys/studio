import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    text: 'Most B2B companies depend solely on referrals for new business.',
  },
  {
    text: 'Business owners spend 15-20 hours per week on non-billable business development activities.',
  },
  {
    text: 'Many firms take on unprofitable, "bad fit" clients just to fill revenue gaps.',
  },
  {
    text: '42% of your prospects have already chosen a competitor within 6 hours of identifying a need.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Cold Hard Truth About B2B Service Company Growth
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Relying on outdated methods for client acquisition is holding you back. The market has changed, and the data doesn't lie.
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
