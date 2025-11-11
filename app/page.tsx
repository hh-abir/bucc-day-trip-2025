import Header from './components/Header';
import Hero from './components/Hero';
import Opportunity from './components/Opportunity';
import WhatsIncluded from './components/WhatsIncluded';
import About from './components/About';
import Gallery from './components/Gallery';
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
      <Gallery />
      <Schedule />
      <Terms />
      <CTA />
      <Footer />
    </main>
  );
}
