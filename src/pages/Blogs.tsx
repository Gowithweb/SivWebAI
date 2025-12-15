import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  MessageCircle, 
  ArrowRight, 
  TrendingUp,
  Code,
  Globe,
  Search,
  Megaphone,
  Shield,
  Smartphone,
  Star
} from 'lucide-react';
import blogHeroNew from '@/assets/blog-hero-new.jpg';

const Blogs = () => {
  const featuredPost = {
    id: 1,
    title: "The Complete Guide to Modern JavaScript Frameworks in 2024",
    excerpt: "React, Vue, Angular, and Svelte have transformed web development. Learn which framework suits your next project best with real-world examples, performance comparisons, and industry adoption rates from Fortune 500 companies.",
    author: "Sarah Johnson",
    date: "January 15, 2024",
    readTime: "12 min read",
    views: "3.7k",
    comments: 42,
    category: "Web Development",
    image: "/src/assets/featured-post.jpg",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Google Core Web Vitals: What Changed in 2024 and How to Adapt",
      excerpt: "Google's latest algorithm updates prioritize user experience metrics. Learn how to optimize LCP, FID, and CLS scores with actionable techniques that improved our clients' rankings by 150% on average.",
      author: "Mike Chen",
      date: "January 10, 2024",
      readTime: "8 min read",
      views: "2.3k",
      comments: 28,
      category: "SEO",
      image: "/src/assets/seo-post.jpg",
      tags: ["SEO", "Core Web Vitals", "Google", "Performance"]
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Each in 2024",
      excerpt: "Real-world examples of when CSS Grid outperforms Flexbox and vice versa. Includes performance benchmarks, browser compatibility data, and code examples from major websites like Netflix and Spotify.",
      author: "Emma Davis",
      date: "January 8, 2024",
      readTime: "7 min read",
      views: "1.8k",
      comments: 15,
      category: "Design",
      image: "/src/assets/responsive-design-post.jpg",
      tags: ["CSS", "Grid", "Flexbox", "Responsive"]
    },
    {
      id: 4,
      title: "E-commerce Security Breaches: 5 Real Cases & Prevention Strategies",
      excerpt: "Analysis of recent security breaches at major retailers including Target and Shopify stores. Learn from their mistakes with our 12-point security checklist that prevented attacks on 200+ client stores.",
      author: "David Wilson",
      date: "January 5, 2024",
      readTime: "11 min read",
      views: "1.4k",
      comments: 33,
      category: "Security",
      image: "/src/assets/ecommerce-security-post.jpg",
      tags: ["Security", "E-commerce", "SSL", "Payment Processing"]
    },
    {
      id: 5,
      title: "React Server Components: Production Ready or Experimental?",
      excerpt: "We tested React Server Components in 10 production apps. Here's what worked, what didn't, and whether you should migrate from Next.js App Router. Includes performance metrics and migration costs.",
      author: "Lisa Anderson",
      date: "January 3, 2024",
      readTime: "14 min read",
      views: "2.9k",
      comments: 56,
      category: "Development",
      image: "/src/assets/react-vue-post.jpg",
      tags: ["React", "Server Components", "Next.js", "Performance"]
    },
    {
      id: 6,
      title: "PPC Campaign Optimization: How We Reduced CPA by 67%",
      excerpt: "Case study of optimizing Google Ads and Facebook campaigns for a SaaS startup. Detailed breakdown of bid strategies, audience targeting, and creative testing that generated $2.3M in revenue.",
      author: "Tom Rodriguez",
      date: "December 30, 2023",
      readTime: "10 min read",
      views: "2.1k",
      comments: 41,
      category: "Marketing",
      image: "/src/assets/digital-marketing-post.jpg",
      tags: ["PPC", "Google Ads", "Facebook Ads", "ROI"]
    },
    {
      id: 7,
      title: "Core Web Vitals Optimization: From 2.8s to 0.6s Load Time",
      excerpt: "Step-by-step guide to optimizing website performance using Lighthouse, WebPageTest, and custom monitoring. Real case study showing how we improved an e-commerce site's conversion rate by 23%.",
      author: "Kelly Brown",
      date: "December 28, 2023",
      readTime: "15 min read",
      views: "2.7k",
      comments: 38,
      category: "Performance",
      image: "/src/assets/performance-optimization-post.jpg",
      tags: ["Performance", "Web Vitals", "Speed", "Conversion"]
    }
  ];

  const categories = [
    { name: "Web Development", count: 24, icon: Code, color: "bg-blue-500" },
    { name: "SEO", count: 18, icon: Search, color: "bg-green-500" },
    { name: "Digital Marketing", count: 15, icon: Megaphone, color: "bg-purple-500" },
    { name: "Design", count: 12, icon: Globe, color: "bg-pink-500" },
    { name: "Security", count: 9, icon: Shield, color: "bg-red-500" },
    { name: "Mobile", count: 7, icon: Smartphone, color: "bg-orange-500" }
  ];

  const popularTags = [
    "JavaScript", "React", "SEO", "Web Design", "E-commerce", "Mobile", 
    "Performance", "Security", "Marketing", "CSS", "Node.js", "WordPress"
  ];

  const recentPosts = [
    {
      title: "Node.js vs Deno: Performance Comparison 2024",
      date: "January 12, 2024",
      views: "1.2k"
    },
    {
      title: "AWS vs Azure vs GCP: Cost Analysis for Startups",
      date: "January 9, 2024",
      views: "1.8k"
    },
    {
      title: "Docker Container Security: Production Best Practices",
      date: "January 6, 2024",
      views: "950"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Blog - GOwithWeb | Latest Tech Insights & Tutorials</title>
        <meta name="description" content="Stay updated with the latest web development trends, SEO tips, digital marketing strategies, and technology insights. Expert advice for modern businesses." />
        <meta name="keywords" content="web development blog, SEO tips, digital marketing, web design, programming tutorials, technology insights, business growth" />
        <link rel="canonical" href="https://gowithweb.com/blog" />
        <meta property="og:title" content="Web Development Blog - Latest Tech Insights & Tutorials" />
        <meta property="og:description" content="Expert advice on web development, SEO, digital marketing, and business growth strategies." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://gowithweb.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "GOwithWeb Blog",
            "description": "Web development and digital marketing insights",
            "url": "https://gowithweb.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "GOwithWeb"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <Badge className="mb-6 bg-primary text-white border-0">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Tech Blog
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Insights & Tutorials
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Stay ahead with the latest web development trends, SEO strategies, 
                    and digital marketing insights from our team of experts.
                  </p>
                  <Button size="lg">
                    Explore Articles
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={blogHeroNew} 
                      alt="Blog and Tech Insights" 
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-success/20 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-2">Featured Article</h2>
                <p className="text-muted-foreground">Don't miss our latest insights</p>
              </div>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-gradient-primary text-white border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge variant="outline">{featuredPost.category}</Badge>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views}
                      </div>
                    </div>
                    
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button variant="hero" className="group">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-2/3">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
                    <p className="text-muted-foreground">Fresh insights from our experts</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="relative">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <Badge className="absolute top-4 left-4" variant="secondary">
                            {post.category}
                          </Badge>
                        </div>
                        
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-4">
                              <span>{post.author}</span>
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                {post.views}
                              </div>
                              <div className="flex items-center">
                                <MessageCircle className="w-3 h-3 mr-1" />
                                {post.comments}
                              </div>
                            </div>
                          </div>
                          
                          <Link to={`/blog/${post.id}`}>
                            <Button variant="outline" className="w-full group">
                              Read More
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <Button variant="outline" size="lg">
                      Load More Articles
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3 space-y-8">
                  {/* Categories */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Categories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center mr-3`}>
                              <category.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <Badge variant="secondary">{category.count}</Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Popular Tags */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Popular Tags</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {popularTags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Posts */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Recent Posts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentPosts.map((post, index) => (
                        <div key={index} className="p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                          <h4 className="font-medium mb-2 line-clamp-2 hover:text-primary transition-colors">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="mr-3">{post.date}</span>
                            <Eye className="w-3 h-3 mr-1" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Newsletter */}
                  <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardHeader>
                      <CardTitle className="text-xl">Stay Updated</CardTitle>
                      <p className="text-muted-foreground">Subscribe to our newsletter for the latest insights</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full p-3 border rounded-lg"
                      />
                      <Button variant="hero" className="w-full">
                        Subscribe Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get expert advice and start your digital transformation journey today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Free Consultation
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                  Explore Our Services
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

export default Blogs;