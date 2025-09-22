import { Button } from "@/components/ui/button";
import { Shield, Users, DollarSign, Calculator, Megaphone, Building2, 
         Plane, Zap, Cross, Code } from "lucide-react";
import workflowImage from "@/assets/workflow-dashboard.jpg";
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
      icon: <Shield className="w-5 h-5" />,
      name: "Insurance Brokers (Commercial & Personal Lines)"
    },
    {
      icon: <Users className="w-5 h-5" />,
      name: "Employee Benefits Firms"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      name: "Financial Advisors"
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      name: "CPA's & Accountants"
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      name: "Digital Marketing Companies"
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      name: "Advertising"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      name: "Fund Raising"
    },
    {
      icon: <Plane className="w-5 h-5" />,
      name: "Tourism & Travel"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      name: "Utilities"
    },
    {
      icon: <Cross className="w-5 h-5" />,
      name: "Medical Practices"
    },
    {
      icon: <Code className="w-5 h-5" />,
      name: "B2B Software Companies (Website/App Development, Management Systems etc."
    }
  ];

  return (
    <section ref={sectionRef} id="industries" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center lg:text-left mb-16">
            <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-foreground transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              INDUSTRIES
            </h2>
            
            <p className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              There's no doubt, what we do works for Literally <span className="font-bold">EVERYONE</span>.......!
            </p>
          </div>

          {/* Main Content Layout */}
          <div className="relative">
            {/* Desktop & Tablet Layout */}
            <div className="hidden md:flex md:items-start md:gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="flex-1 relative z-10">
                <p className={`text-lg font-semibold text-foreground mb-6 transition-all duration-700 delay-300 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>We currently work with:</p>
                
                <div className="space-y-4 pr-4 md:pr-8 lg:pr-12">
                  {industries.map((industry, index) => (
                    <div 
                      key={index}
                      className={`
                        flex items-center gap-3 p-2 rounded-lg
                        transition-all duration-300 cursor-pointer
                        hover:transform hover:translate-y-[-2px] hover:brightness-105
                        group relative
                        ${prefersReducedMotion 
                          ? (isVisible ? 'opacity-100' : 'opacity-0')
                          : `transition-all duration-[120ms] ${
                              isVisible 
                                ? 'translate-x-0 translate-y-0 opacity-100' 
                                : 'translate-x-[-20px] translate-y-2 opacity-0'
                            }`
                        }
                      `}
                      style={{ 
                        transitionDelay: prefersReducedMotion ? '0ms' : `${400 + index * 90}ms`,
                        transitionTimingFunction: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
                        willChange: isVisible ? 'auto' : 'transform, opacity',
                        lineHeight: '1.5'
                      }}
                    >
                      <div className="text-primary flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                        {industry.icon}
                      </div>
                      <span className="text-muted-foreground leading-relaxed py-1">{industry.name}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className={`mt-8 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-700 delay-[1400ms] ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  BOOK AN APPOINTMENT
                </Button>
              </div>

              {/* Right Image with Soft Overlap */}
              <div className="relative flex-1 lg:flex-[1.2]">
                <div className={`
                  relative transition-all duration-1000 delay-700
                  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
                `}>
                  <div className="
                    relative rounded-2xl overflow-hidden shadow-2xl
                    md:ml-[-16px] lg:ml-[-32px]
                    md:w-[116%] lg:w-[120%]
                  ">
                    <img 
                      src={workflowImage} 
                      alt="Professional analytics dashboard showing workflow optimization and business intelligence data visualization"
                      className="w-full h-auto object-cover object-left loading-lazy"
                      loading="lazy"
                      style={{
                        maskImage: 'radial-gradient(ellipse at right center, transparent 0%, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0.8) 25%, black 40%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at right center, transparent 0%, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0.8) 25%, black 40%)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                    
                    {/* Soft glow effect for overlap */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-primary/5 to-transparent"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-ai-primary rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-ai-electric rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* Mobile Image */}
              <div className={`
                relative mb-8 transition-all duration-1000 delay-300
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[60vh]">
                  <img 
                    src={workflowImage} 
                    alt="Professional analytics dashboard showing workflow optimization and business intelligence data visualization"
                    className="w-full h-full object-cover object-center loading-lazy"
                    loading="lazy"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.1) 95%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.1) 95%, transparent 100%)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                </div>
              </div>

              {/* Mobile List */}
              <div>
                <p className={`text-lg font-semibold text-foreground mb-6 transition-all duration-700 delay-500 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>We currently work with:</p>
                
                <div className="space-y-4">
                  {industries.map((industry, index) => (
                    <div 
                      key={index}
                      className={`
                        flex items-center gap-3 p-2 rounded-lg
                        transition-all duration-300
                        group relative
                        ${prefersReducedMotion 
                          ? (isVisible ? 'opacity-100' : 'opacity-0')
                          : `transition-all duration-[120ms] ${
                              isVisible 
                                ? 'translate-x-0 translate-y-0 opacity-100' 
                                : 'translate-x-[-20px] translate-y-2 opacity-0'
                            }`
                        }
                      `}
                      style={{ 
                        transitionDelay: prefersReducedMotion ? '0ms' : `${600 + index * 90}ms`,
                        transitionTimingFunction: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
                        willChange: isVisible ? 'auto' : 'transform, opacity',
                        lineHeight: '1.5'
                      }}
                    >
                      <div className="text-primary flex-shrink-0">
                        {industry.icon}
                      </div>
                      <span className="text-muted-foreground leading-relaxed py-1">{industry.name}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className={`mt-8 w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-700 delay-[1600ms] ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  BOOK AN APPOINTMENT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;