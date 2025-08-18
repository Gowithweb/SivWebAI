import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  MessageCircle, 
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp
} from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog posts data
  const blogPosts = {
    '1': {
      id: 1,
      title: "The Complete Guide to Modern JavaScript Frameworks in 2024",
      content: `
        <h2>Introduction to Modern JavaScript Frameworks</h2>
        <p>The JavaScript ecosystem has evolved dramatically over the past decade. With the rise of React, Vue, Angular, and Svelte, developers now have more powerful tools than ever to build dynamic, scalable web applications.</p>
        
        <h2>React: The Industry Standard</h2>
        <p>React continues to dominate the market with its component-based architecture and virtual DOM. Major companies like Facebook, Netflix, and Airbnb rely on React for their core applications.</p>
        
        <h3>Key React Features:</h3>
        <ul>
          <li>Virtual DOM for optimal performance</li>
          <li>Component reusability</li>
          <li>Strong ecosystem and community support</li>
          <li>Hooks for state management</li>
        </ul>
        
        <h2>Vue.js: The Progressive Framework</h2>
        <p>Vue.js has gained significant traction due to its gentle learning curve and progressive adoption strategy. It's particularly popular among developers transitioning from jQuery or other traditional approaches.</p>
        
        <h2>Angular: The Enterprise Solution</h2>
        <p>Angular, backed by Google, provides a comprehensive solution for large-scale applications with its TypeScript foundation and extensive CLI tools.</p>
        
        <h2>Performance Comparison</h2>
        <p>Based on our analysis of 50+ production applications:</p>
        <ul>
          <li>React: Average load time 2.3s</li>
          <li>Vue: Average load time 2.1s</li>
          <li>Angular: Average load time 2.8s</li>
          <li>Svelte: Average load time 1.9s</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Choose React for large teams and complex applications, Vue for rapid prototyping and smaller projects, Angular for enterprise applications, and Svelte for performance-critical applications.</p>
      `,
      author: "Sarah Johnson",
      date: "January 15, 2024",
      readTime: "12 min read",
      views: "3.7k",
      comments: 42,
      category: "Web Development",
      image: "/src/assets/featured-post.jpg",
      tags: ["JavaScript", "React", "Vue", "Angular", "Web Development"]
    },
    '2': {
      id: 2,
      title: "Google Core Web Vitals: What Changed in 2024 and How to Adapt",
      content: `
        <h2>Understanding Core Web Vitals</h2>
        <p>Google's Core Web Vitals have become crucial ranking factors, directly impacting your website's search visibility and user experience.</p>
        
        <h2>The Three Pillars</h2>
        <h3>1. Largest Contentful Paint (LCP)</h3>
        <p>LCP measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</p>
        
        <h3>2. First Input Delay (FID)</h3>
        <p>FID measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less.</p>
        
        <h3>3. Cumulative Layout Shift (CLS)</h3>
        <p>CLS measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1 or less.</p>
        
        <h2>2024 Updates</h2>
        <p>Google introduced new metrics and adjusted thresholds:</p>
        <ul>
          <li>Interaction to Next Paint (INP) replacing FID</li>
          <li>Stricter mobile performance requirements</li>
          <li>Enhanced importance of page experience signals</li>
        </ul>
        
        <h2>Optimization Strategies</h2>
        <p>Our team has helped over 200 websites improve their Core Web Vitals scores. Here are the most effective techniques:</p>
        
        <h3>LCP Optimization:</h3>
        <ul>
          <li>Optimize images and use next-gen formats (WebP, AVIF)</li>
          <li>Implement proper preloading for critical resources</li>
          <li>Use a Content Delivery Network (CDN)</li>
          <li>Minimize server response times</li>
        </ul>
        
        <h3>CLS Optimization:</h3>
        <ul>
          <li>Set size attributes for images and videos</li>
          <li>Reserve space for dynamic content</li>
          <li>Avoid inserting content above existing content</li>
        </ul>
        
        <h2>Real-World Results</h2>
        <p>After implementing these optimizations, our clients saw:</p>
        <ul>
          <li>150% average improvement in search rankings</li>
          <li>35% increase in organic traffic</li>
          <li>28% improvement in user engagement metrics</li>
        </ul>
      `,
      author: "Mike Chen",
      date: "January 10, 2024",
      readTime: "8 min read",
      views: "2.3k",
      comments: 28,
      category: "SEO",
      image: "/src/assets/seo-post.jpg",
      tags: ["SEO", "Performance", "Google", "Web Vitals"]
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button className="btn-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | GOwithWeb Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.substring(0, 160)} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Back to Blog */}
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="relative mb-8 rounded-xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <Badge className="mb-4 bg-primary text-primary-foreground">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              {post.title}
            </h1>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Eye className="mr-2 h-4 w-4" />
                <span>{post.views} views</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>{post.comments} comments</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12 text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Comments ({post.comments})</h3>
              <p className="text-muted-foreground">Comments feature coming soon...</p>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-0">
                  <img 
                    src="/src/assets/responsive-design-post.jpg" 
                    alt="Responsive Design"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <Badge className="mb-2">Web Development</Badge>
                    <h4 className="font-semibold mb-2">Responsive Design Best Practices</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn how to create websites that work perfectly on all devices...
                    </p>
                    <Link to="/blog/3">
                      <Button variant="outline" size="sm">Read More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-0">
                  <img 
                    src="/src/assets/performance-optimization-post.jpg" 
                    alt="Performance Optimization"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <Badge className="mb-2">Performance</Badge>
                    <h4 className="font-semibold mb-2">Website Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Speed up your website with these proven optimization techniques...
                    </p>
                    <Link to="/blog/4">
                      <Button variant="outline" size="sm">Read More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;