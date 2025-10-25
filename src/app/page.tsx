import { BannerStrip } from '@/components/common/BannerStrip';
import { Navigation } from '@/components/common/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { Value } from '@/components/sections/Value';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { More } from '@/components/sections/More';
import { TickerSection } from '@/components/sections/TickerSection';
import { CTASection } from '@/components/sections/CTASection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/common/Footer';

export default function Home() {
  return (
    <main>
      <BannerStrip />
      <Navigation />
      <HeroSection />
      <Value />
      <HowItWorks />
      <TestimonialSection />
      <More />
      <TickerSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
