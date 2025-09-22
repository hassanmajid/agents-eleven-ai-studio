import { Button } from "@/components/ui/button";
import { Shield, Users, DollarSign, Calculator, Megaphone, Building2, 
         Plane, Zap, Cross, Code } from "lucide-react";
import workflowImage from "@/assets/workflow-dashboard.jpg";
import { useState, useEffect, useRef } from "react";

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-foreground transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                INDUSTRIES
              </h2>
              
              <p className={`text-xl text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                There's no doubt, what we do works for Literally <span className="font-bold">EVERYONE</span>.......!
              </p>
              
              <div className="mb-8">
                <p className={`text-lg font-semibold text-foreground mb-6 transition-all duration-700 delay-300 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>We currently work with:</p>
                <div className="space-y-4">
                  {industries.map((industry, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 transition-all duration-700 ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                      }`}
                      style={{ 
                        transitionDelay: `${400 + index * 100}ms` 
                      }}
                    >
                      <div className="text-primary flex-shrink-0">
                        {industry.icon}
                      </div>
                      <span className="text-muted-foreground">{industry.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-700 delay-[1500ms] ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                BOOK AN APPOINTMENT
              </Button>
            </div>

            {/* Right Image */}
            <div className={`relative transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform translate-x-8">
                <img 
                  src={workflowImage} 
                  alt="Professional working with workflow dashboards and analytics"
                  className="w-full h-auto object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-ai-primary rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-ai-electric rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;