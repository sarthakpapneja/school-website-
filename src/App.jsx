import BentoGrid from './components/BentoGrid';
import Academics from './components/Academics';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Features from './components/Features';
import Message from './components/Message';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuroraBackground from './components/AuroraBackground';
import HallOfFame from './components/HallOfFame';
import AdmissionsJourney from './components/AdmissionsJourney';
import Gallery from './components/Gallery';
import ImpactCTA from './components/ImpactCTA';



function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-gold selection:text-white relative overflow-x-hidden">
      <AuroraBackground />
      <Navbar />
      <Hero />
      <Stats />
      <Message />
      <Features />
      <AdmissionsJourney />
      <BentoGrid />
      <Academics />
      <Gallery />
      <HallOfFame />
      <ImpactCTA />
      <Footer />

    </div>
  );
}

export default App;
