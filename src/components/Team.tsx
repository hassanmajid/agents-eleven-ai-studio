import { useState, useEffect, useRef } from "react";
import { Brain, Cog, Palette, Plug, Shield, Target } from "lucide-react";

const Team = () => {
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

  const teamMembers = [
    {
      name: "AI Architect",
      description: "The strategist who maps how intelligence flows through your system. They design every agent—whether it's inbound, outbound, or RAG-powered—to think, learn, and act in sync with your business goals.",
      icon: Brain,
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      name: "Automation Engineer",
      description: "The builder who transforms ideas into working systems. From scheduling agents to full pipeline automation, they connect data, APIs, and workflows into a single, powerful engine.",
      icon: Cog,
      bgColor: "from-purple-500 to-blue-500"
    },
    {
      name: "UI/UX Designer",
      description: "The creative mind that makes your AI feel effortless to use. They shape every interface and dashboard so managing complex automation feels simple, fast, and human.",
      icon: Palette,
      bgColor: "from-pink-500 to-purple-500"
    },
    {
      name: "Integration Specialist",
      description: "The connector who ensures your AI blends perfectly with what you already use—CRMs, calendars, email tools, and databases. No disruption, just smooth handshakes across your tech stack.",
      icon: Plug,
      bgColor: "from-green-500 to-teal-500"
    },
    {
      name: "Deployment & Support Lead",
      description: "The guardian who brings everything to life and keeps it running at peak performance. They handle setup, testing, and ongoing optimization so your AI system keeps delivering results day after day.",
      icon: Shield,
      bgColor: "from-orange-500 to-red-500"
    },
    {
      name: "Project Director",
      description: "The orchestrator who keeps every moving piece aligned—from initial strategy to final deployment. They ensure timelines are met, goals stay clear, and your automation system launches exactly as envisioned.",
      icon: Target,
      bgColor: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-foreground transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Meet the Minds Behind Your Automation
            </h2>
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <div 
                  key={member.name}
                  className={`
                    bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl
                    transition-all duration-700 group border border-border
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                  `}
                  style={{
                    transitionDelay: `${index * 150 + 300}ms`
                  }}
                >
                  {/* Icon Section */}
                  <div className={`h-32 bg-gradient-to-br ${member.bgColor} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <Icon className="w-16 h-16 text-white relative z-10" strokeWidth={1.5} />
                  </div>

                  {/* Info Section */}
                  <div className="p-6 bg-card">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;