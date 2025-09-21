import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    text: '78% of accounting firms depend solely on referrals, leaving them vulnerable to unpredictable client flow.',
  },
  {
    text: 'Partners are spending 15-20 hours per week on business development instead of billable work.',
  },
  {
    text: "65% of firms take on unprofitable clients through referrals who don't match their fee structure.",
  },
  {
    text: '42% of prospects choose competitors within six hours of inquiry due to slow response times.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Cold Hard Truth About Accounting Firm Growth
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            It is 100% possible to acquire 5 new high-value clients every 90 days for your accounting firm and smooth out the brutal "feast or famine" cycle that plagues this industry. But the problem is that most accounting firms are operating using outdated and inefficient marketing strategies that worked 20 years ago but are failing today.
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
