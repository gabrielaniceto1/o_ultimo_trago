import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AudienceSection } from './sections/AudienceSection';
import { CreatorSection } from './sections/CreatorSection';
import { DeliverablesSection } from './sections/DeliverablesSection';
import { FaqSection } from './sections/FaqSection';
import { HeroSection } from './sections/HeroSection';
import { IntroSection } from './sections/IntroSection';
import { OfferSection } from './sections/OfferSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { TransformationSection } from './sections/TransformationSection';
import { VideoSection } from './sections/VideoSection';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <IntroSection />
        <AudienceSection />
        <TransformationSection />
        <TestimonialsSection />
        <CreatorSection />
        <DeliverablesSection />
        <OfferSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}