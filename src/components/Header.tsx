import { useState, useEffect } from "react";
import { Menu, X, Shield, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const LOGO_URL = "https://ai-agent.gowithweb.in/imgs/SivWebAI2025.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      subItems: [
        { name: "Web Hosting", href: "/services/hosting" },
        { name: "Web Design", href: "/services/web-design" },
        { name: "Development", href: "/services/development" },
        { name: "Security", href: "/services/security" },
        { name: "SSL Security", href: "/ssl-security" },
        { name: "SEO Services", href: "/seo-services" },
        { name: "Digital Marketing", href: "/digital-marketing" },
      ],
    },
    {
      name: "Projects",
      href: "/projects",
      subItems: [
        { name: "React Projects", href: "/projects/react" },
        { name: "Node.js Projects", href: "/projects/nodejs" },
        { name: "WordPress Projects", href: "/projects/wordpress" },
        { name: "Drupal Projects", href: "/projects/drupal" },
      ],
    },
    {
      name: "AI Services",
      href: "/ai-services",
      subItems: [
        { name: "Generative AI", href: "/ai-services#generative" },
        { name: "Vision AI", href: "/ai-services#vision" },
        { name: "Speech AI", href: "/ai-services#speech" },
        { name: "AI Marketing", href: "/ai-services#marketing" },
        { name: "n8n Automation", href: "/ai-services#n8n" },
        { name: "AI Tools", href: "/ai-services#tools" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Auto-open dropdown when on a subpage
  useEffect(() => {
    const active = navItems.find(
      (item) =>
        item.subItems && location.pathname.startsWith(item.href)
    );
    if (active) {
      setOpenDropdown(active.name);
    }
  }, [location.pathname]);

  // Toggle on click (desktop & mobile)
  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Close mobile menu on navigation
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-slate-950 via-primary to-slate-900 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <img
              src={LOGO_URL}
              alt="SivWebAI"
              className="h-12 w-auto drop-shadow-lg hover:scale-105 transition"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                onMouseLeave={() => item.subItems && setOpenDropdown(null)}
              >
                {item.subItems ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center gap-1 font-semibold transition ${
                      openDropdown === item.name || location.pathname.startsWith(item.href)
                        ? "text-secondary"
                        : "text-white hover:text-secondary"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-semibold transition ${
                      location.pathname === item.href
                        ? "text-secondary"
                        : "text-white hover:text-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* DROPDOWN - Fixed gap issue */}
                {item.subItems && openDropdown === item.name && (
                  <div className="absolute left-0 top-full mt-1 pt-3 w-60 rounded-xl bg-slate-900 shadow-2xl border border-white/10 overflow-hidden">
                    <div className="-mt-3 pt-3 bg-slate-900"> {/* Invisible bridge to eliminate gap */}
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={handleLinkClick}
                          className="block px-5 py-3 text-sm text-white hover:bg-primary/20 transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-white/40 text-white"
              onClick={() => window.open("https://client.sivwebai.com", "_blank")}
            >
              <Shield className="w-4 h-4 mr-2" />
              Client Portal
            </Button>

            <Button className="bg-gradient-to-r from-accent-bright to-warning text-white">
              <Zap className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur border-b border-white/10">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`w-full flex items-center justify-between text-left font-semibold py-3 transition ${
                      openDropdown === item.name || location.pathname.startsWith(item.href)
                        ? "text-secondary"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`block py-3 font-semibold transition ${
                      location.pathname === item.href
                        ? "text-secondary"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* MOBILE DROPDOWN */}
                {item.subItems && openDropdown === item.name && (
                  <div className="ml-6 mt-2 flex flex-col border-l-2 border-white/20 pl-4">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-white/80 hover:text-secondary transition"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTAs */}
            <div className="mt-8 flex flex-col gap-4">
              <Button
                variant="outline"
                className="w-full border-white/40 text-white"
                onClick={() => window.open("https://client.sivwebai.com", "_blank")}
              >
                <Shield className="w-4 h-4 mr-2" />
                Client Portal
              </Button>
              <Button className="w-full bg-gradient-to-r from-accent-bright to-warning text-white">
                <Zap className="w-4 h-4 mr-2" />
                Get Started Free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;