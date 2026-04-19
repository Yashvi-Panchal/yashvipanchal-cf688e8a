import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Writing } from '@/components/Writing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
