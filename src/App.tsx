import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import TechnicalSupport from "./pages/TechnicalSupport";
import WebSolutions from "./pages/WebSolutions";
import WebDevelopment from "./pages/WebDevelopment";
import Contact from "./pages/Contact";
import ToolsServices from "./pages/ToolsServices";
import SSL from "./pages/SSL";
import SEO from "./pages/SEO";
import DigitalMarketing from "./pages/DigitalMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/technical-support" element={<TechnicalSupport />} />
            <Route path="/web-solutions" element={<WebSolutions />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools-services" element={<ToolsServices />} />
            <Route path="/ssl-security" element={<SSL />} />
            <Route path="/seo-services" element={<SEO />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
