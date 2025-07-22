import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DomainSection from '@/components/DomainSection';
import ServicesSection from '@/components/ServicesSection';
import WebDevelopmentSection from '@/components/WebDevelopmentSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DomainSection />
        <ServicesSection />
        <WebDevelopmentSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
