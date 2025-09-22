import { Button } from "@/components/ui/button";
import { Shield, Users, DollarSign, Calculator, Megaphone, Building2, 
         Plane, Zap, Cross, Code, TrendingUp, Home } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
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
  const industries = [
    {
      icon: <Shield className="w-6 h-6" />,
      name: "Insurance Brokers",
      description: "Commercial & Personal Lines",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Employee Benefits",
      description: "HR & Benefits Consulting",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      name: "Financial Advisors",
      description: "Investment & Wealth Management",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      name: "CPA's & Accountants",
      description: "Tax & Accounting Services",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      name: "Digital Marketing",
      description: "Online Marketing Agencies",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      name: "Advertising Agencies",
      description: "Creative & Media Services",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      name: "Fund Raising",
      description: "Capital & Investment Services",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: <Plane className="w-6 h-6" />,
      name: "Tourism & Travel",
      description: "Travel & Hospitality Services",
      gradient: "from-sky-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      name: "Utilities",
      description: "Energy & Infrastructure",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Cross className="w-6 h-6" />,
      name: "Medical Practices",
      description: "Healthcare Services",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Software Companies",
      description: "B2B Tech Solutions",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Home className="w-6 h-6" />,
      name: "Real Estate",
      description: "Property & Investment",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section ref={sectionRef} id="industries" className="py-24 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-6 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              INDUSTRIES WE SERVE
            </h2>
            
            <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Transforming business operations across every sector with our 
              <span className="font-bold text-primary"> AI-powered solutions</span>
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className={`
                  group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 
                  border border-primary/10 hover:border-primary/30
                  shadow-lg hover:shadow-xl hover:shadow-primary/10
                  transition-all duration-500 cursor-pointer
                  hover:-translate-y-2 hover:scale-[1.02]
                  ai-glow
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                `}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Icon Background */}
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} 
                  flex items-center justify-center mb-4 shadow-lg
                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                `}>
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Hover Gradient */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 
                  bg-gradient-to-br ${industry.gradient} transition-opacity duration-300 pointer-events-none
                `}></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`
            text-center transition-all duration-700 delay-1000
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our growing network of satisfied clients across all industries. 
                Let's discuss how our AI solutions can revolutionize your operations.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  BOOK AN APPOINTMENT
                  <div className="group-hover:translate-x-1 transition-transform duration-300">→</div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;