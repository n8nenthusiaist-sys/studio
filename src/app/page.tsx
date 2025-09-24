import { Navbar } from '@/components/landing/navbar';
import { Header } from '@/components/landing/header';
import { TargetAudience } from '@/components/landing/target-audience';
import { Problem } from '@/components/landing/problem';
import { Services } from '@/components/landing/services';
import { CaseStudies } from '@/components/landing/case-studies';
import { Comparison } from '@/components/landing/comparison';
import { Benefits } from '@/components/landing/benefits';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';
import { FreeResources } from '@/components/landing/free-resources';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Header />
        <Services />
        <CaseStudies />
        <TargetAudience />
        <Problem />
        <Comparison />
        <Benefits />
        <FreeResources />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
