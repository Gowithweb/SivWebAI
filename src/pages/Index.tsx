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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GOwithWeb - Professional Web Solutions, Hosting & Domain Services</title>
        <meta name="description" content="Leading web solutions provider offering professional web development, domain registration, secure hosting, SSL certificates, SEO services, and digital marketing. Transform your business online with GOwithWeb." />
        <meta name="keywords" content="web development, domain registration, web hosting, SSL certificates, SEO services, digital marketing, website design, business websites, ecommerce solutions" />
        <link rel="canonical" href="https://gowithweb.com/" />
        <meta property="og:title" content="GOwithWeb - Professional Web Solutions & Services" />
        <meta property="og:description" content="Professional web development, hosting, domains, and digital marketing services to grow your business online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gowithweb.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GOwithWeb - Professional Web Solutions" />
        <meta name="twitter:description" content="Complete web solutions for modern businesses. Web development, hosting, domains & more." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GOwithWeb",
            "url": "https://gowithweb.com",
            "description": "Professional web solutions provider offering web development, hosting, domains, and digital marketing services",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9876543210",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://facebook.com/gowithweb",
              "https://twitter.com/gowithweb",
              "https://linkedin.com/company/gowithweb"
            ],
            "service": [
              {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom website development and web applications"
              },
              {
                "@type": "Service", 
                "name": "Web Hosting",
                "description": "Reliable and secure web hosting solutions"
              },
              {
                "@type": "Service",
                "name": "Domain Registration",
                "description": "Domain name registration and management"
              }
            ]
          })}
        </script>
      </Helmet>
      
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
