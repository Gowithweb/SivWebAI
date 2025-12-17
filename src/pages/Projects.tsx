import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Star,
  Calendar,
  Users,
  TrendingUp,
  Globe,
  ShoppingCart,
  Building,
  Heart,
  GraduationCap,
  Utensils
} from 'lucide-react';
import techcorpImg from '@/assets/techcorp-platform.jpg';
import ecoshopImg from '@/assets/ecoshop-platform.jpg';
import medicareImg from '@/assets/medicare-portal.jpg';
import foodieImg from '@/assets/foodie-app.jpg';
import eduImg from '@/assets/edulearn-lms.jpg';
import artistImg from '@/assets/artist-portfolio.jpg';
import financeImg from '@/assets/finance-dashboard.jpg';
import fitnessImg from '@/assets/fitness-app.jpg';
import marketImg from '@/assets/local-market.jpg';
import projectsHero from '@/assets/projects-hero.jpg';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "TechCorp Enterprise Platform",
      category: "Enterprise Software",
      description: "Complete enterprise management system with advanced analytics and reporting capabilities",
      image: techcorpImg,
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      features: ["Real-time Analytics", "Role-based Access", "API Integration", "Mobile Responsive"],
      client: "TechCorp Inc.",
      duration: "6 months",
      results: "40% increase in productivity",
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "EcoShop E-commerce Platform",
      category: "E-commerce",
      description: "Sustainable products marketplace with advanced filtering and recommendation engine",
      image: ecoshopImg,
      technologies: ["Next.js", "Stripe", "MongoDB", "Vercel"],
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
      client: "EcoShop Ltd.",
      duration: "4 months",
      results: "200% increase in online sales",
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "MediCare Health Portal",
      category: "Healthcare",
      description: "Patient management system with appointment scheduling and telemedicine features",
      image: medicareImg,
      technologies: ["Vue.js", "Express", "MySQL", "Socket.io"],
      features: ["Appointment Booking", "Video Consultations", "Medical Records", "Prescription Management"],
      client: "MediCare Hospital",
      duration: "8 months",
      results: "60% reduction in waiting times",
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: false
    }
  ];

  const projectCategories = [
    {
      name: "E-commerce",
      count: 45,
      icon: ShoppingCart,
      description: "Online stores and marketplaces"
    },
    {
      name: "Corporate",
      count: 38,
      icon: Building,
      description: "Business websites and portals"
    },
    {
      name: "Healthcare",
      count: 22,
      icon: Heart,
      description: "Medical and wellness platforms"
    },
    {
      name: "Education",
      count: 31,
      icon: GraduationCap,
      description: "Learning management systems"
    },
    {
      name: "Restaurant",
      count: 28,
      icon: Utensils,
      description: "Food delivery and booking"
    },
    {
      name: "Portfolio",
      count: 56,
      icon: Globe,
      description: "Personal and professional sites"
    }
  ];

  const allProjects = [
    {
      title: "FoodieHub Delivery App",
      category: "Restaurant",
      description: "Multi-restaurant food delivery platform with real-time tracking",
      technologies: ["React Native", "Firebase", "Node.js"],
      image: foodieImg
    },
    {
      title: "EduLearn LMS",
      category: "Education",
      description: "Comprehensive learning management system for online education",
      technologies: ["Angular", "Spring Boot", "PostgreSQL"],
      image: eduImg
    },
    {
      title: "ArtistPortfolio Pro",
      category: "Portfolio",
      description: "Dynamic portfolio website for creative professionals",
      technologies: ["Gatsby", "Contentful", "Netlify"],
      image: artistImg
    },
    {
      title: "FinanceTracker Dashboard",
      category: "Corporate",
      description: "Advanced financial analytics and reporting dashboard",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
      image: financeImg
    },
    {
      title: "FitnessPro App",
      category: "Healthcare",
      description: "Personal fitness tracking and workout planning application",
      technologies: ["Flutter", "Firebase", "Machine Learning"],
      image: fitnessImg
    },
    {
      title: "LocalMarket Platform",
      category: "E-commerce",
      description: "Local marketplace connecting buyers with nearby sellers",
      technologies: ["Next.js", "Supabase", "Stripe"],
      image: marketImg
    }
  ];

  const stats = [
    { number: "220+", label: "Projects Completed", icon: TrendingUp },
    { number: "95%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5", label: "Years Experience", icon: Calendar }
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects - SivWebAI Portfolio | Successful Web Solutions</title>
        <meta name="description" content="Explore our portfolio of successful web development projects. From e-commerce platforms to enterprise solutions, see how we help businesses succeed online." />
        <meta name="keywords" content="web development portfolio, project showcase, e-commerce development, enterprise solutions, mobile apps, case studies, React projects, Node.js projects" />
        <link rel="canonical" href="https://sivwebai.com/projects" />
        <meta property="og:title" content="Our Projects - Professional Web Development Portfolio" />
        <meta property="og:description" content="Browse our successful web development projects and see how we transform ideas into digital success stories." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sivwebai.com/projects" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <Badge className="mb-6 bg-primary text-white border-0">
                    Our Portfolio
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Success Stories
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Discover our portfolio of successful web development projects that have helped 
                    businesses grow, engage customers, and achieve their digital goals.
                  </p>
                  <Button size="lg">
                    View All Projects
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={projectsHero} 
                      alt="Projects Portfolio - Professional Workspace" 
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-success/20 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore our most impactful projects that showcase our expertise and innovation
                </p>
              </div>

              <div className="space-y-16">
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    <div className="lg:w-1/2">
                      <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {project.featured && (
                          <Badge className="absolute top-4 left-4 bg-gradient-primary text-white border-0">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 space-y-6">
                      <div>
                        <Badge variant="outline" className="mb-3">{project.category}</Badge>
                        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.features.map((feature, idx) => (
                              <Badge key={idx} variant="secondary">{feature}</Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline">{tech}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Client</div>
                            <div className="font-medium">{project.client}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Duration</div>
                            <div className="font-medium">{project.duration}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Results</div>
                            <div className="font-medium text-success">{project.results}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="hero">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Site
                        </Button>
                        <Button variant="outline">
                          Read Case Study
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Project Categories */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Project Categories</h2>
                <p className="text-xl text-muted-foreground">
                  We specialize in various industries and project types
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectCategories.map((category, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <p className="text-muted-foreground">{category.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary mb-2">{category.count}</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* All Projects Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">More Projects</h2>
                <p className="text-xl text-muted-foreground">
                  Explore more of our successful web development projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="outline" className="bg-white text-black hover:bg-white/90">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">{project.category}</Badge>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create something amazing together. Get in touch to discuss your ideas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start Your Project
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Projects;