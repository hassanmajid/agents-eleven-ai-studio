import { useState, useEffect, useRef } from "react";
import { DollarSign, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-foreground transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              PRICING THAT WORKS
            </h2>
            
            <p className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Affordable solutions that deliver real results for your business
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className={`
              bg-card rounded-2xl p-8 text-center border-primary/20 hover:border-primary/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] ai-glow
              transition-all duration-700
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}
            style={{ transitionDelay: '300ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">$15</h3>
              <p className="text-lg text-foreground mb-2">Per Hour</p>
              <p className="text-muted-foreground">Competitive hourly rate for premium services</p>
            </div>

            <div className={`
              bg-card rounded-2xl p-8 text-center border-primary/20 hover:border-primary/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] ai-glow
              transition-all duration-700
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}
            style={{ transitionDelay: '500ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">17</h3>
              <p className="text-lg text-foreground mb-2">Satisfied Clients</p>
              <p className="text-muted-foreground">Growing network of successful partnerships</p>
            </div>

            <div className={`
              bg-card rounded-2xl p-8 text-center border-primary/20 hover:border-primary/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] ai-glow
              transition-all duration-700
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}
            style={{ transitionDelay: '700ms' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-lg text-foreground mb-2">Availability</p>
              <p className="text-muted-foreground">Round-the-clock support when you need it</p>
            </div>
          </div>

          {/* Main Pricing Card */}
          <div className={`
            max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12
            border border-primary/20 hover:border-primary/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] ai-glow
            transition-all duration-700 delay-900
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
          `}>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Simple, Transparent Pricing
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our clients have trusted us with their business operations, and we deliver exceptional results at just $15 per hour. Join our growing family of 17 satisfied clients who have experienced the difference our AI-powered solutions make.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="text-center">
                  <span className="text-5xl md:text-6xl font-bold text-primary">$15</span>
                  <span className="text-xl text-muted-foreground ml-2">/hour</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </Button>

              <p className="text-sm text-muted-foreground mt-6">
                No setup fees • No long-term contracts • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;