import Header from './components/Header';
import Hero from './components/Hero';
import Opportunity from './components/Opportunity';
import WhatsIncluded from './components/WhatsIncluded';
import About from './components/About';
import Venue from './components/Venue';
import FAQ from './components/FAQ';
import Schedule from './components/Schedule';
import CTA from './components/CTA';
import Terms from './components/Terms';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Opportunity />
      <WhatsIncluded />
      <About />
      <Venue />
      <FAQ />
      <Schedule />
      <Terms />
      <CTA />
      <Footer />
    </main>
  );
}
