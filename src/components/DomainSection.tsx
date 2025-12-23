import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Gift,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DomainSection = () => {
  const [domain, setDomain] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const domainExtensions = [
    { ext: ".com", price: "₹899", popular: true },
    { ext: ".in", price: "₹499", popular: true },
    { ext: ".ai", price: "₹8,999", trending: true },
    { ext: ".net", price: "₹1,299" },
    { ext: ".org", price: "₹1,199" },
    { ext: ".co", price: "₹2,999", trending: true },
    { ext: ".io", price: "₹4,999", trending: true },
    { ext: ".tech", price: "₹3,999" },
  ];

  /* 🔍 GoDaddy Domain Search */
  const handleDomainSearch = () => {
    if (!domain) return;
    setIsSearching(true);

    const searchQuery = encodeURIComponent(domain);
    const godaddyUrl = `https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=${searchQuery}`;

    setTimeout(() => {
      window.open(godaddyUrl, "_blank");
      setIsSearching(false);
    }, 800);
  };

  /* 📩 Register → Contact page with prefilled message */
  const handleRegister = (ext: string) => {
    const message = encodeURIComponent(
      `Hi SivWebAI Team,\n\nI'm interested in registering the domain: ${domain || "example"}${ext}.\n\nPlease share pricing, availability, and hosting options.\n\nThanks`
    );

    navigate(`/contact?message=${message}`);
  };

  return (
    <section
      id="domains"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-foreground via-primary-dark to-foreground"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 mb-6">
            <Globe className="w-6 h-6 text-secondary animate-pulse" />
            <span className="text-white font-semibold tracking-wide">
              Domain Registration
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-primary via-accent-cyan to-secondary bg-clip-text text-transparent">
              Domain Name
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Search real-time availability via GoDaddy and let us handle setup,
            hosting, SSL, and support.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="flex justify-center items-center gap-2 text-white text-2xl">
                <Search className="w-6 h-6 text-secondary" />
                Domain Search (Powered by GoDaddy)
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="yourbrandname"
                  className="h-14 text-lg bg-white/10 border-white/30 text-white placeholder:text-white/50 rounded-xl"
                />

                <Button
                  onClick={handleDomainSearch}
                  disabled={!domain || isSearching}
                  className="h-14 px-10 text-lg font-bold bg-gradient-to-r from-accent-bright via-warning to-accent-bright text-white shadow-accent hover:scale-105 transition-all"
                >
                  {isSearching ? "Checking..." : "Search on GoDaddy"}
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[Shield, Zap, CheckCircle].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4"
                  >
                    <Icon className="w-5 h-5 text-secondary" />
                    <span className="text-white/80 text-sm font-medium">
                      {i === 0
                        ? "Free WHOIS Protection"
                        : i === 1
                        ? "Instant Activation"
                        : "Managed DNS"}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {domainExtensions.map((d, i) => (
            <Card
              key={i}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:scale-105 transition-all"
            >
              {(d.popular || d.trending) && (
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-secondary to-accent-bright text-black text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1 shadow-lg">
                  {d.popular ? <Star size={12} /> : <Zap size={12} />}
                  {d.popular ? "Popular" : "Trending"}
                </div>
              )}

              <CardContent className="p-8 text-center">
                <div className="text-4xl font-black text-white mb-2">{d.ext}</div>
                <div className="text-2xl font-bold text-secondary mb-2">
                  {d.price}
                </div>
                <div className="text-white/60 mb-6">per year</div>

                <Button
                  onClick={() => handleRegister(d.ext)}
                  variant="outline"
                  className="w-full border-white/40 text-white hover:bg-white hover:text-foreground font-bold"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Offer */}
        <div className="relative bg-gradient-to-r from-primary via-secondary to-accent-bright rounded-3xl p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-black mb-4">
            Free Domain with Hosting Plan
          </h3>
          <p className="text-xl mb-6 text-white/90">
            Free SSL • Website Setup • 24/7 Support
          </p>

          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="bg-white text-foreground font-black hover:scale-105 transition"
          >
            <Gift className="w-5 h-5 mr-2" />
            Claim Free Domain
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
