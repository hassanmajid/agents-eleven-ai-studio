import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      company: "TechCorp Solutions",
      industry: "Software Development",
      challenge: "Manual code review processes causing 3-day deployment delays",
      solution: "AI-powered code analysis and automated testing workflows",
      results: [
        { icon: <Clock className="w-4 h-4" />, metric: "85%", label: "Faster Deployments" },
        { icon: <TrendingUp className="w-4 h-4" />, metric: "99.2%", label: "Code Quality Score" },
        { icon: <DollarSign className="w-4 h-4" />, metric: "$2.1M", label: "Annual Savings" }
      ],
      tags: ["AI Analysis", "Workflow Automation", "DevOps"]
    },
    {
      company: "Global Finance Group",
      industry: "Financial Services",
      challenge: "Processing thousands of loan applications manually each month",
      solution: "Intelligent document processing and risk assessment automation",
      results: [
        { icon: <Clock className="w-4 h-4" />, metric: "72%", label: "Processing Time Reduction" },
        { icon: <TrendingUp className="w-4 h-4" />, metric: "94%", label: "Accuracy Improvement" },
        { icon: <Users className="w-4 h-4" />, metric: "15K+", label: "Applications/Month" }
      ],
      tags: ["Document AI", "Risk Assessment", "Banking"]
    },
    {
      company: "RetailMax Chain",
      industry: "E-commerce",
      challenge: "Customer service overwhelmed with 10K+ daily inquiries",
      solution: "AI chatbot integration with personalized response system",
      results: [
        { icon: <Users className="w-4 h-4" />, metric: "89%", label: "Customer Satisfaction" },
        { icon: <Clock className="w-4 h-4" />, metric: "24/7", label: "Support Availability" },
        { icon: <DollarSign className="w-4 h-4" />, metric: "60%", label: "Support Cost Reduction" }
      ],
      tags: ["AI Chatbot", "Customer Service", "E-commerce"]
    }
  ];

  const testimonials = [
    {
      quote: "Agents Eleven transformed our entire development pipeline. What used to take weeks now happens in hours.",
      author: "Sarah Chen",
      role: "CTO, TechCorp Solutions",
      company: "TechCorp"
    },
    {
      quote: "The AI solution didn't just automate our processes—it made them smarter and more reliable than ever.",
      author: "Michael Rodriguez",
      role: "Operations Director, Global Finance Group",
      company: "Global Finance"
    }
  ];

  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Real Results from <span className="text-primary glow-text">Real Businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped companies across industries transform their operations 
              with intelligent automation and AI-powered workflows.
            </p>
          </div>

          {/* Case Studies */}
          <div className="grid lg:grid-cols-1 gap-8 mb-16">
            {cases.map((caseStudy, index) => (
              <Card 
                key={index}
                className="group p-8 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-card ai-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      {caseStudy.company}
                    </h3>
                    <p className="text-muted-foreground mb-4">{caseStudy.industry}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-foreground mb-6">Key Results</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                            {result.icon}
                          </div>
                          <div className="text-3xl font-bold text-primary mb-2 font-display">
                            {result.metric}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/30 backdrop-blur-sm border-primary/10 ai-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="mb-6">
                  <div className="text-4xl text-primary mb-4 font-display">"</div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-ai-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the growing number of businesses that have transformed their operations with our AI solutions.
            </p>
            <Button size="lg" className="bg-gradient-ai-primary ai-glow hover:shadow-ai-intense transition-all duration-300">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;