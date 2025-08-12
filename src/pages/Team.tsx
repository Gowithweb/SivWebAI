import { Helmet } from 'react-helmet-async';
import { Users, Code, Palette, Brain, Shield, Globe, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Lead Full-Stack Developer",
      avatar: "👨‍💻",
      bio: "10+ years of experience in React, Node.js, and cloud architecture. Passionate about creating scalable web solutions.",
      skills: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
      projects: 120,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Senior UI/UX Designer",
      avatar: "👩‍🎨",
      bio: "Award-winning designer specializing in user-centered design and modern web interfaces. 8 years of design experience.",
      skills: ["Figma", "Adobe CC", "Prototyping", "User Research", "Design Systems"],
      projects: 85,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Johnson",
      role: "DevOps Engineer",
      avatar: "👨‍🔧",
      bio: "Cloud infrastructure expert with expertise in Kubernetes, CI/CD, and automation. Ensures 99.9% uptime.",
      skills: ["Kubernetes", "Docker", "AWS", "Azure", "Terraform"],
      projects: 95,
      social: {
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Emma Thompson",
      role: "AI/ML Specialist",
      avatar: "👩‍🔬",
      bio: "PhD in Computer Science with focus on machine learning and natural language processing. Building the future with AI.",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Data Science"],
      projects: 65,
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Kim",
      role: "Cybersecurity Expert",
      avatar: "👨‍💼",
      bio: "Certified ethical hacker and security consultant. Protects businesses from cyber threats with advanced security solutions.",
      skills: ["Penetration Testing", "Security Audits", "Compliance", "Risk Assessment", "Incident Response"],
      projects: 75,
      social: {
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Lisa Wang",
      role: "Digital Marketing Manager",
      avatar: "👩‍💼",
      bio: "SEO and digital marketing expert helping businesses grow online. Data-driven approach to marketing success.",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Strategy"],
      projects: 110,
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const stats = [
    { label: "Team Members", value: "12+", icon: <Users className="w-6 h-6" /> },
    { label: "Projects Completed", value: "500+", icon: <Code className="w-6 h-6" /> },
    { label: "Years Experience", value: "8+", icon: <Brain className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "99%", icon: <Shield className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends and implement cutting-edge solutions for our clients."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Spirit",
      description: "Our diverse team works together to deliver exceptional results through teamwork and communication."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "We maintain the highest standards in code quality, security, and user experience."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Mindset",
      description: "We serve clients worldwide with 24/7 support and culturally aware solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Helmet>
        <title>Our Team | Expert Developers & Designers - GOwithWeb</title>
        <meta name="description" content="Meet our expert team of developers, designers, and digital specialists. Experienced professionals dedicated to delivering exceptional web solutions." />
        <meta name="keywords" content="web development team, expert developers, UI/UX designers, DevOps engineers, AI specialists, cybersecurity experts" />
        <link rel="canonical" href="https://gowithweb.com/team" />
        
        <meta property="og:title" content="Our Team | Expert Developers & Designers - GOwithWeb" />
        <meta property="og:description" content="Meet our expert team of developers, designers, and digital specialists. Experienced professionals dedicated to delivering exceptional web solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gowithweb.com/team" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team | Expert Developers & Designers - GOwithWeb" />
        <meta name="twitter:description" content="Meet our expert team of developers, designers, and digital specialists. Experienced professionals dedicated to delivering exceptional web solutions." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center items-center space-x-2 mb-6">
                <Users className="w-12 h-12 text-primary animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  Our Team
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Meet the passionate experts behind GOwithWeb's success. Our diverse team of 
                developers, designers, and specialists work together to bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Experts</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Talented professionals with diverse backgrounds and expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="interactive-card group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {member.avatar}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <Badge variant="outline" className="text-xs">
                        {member.projects}+ Projects
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-3 pt-4 border-t border-border">
                      {member.social.github && (
                        <Button size="sm" variant="ghost" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.linkedin && (
                        <Button size="sm" variant="ghost" className="p-2">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button size="sm" variant="ghost" className="p-2">
                          <Twitter className="w-4 h-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="p-2">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and define our culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Amazing Team
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We're always looking for talented individuals who share our passion 
              for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Users className="w-5 h-5 mr-2" />
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="w-5 h-5 mr-2" />
                Send Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;