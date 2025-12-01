import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DomainSection from '@/components/DomainSection';
import ServicesSection from '@/components/ServicesSection';
import WebDevelopmentSection from '@/components/WebDevelopmentSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>SivWebAI - Next-Gen AI-Powered Web Solutions & Hosting</title>
        <meta name="description" content="Transform your digital presence with SivWebAI's AI-powered web development, smart hosting solutions, domain services, and cutting-edge SEO. Experience the future of web technology." />
        <meta name="keywords" content="AI web development, smart hosting, AI website builder, automated SEO, intelligent web solutions, AI domain services, machine learning web apps, AI-powered marketing" />
        <link rel="canonical" href="https://sivwebai.com/" />
        <meta property="og:title" content="SivWebAI - AI-Powered Web Solutions" />
        <meta property="og:description" content="Revolutionary AI-powered web development, hosting, and digital services to transform your business online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivwebai.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SivWebAI - AI Web Solutions" />
        <meta name="twitter:description" content="Next-generation AI-powered web development and hosting services." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SivWebAI",
            "url": "https://sivwebai.com",
            "description": "AI-powered web solutions provider offering intelligent web development, hosting, domains, and digital marketing services",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9876543210",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://facebook.com/sivwebai",
              "https://twitter.com/sivwebai",
              "https://linkedin.com/company/sivwebai"
            ],
            "service": [
              {
                "@type": "Service",
                "name": "AI Web Development",
                "description": "Intelligent website development powered by AI"
              },
              {
                "@type": "Service", 
                "name": "Smart Web Hosting",
                "description": "AI-optimized hosting solutions with predictive scaling"
              },
              {
                "@type": "Service",
                "name": "Domain Services",
                "description": "AI-assisted domain registration and management"
              }
            ]
          })}
        </script>
      </Helmet>

      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      
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
    </>
  );
};

export default Index;
