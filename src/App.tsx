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
import BlogPost from "./pages/BlogPost";
import TechnicalSupport from "./pages/TechnicalSupport";
import WebSolutions from "./pages/WebSolutions";
import WebDevelopment from "./pages/WebDevelopment";
import Contact from "./pages/Contact";
import ToolsServices from "./pages/ToolsServices";
import SSL from "./pages/SSL";
import SEO from "./pages/SEO";
import DigitalMarketing from "./pages/DigitalMarketing";
import AIServices from "./pages/AIServices";
import Team from "./pages/Team";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

// Service Subpages
import Hosting from "./pages/services/Hosting";
import WebDesign from "./pages/services/WebDesign";
import Development from "./pages/services/Development";
import Security from "./pages/services/Security";

// Project Subpages
import ReactProjects from "./pages/projects/ReactProjects";
import NodeJsProjects from "./pages/projects/NodeJsProjects";
import WordPressProjects from "./pages/projects/WordPressProjects";
import DrupalProjects from "./pages/projects/DrupalProjects";

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
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/technical-support" element={<TechnicalSupport />} />
            <Route path="/web-solutions" element={<WebSolutions />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools-services" element={<ToolsServices />} />
            <Route path="/ssl-security" element={<SSL />} />
            <Route path="/seo-services" element={<SEO />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/ai-services" element={<AIServices />} />
            <Route path="/team" element={<Team />} />
            <Route path="/tools" element={<Tools />} />
            
            {/* Service Subpages */}
            <Route path="/services/hosting" element={<Hosting />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/development" element={<Development />} />
            <Route path="/services/security" element={<Security />} />
            
            {/* Project Subpages */}
            <Route path="/projects/react" element={<ReactProjects />} />
            <Route path="/projects/nodejs" element={<NodeJsProjects />} />
            <Route path="/projects/wordpress" element={<WordPressProjects />} />
            <Route path="/projects/drupal" element={<DrupalProjects />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;