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
    },
    '3': {
      id: 3,
      title: "Responsive Design Best Practices for Modern Web Development",
      content: `
        <h2>Why Responsive Design Matters More Than Ever</h2>
        <p>With mobile traffic accounting for over 58% of global web traffic, responsive design isn't just a nice-to-have—it's essential for business success. Our analysis of 500+ websites shows that responsive sites have 67% higher conversion rates.</p>
        
        <h2>Mobile-First Approach</h2>
        <p>Starting with mobile designs ensures your core content and functionality work on the most constrained devices first. This approach has helped our clients reduce bounce rates by an average of 23%.</p>
        
        <h3>Key Mobile-First Principles:</h3>
        <ul>
          <li>Progressive enhancement from small to large screens</li>
          <li>Touch-friendly interface elements (minimum 44px tap targets)</li>
          <li>Simplified navigation and streamlined content</li>
          <li>Optimized images and compressed assets</li>
        </ul>
        
        <h2>CSS Grid and Flexbox Mastery</h2>
        <p>Modern CSS layout systems have revolutionized responsive design. Here's how to leverage them effectively:</p>
        
        <h3>CSS Grid for Complex Layouts:</h3>
        <ul>
          <li>Perfect for magazine-style layouts and dashboards</li>
          <li>Use fr units for flexible column sizing</li>
          <li>Implement grid-template-areas for semantic layouts</li>
          <li>Combine with CSS subgrid for nested layouts</li>
        </ul>
        
        <h3>Flexbox for Component-Level Design:</h3>
        <ul>
          <li>Ideal for navigation bars and card layouts</li>
          <li>Use flex-wrap for responsive item wrapping</li>
          <li>Leverage align-items and justify-content for perfect alignment</li>
        </ul>
        
        <h2>Performance-First Responsive Images</h2>
        <p>Images account for 65% of average page weight. Our optimization strategy has reduced image load times by 45% across client projects:</p>
        
        <ul>
          <li>Use picture element with multiple source formats (WebP, AVIF)</li>
          <li>Implement srcset for different screen densities</li>
          <li>Add loading="lazy" for below-the-fold images</li>
          <li>Set explicit width and height to prevent layout shifts</li>
        </ul>
        
        <h2>Testing Across Real Devices</h2>
        <p>Browser dev tools are great, but nothing beats testing on actual devices. We maintain a device lab with 15+ devices representing different screen sizes, operating systems, and performance levels.</p>
        
        <h2>Common Responsive Design Mistakes</h2>
        <ul>
          <li>Not testing on actual devices</li>
          <li>Ignoring landscape orientation on mobile</li>
          <li>Using fixed pixel values instead of relative units</li>
          <li>Forgetting about touch interactions</li>
          <li>Not optimizing for intermediate screen sizes</li>
        </ul>
        
        <h2>Results We've Achieved</h2>
        <p>Implementing these responsive design practices has delivered measurable results for our clients:</p>
        <ul>
          <li>40% increase in mobile conversion rates</li>
          <li>60% reduction in mobile bounce rates</li>
          <li>25% improvement in overall user engagement</li>
          <li>30% faster page load times across all devices</li>
        </ul>
      `,
      author: "Emma Rodriguez",
      date: "January 8, 2024",
      readTime: "10 min read",
      views: "4.1k",
      comments: 35,
      category: "Web Development",
      image: "/src/assets/responsive-design-post.jpg",
      tags: ["Responsive Design", "CSS", "Mobile", "UX", "Performance"]
    },
    '4': {
      id: 4,
      title: "Website Performance Optimization: From 5s to 1.2s Load Time",
      content: `
        <h2>The Performance Crisis</h2>
        <p>We recently helped TechCorp reduce their homepage load time from 5.2 seconds to just 1.2 seconds, resulting in a 156% increase in conversions. Here's exactly how we did it.</p>
        
        <h2>Initial Performance Audit</h2>
        <p>Before optimization, TechCorp's site suffered from:</p>
        <ul>
          <li>Unoptimized images totaling 4.2MB</li>
          <li>37 render-blocking JavaScript files</li>
          <li>No content delivery network (CDN)</li>
          <li>Inefficient database queries averaging 2.1s</li>
        </ul>
        
        <h2>Image Optimization Strategy</h2>
        <p>Images were the biggest culprit, accounting for 78% of page weight. Our solution:</p>
        
        <h3>Format Modernization:</h3>
        <ul>
          <li>Converted JPEG images to WebP (45% size reduction)</li>
          <li>Implemented AVIF for modern browsers (65% size reduction)</li>
          <li>Used SVG for logos and simple graphics</li>
          <li>Applied progressive JPEG loading for large images</li>
        </ul>
        
        <h3>Responsive Image Implementation:</h3>
        <ul>
          <li>Created 5 different sizes for each image</li>
          <li>Used srcset and sizes attributes properly</li>
          <li>Implemented lazy loading for below-fold content</li>
          <li>Added proper alt text for accessibility</li>
        </ul>
        
        <h2>JavaScript Optimization</h2>
        <p>We reduced JavaScript bundle size by 68% through:</p>
        
        <ul>
          <li>Code splitting by route and component</li>
          <li>Tree shaking to eliminate unused code</li>
          <li>Dynamic imports for non-critical features</li>
          <li>Service worker implementation for caching</li>
        </ul>
        
        <h2>CSS Performance Improvements</h2>
        <ul>
          <li>Critical CSS inlining for above-fold content</li>
          <li>CSS minification and gzip compression</li>
          <li>Removed unused CSS rules (reduced by 52%)</li>
          <li>Implemented CSS containment for layout optimization</li>
        </ul>
        
        <h2>Server-Side Optimizations</h2>
        <p>Backend improvements delivered significant gains:</p>
        
        <ul>
          <li>Database query optimization reduced response time by 73%</li>
          <li>Implemented Redis caching for frequently accessed data</li>
          <li>Enabled gzip compression for all text-based assets</li>
          <li>Set up CDN with edge locations worldwide</li>
        </ul>
        
        <h2>Monitoring and Continuous Improvement</h2>
        <p>Performance optimization is ongoing. We implemented:</p>
        
        <ul>
          <li>Real User Monitoring (RUM) for actual user metrics</li>
          <li>Automated Lighthouse CI for regression detection</li>
          <li>Performance budgets to prevent future bloat</li>
          <li>Monthly performance audits and optimizations</li>
        </ul>
        
        <h2>Measurable Business Impact</h2>
        <p>The performance improvements delivered exceptional results:</p>
        
        <ul>
          <li>156% increase in conversion rate</li>
          <li>89% reduction in bounce rate</li>
          <li>234% improvement in page views per session</li>
          <li>67% increase in average session duration</li>
          <li>$2.3M additional annual revenue attributed to speed improvements</li>
        </ul>
      `,
      author: "Alex Thompson",
      date: "January 5, 2024",
      readTime: "15 min read",
      views: "5.8k",
      comments: 67,
      category: "Performance",
      image: "/src/assets/performance-optimization-post.jpg",
      tags: ["Performance", "Optimization", "Core Web Vitals", "Speed", "Conversion"]
    },
    '5': {
      id: 5,
      title: "E-commerce Security: Protecting Your Online Store from Cyber Threats",
      content: `
        <h2>The Rising Threat Landscape</h2>
        <p>E-commerce cyber attacks increased by 32% in 2024, with average data breach costs reaching $4.2 million. Our security audit of 100 online stores revealed that 78% had at least one critical vulnerability.</p>
        
        <h2>Essential Security Measures</h2>
        <h3>SSL/TLS Implementation</h3>
        <p>Every e-commerce site must have proper encryption:</p>
        <ul>
          <li>Use TLS 1.3 for maximum security</li>
          <li>Implement HTTP Strict Transport Security (HSTS)</li>
          <li>Set up proper certificate pinning</li>
          <li>Regular SSL certificate monitoring and renewal</li>
        </ul>
        
        <h3>Payment Security (PCI DSS Compliance)</h3>
        <ul>
          <li>Never store credit card data directly</li>
          <li>Use tokenization for payment processing</li>
          <li>Implement strong access controls</li>
          <li>Regular security testing and vulnerability scans</li>
        </ul>
        
        <h2>Advanced Threat Protection</h2>
        <p>Modern e-commerce sites face sophisticated attacks requiring advanced defenses:</p>
        
        <h3>Web Application Firewall (WAF):</h3>
        <ul>
          <li>Blocks SQL injection and XSS attacks</li>
          <li>Rate limiting to prevent DDoS attacks</li>
          <li>Geo-blocking for suspicious regions</li>
          <li>Real-time threat intelligence integration</li>
        </ul>
        
        <h3>Fraud Detection Systems:</h3>
        <ul>
          <li>Machine learning-based transaction analysis</li>
          <li>Device fingerprinting for user verification</li>
          <li>Behavioral analytics to detect anomalies</li>
          <li>Multi-factor authentication for high-value transactions</li>
        </ul>
        
        <h2>Data Protection and Privacy</h2>
        <p>Customer data protection isn't just good practice—it's legally required:</p>
        
        <ul>
          <li>GDPR compliance for European customers</li>
          <li>CCPA compliance for California residents</li>
          <li>Data encryption at rest and in transit</li>
          <li>Regular data backups with encryption</li>
          <li>Clear privacy policies and consent management</li>
        </ul>
        
        <h2>Security Monitoring and Incident Response</h2>
        <p>24/7 monitoring is crucial for early threat detection:</p>
        
        <ul>
          <li>Security Information and Event Management (SIEM)</li>
          <li>Automated threat detection and alerts</li>
          <li>Incident response playbooks</li>
          <li>Regular security drills and training</li>
        </ul>
        
        <h2>Mobile Security Considerations</h2>
        <p>With 73% of e-commerce traffic from mobile devices:</p>
        
        <ul>
          <li>Mobile app security testing</li>
          <li>API security for mobile backends</li>
          <li>Secure mobile payment integration</li>
          <li>App store security compliance</li>
        </ul>
        
        <h2>ROI of Security Investment</h2>
        <p>Our clients who implemented comprehensive security saw:</p>
        <ul>
          <li>99.7% reduction in successful cyber attacks</li>
          <li>85% decrease in fraud-related chargebacks</li>
          <li>34% increase in customer trust scores</li>
          <li>$1.2M average savings from prevented breaches</li>
        </ul>
      `,
      author: "Jennifer Kim",
      date: "January 3, 2024",
      readTime: "11 min read",
      views: "3.9k",
      comments: 41,
      category: "Security",
      image: "/src/assets/ecommerce-security-post.jpg",
      tags: ["Security", "E-commerce", "Cybersecurity", "PCI DSS", "Privacy"]
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