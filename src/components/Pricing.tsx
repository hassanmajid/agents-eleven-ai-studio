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
    <section id="pricing" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-foreground transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Affordable. Transparent. Yours Forever!
            </h2>
            
            <p className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Starting at $4999, we'll create and deliver your custom AI system. No subscriptions, No hidden fees.
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className={`
            max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12
            border border-primary/20 hover:border-primary/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] ai-glow
            transition-all duration-700 delay-300
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
          `}>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Own Your AI System Outright
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                For a one-time investment starting at $4999, we'll build you a complete AI automation system tailored entirely to your business. From inbound and outbound agents to appointment schedulers, RAG-powered knowledge assistants, and full business pipeline automation, you'll get an intelligent system that runs on its own. Once it's delivered, it's 100% yours no recurring fees, no platform lock-ins.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="text-center">
                  <span className="text-5xl md:text-6xl font-bold text-primary">$4,999</span>
                  <span className="text-xl text-muted-foreground ml-2">starting price</span>
                </div>
              </div>

              <div className="bg-card/50 rounded-xl p-6 mb-8 border border-primary/10">
                <p className="text-muted-foreground mb-2">
                  <span className="font-semibold text-foreground">You own it outright</span> and only pay 
                  <span className="font-semibold text-primary"> Operational Costs</span> based on how much you use it.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  No monthly subscriptions • No hidden fees • Complete ownership
                </p>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#contact">Get Your Custom AI System</a>
              </Button>

              <p className="text-sm text-muted-foreground mt-6">
                Transparent pricing • Pay only for what you use • Full system ownership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;