import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortofolioSection from './components/PortofolioSection';
import TestimoniSection from './components/TestimoniSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      <Navbar />
      <main>
        <ProfileCard />
        <AboutSection />
        <SkillsSection />
        <PortofolioSection />
        <TestimoniSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
