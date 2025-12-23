import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Gift,
  Shield,
  Clock,
  Zap,
  RefreshCw,
  CheckCircle,
  Globe,
  TrendingUp,
  Monitor,
  Headphones,
  ShieldCheck,
} from 'lucide-react';

const FeaturesAndTrustPage = () => {
  /* ---------------- FEATURES ---------------- */
  const features = [
    {
      icon: Gift,
      title: "3 Months Free Hosting",
      description: "Start your website with 3 months of premium hosting at zero cost.",
      highlight: "₹0 for 3 months",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Globe,
      title: "Free Domain & Setup",
      description: "Domain registration and complete website setup included.",
      highlight: "Save ₹2,000+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "SSL & Security",
      description: "Free SSL, malware protection, and daily security scans.",
      highlight: "Bank-grade security",
      color: "from-emerald-500 to-lime-500",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock server monitoring with expert support.",
      highlight: "99.9% uptime SLA",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: RefreshCw,
      title: "Free Website Migration",
      description: "Zero-downtime migration handled by certified experts.",
      highlight: "No data loss",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Zap,
      title: "Unlimited Hosting",
      description: "High-speed SSD storage with unlimited bandwidth.",
      highlight: "No limits",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const additionalFeatures = [
    "cPanel control panel",
    "One-click WordPress install",
    "Daily automated backups",
    "Acronis backup solutions",
    "DDoS protection",
    "PHP 8.x & MySQL support",
    "Email accounts included",
    "CDN integration",
    "99.9% uptime SLA",
    "30-day money-back guarantee",
    "Softaculous installer",
  ];

  /* ---------------- TRUST STATS ---------------- */
  const stats = [
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    icon: TrendingUp,
    description: "Enterprise-grade infrastructure",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    value: "50K+",
    label: "Websites Hosted",
    icon: Monitor,
    description: "Trusted globally",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    value: "24/7",
    label: "Expert Support",
    icon: Headphones,
    description: "Real humans, real help",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    value: "30-Day",
    label: "Money-Back Guarantee",
    icon: ShieldCheck,
    description: "Risk-free hosting",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];


  return (
    <>
      {/* ================= SEO (THIS PAGE ONLY) ================= */}
      <Helmet>
        <title>Why Choose SivWebAI | Premium Hosting & Trusted Web Solutions</title>
        <meta
          name="description"
          content="Discover why 50,000+ websites trust SivWebAI. Free hosting, free domain, SSL security, 99.9% uptime, and 24/7 expert support."
        />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Schema for SEO bots */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SivWebAI",
            url: "https://sivwebai.com",
            description:
              "Premium web hosting, domains, security, and end-to-end web solutions.",
            slogan: "End-to-End Web Solutions Partner",
            sameAs: [],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "50000",
            },
          })}
        </script>
      </Helmet>

      {/* ================= FEATURES SECTION ================= */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Why Choose <span className="text-primary">SivWebAI</span>?
            </h2>
            <p className="text-lg text-slate-600">
              Trusted hosting infrastructure built for performance, security, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border border-slate-200 shadow-lg hover:-translate-y-1 transition"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </CardTitle>
                  <span className="inline-block mt-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {additionalFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STATS SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-md border border-slate-200"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-extrabold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-slate-800">
                {stat.label}
              </div>
              <p className="text-sm text-slate-500 mt-1">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesAndTrustPage;
