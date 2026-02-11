import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Message from './components/Message';
import About from './components/About';
import BentoGrid from './components/BentoGrid';
import AdmissionsJourney from './components/AdmissionsJourney';
import Academics from './components/Academics';
import Gallery from './components/Gallery';
import HallOfFame from './components/HallOfFame';
import ImpactCTA from './components/ImpactCTA';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import ApplicationModal from './components/ApplicationModal';
import VideoModal from './components/VideoModal';
import PortalMockup from './components/PortalMockup';
import MessageModal from './components/MessageModal';
import FeatureDetailModal from './components/FeatureDetailModal';
import ScrollProgress from './components/ScrollProgress';
import Marquee from './components/Marquee';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import ProspectusModal from './components/ProspectusModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);

  // Global actions
  const openApply = () => setIsApplyOpen(true);
  const openVideo = () => setIsVideoOpen(true);
  const openPortal = () => setIsPortalOpen(true);
  const openMessage = () => setIsMessageOpen(true);
  const openFeature = (feature) => setActiveFeature(feature);
  const openProspectus = () => setIsProspectusOpen(true);

  return (
    <div className="bg-midnight min-h-screen font-sans selection:bg-champagne selection:text-midnight relative overflow-x-hidden">
      <div className="film-grain" />
      <SmoothScroll />

      <Preloader onComplete={() => setLoading(false)} />

      <ScrollProgress />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#161B22',
            color: '#F8F9FA',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '1rem'
          }
        }}
      />
      <AuroraBackground />

      <Navbar onApplyClick={openApply} onPortalClick={openPortal} />

      <Hero onExploreClick={openApply} onVideoClick={openVideo} />

      <Stats />

      <Marquee text="SEEK WISDOM • ATHENIA HERITAGE • ELITE ADMISSIONS NOW OPEN •" />

      <Message onReadMore={openMessage} />

      <About />

      <Marquee text="HOLISTIC MASTERY • GLOBAL READY • ELITE MENTORS • ARTISANAL EDUCATION •" />

      <Features onLearnMore={openFeature} />

      <AdmissionsJourney onApply={openApply} />
      <BentoGrid />
      <Academics />
      <Gallery />
      <HallOfFame />
      <ImpactCTA onApply={openApply} onRequestProspectus={openProspectus} />
      <Footer onPortalClick={openPortal} onRequestProspectus={openProspectus} />

      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <PortalMockup
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      <MessageModal
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
      />

      <FeatureDetailModal
        isOpen={!!activeFeature}
        onClose={() => setActiveFeature(null)}
        feature={activeFeature}
      />

      <ProspectusModal
        isOpen={isProspectusOpen}
        onClose={() => setIsProspectusOpen(false)}
      />
    </div>
  );
}

export default App;
