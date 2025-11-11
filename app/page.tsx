import Header from './components/Header';
import Hero from './components/Hero';
import Opportunity from './components/Opportunity';
import About from './components/About';
import Schedule from './components/Schedule';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Opportunity />
      <About />
      <Schedule />
      <CTA />
      <Footer />
    </main>
  );
}
