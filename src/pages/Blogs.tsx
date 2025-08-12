import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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

const Blogs = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps and beyond.",
    author: "Sarah Johnson",
    date: "December 15, 2023",
    readTime: "8 min read",
    views: "2.4k",
    comments: 23,
    category: "Web Development",
    image: "/src/assets/featured-post.jpg",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "SEO Best Practices for 2024: A Complete Guide",
      excerpt: "Master the latest SEO techniques to boost your website's visibility and drive organic traffic.",
      author: "Mike Chen",
      date: "December 12, 2023",
      readTime: "6 min read",
      views: "1.8k",
      comments: 15,
      category: "SEO",
      image: "/src/assets/seo-post.jpg",
      tags: ["SEO", "Marketing", "Google"]
    },
    {
      id: 3,
      title: "Building Responsive Websites: Mobile-First Approach",
      excerpt: "Learn how to create websites that look great on all devices using mobile-first design principles.",
      author: "Emma Davis",
      date: "December 10, 2023",
      readTime: "5 min read",
      views: "1.2k",
      comments: 8,
      category: "Design",
      image: "/api/placeholder/400/250",
      tags: ["Responsive", "Mobile", "CSS"]
    },
    {
      id: 4,
      title: "E-commerce Security: Protecting Your Online Store",
      excerpt: "Essential security measures every e-commerce business should implement to protect customer data.",
      author: "David Wilson",
      date: "December 8, 2023",
      readTime: "7 min read",
      views: "950",
      comments: 12,
      category: "Security",
      image: "/api/placeholder/400/250",
      tags: ["Security", "E-commerce", "SSL"]
    },
    {
      id: 5,
      title: "React vs Vue: Choosing the Right Framework",
      excerpt: "Compare the pros and cons of React and Vue.js to make an informed decision for your next project.",
      author: "Lisa Anderson",
      date: "December 5, 2023",
      readTime: "10 min read",
      views: "2.1k",
      comments: 31,
      category: "Development",
      image: "/src/assets/react-vue-post.jpg",
      tags: ["React", "Vue", "JavaScript"]
    },
    {
      id: 6,
      title: "Digital Marketing Strategies That Actually Work",
      excerpt: "Proven digital marketing strategies to grow your business and increase conversions.",
      author: "Tom Rodriguez",
      date: "December 3, 2023",
      readTime: "9 min read",
      views: "1.5k",
      comments: 19,
      category: "Marketing",
      image: "/api/placeholder/400/250",
      tags: ["Marketing", "Strategy", "Growth"]
    },
    {
      id: 7,
      title: "The Complete Guide to Website Performance Optimization",
      excerpt: "Speed up your website with these proven performance optimization techniques and tools.",
      author: "Kelly Brown",
      date: "November 30, 2023",
      readTime: "12 min read",
      views: "1.7k",
      comments: 22,
      category: "Performance",
      image: "/api/placeholder/400/250",
      tags: ["Performance", "Speed", "Optimization"]
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
      title: "10 Common Web Development Mistakes to Avoid",
      date: "December 14, 2023",
      views: "890"
    },
    {
      title: "How to Choose the Right Hosting Provider",
      date: "December 11, 2023",
      views: "1.1k"
    },
    {
      title: "WordPress vs Custom Development: Pros and Cons",
      date: "December 9, 2023",
      views: "760"
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
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/src/assets/blog-hero.jpg" 
                alt="Tech Blog Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <Badge className="mb-6 bg-gradient-primary text-white border-0">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Tech Blog
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Insights & Tutorials
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Stay ahead with the latest web development trends, SEO strategies, 
                  and digital marketing insights from our team of experts.
                </p>
                <Button variant="hero" size="lg">
                  Explore Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
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
                    
                    <Button variant="hero" className="group">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
                          
                          <Button variant="outline" className="w-full group">
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
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