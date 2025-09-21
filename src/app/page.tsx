import { Navbar } from '@/components/landing/navbar';
import { Header } from '@/components/landing/header';
import { CaseStudies } from '@/components/landing/case-studies';
import { TargetAudience } from '@/components/landing/target-audience';
import { Problem } from '@/components/landing/problem';
import { Services } from '@/components/landing/services';
import { Comparison } from '@/components/landing/comparison';
import { Benefits } from '@/components/landing/benefits';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Header />
        <CaseStudies />
        <TargetAudience />
        <Problem />
        <Services />
        <Comparison />
        <Benefits />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
