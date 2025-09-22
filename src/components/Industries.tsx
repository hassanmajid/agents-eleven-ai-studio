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
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      name: "Real Estate Agencies"
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
            {/* Centered Heading */}
            <div className="text-center mb-12">
              <h3 className={`text-lg font-semibold text-foreground transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>We currently work with:</h3>
            </div>

            {/* Desktop & Tablet Layout - Floating Blocks */}
            <div className="hidden md:block relative min-h-[500px] mb-12">
              {/* Background Image - Only covers block area */}
              <div className="absolute inset-x-16 top-0 bottom-16 rounded-2xl overflow-hidden">
                <img 
                  src={workflowImage} 
                  alt="Analyst reviewing multi-screen dashboards"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/20"></div>
              </div>

              {/* Left Side Industries - Aligned to face center */}
              <div className="absolute left-4 right-1/2 top-8">
                {industries.slice(0, 6).map((industry, index) => (
                  <div 
                    key={index}
                    className={`
                      flex items-center gap-3 p-3 rounded-xl bg-primary/60 backdrop-blur-sm
                      border border-border/50 shadow-lg hover:shadow-xl
                      transition-all duration-500 cursor-pointer
                      hover:transform hover:translate-y-[-2px] hover:brightness-106
                      group relative max-w-lg ml-auto mb-3
                      ${prefersReducedMotion 
                        ? (isVisible ? 'opacity-100' : 'opacity-0')
                        : `transition-all duration-500 ${
                            isVisible 
                              ? 'translate-x-0 translate-y-0 opacity-100' 
                              : 'translate-x-[-40px] translate-y-0 opacity-0'
                          }`
                      }
                    `}
                    style={{ 
                      marginTop: `${index * 8}px`,
                      marginRight: `${index * 8}px`,
                      transitionDelay: prefersReducedMotion ? '0ms' : `${index * 150}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
                      willChange: isVisible ? 'auto' : 'transform, opacity',
                      lineHeight: '1.5',
                      zIndex: 25 + (6 - index)
                    }}
                  >
                    {/* Blur backdrop where block overlaps image */}
                    <div className="absolute inset-0 rounded-xl backdrop-blur-md bg-primary/40 -z-10"></div>
                    
                    <div className="text-white flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                      {industry.icon}
                    </div>
                    <span className="text-white leading-relaxed text-sm md:text-base font-medium">{industry.name}</span>
                  </div>
                ))}
              </div>

              {/* Right Side Industries - Aligned to face center */}
              <div className="absolute right-4 left-1/2 top-8">
                {industries.slice(6, 12).map((industry, index) => (
                  <div 
                    key={index + 6}
                    className={`
                      flex items-center gap-3 p-3 rounded-xl bg-primary/60 backdrop-blur-sm
                      border border-border/50 shadow-lg hover:shadow-xl
                      transition-all duration-500 cursor-pointer
                      hover:transform hover:translate-y-[-2px] hover:brightness-106
                      group relative max-w-lg mr-auto mb-3
                      ${prefersReducedMotion 
                        ? (isVisible ? 'opacity-100' : 'opacity-0')
                        : `transition-all duration-500 ${
                            isVisible 
                              ? 'translate-x-0 translate-y-0 opacity-100' 
                              : 'translate-x-[40px] translate-y-0 opacity-0'
                          }`
                      }
                    `}
                    style={{ 
                      marginTop: `${index * 8}px`,
                      marginLeft: `${index * 8}px`,
                      transitionDelay: prefersReducedMotion ? '0ms' : `${(index + 6) * 150}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
                      willChange: isVisible ? 'auto' : 'transform, opacity',
                      lineHeight: '1.5',
                      zIndex: 25 + (6 - index)
                    }}
                  >
                    {/* Blur backdrop where block overlaps image */}
                    <div className="absolute inset-0 rounded-xl backdrop-blur-md bg-primary/40 -z-10"></div>
                    
                    <div className="text-white flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                      {industry.icon}
                    </div>
                    <span className="text-white leading-relaxed text-sm md:text-base font-medium">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="hidden md:block text-center">
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-700 delay-[1800ms] ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                BOOK AN APPOINTMENT
              </Button>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden relative">
              {/* Mobile Background Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img 
                  src={workflowImage} 
                  alt="Professional analytics dashboard showing workflow optimization and business intelligence data visualization"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/30"></div>
              </div>

              {/* Mobile Content */}
              <div className="relative z-20 pt-8 pb-8 min-h-[80vh]">
                <div className="space-y-4 px-4">
                  {industries.map((industry, index) => (
                    <div 
                      key={index}
                      className={`
                        flex items-center gap-3 p-3 rounded-lg bg-primary/60 backdrop-blur-sm
                        border border-border/50 shadow-lg
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
                      {/* Additional blur backdrop for mobile */}
                      <div className="absolute inset-0 rounded-lg backdrop-blur-md bg-primary/30 -z-10"></div>
                      
                      <div className="text-white flex-shrink-0">
                        {industry.icon}
                      </div>
                      <span className="text-white leading-relaxed py-1 font-medium">{industry.name}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8 px-4">
                  <Button 
                    size="lg" 
                    className={`w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-700 delay-[1600ms] ${
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
      </div>
    </section>
  );
};

export default Industries;