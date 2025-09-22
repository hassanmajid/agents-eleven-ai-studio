import { useState, useEffect, useRef } from "react";
import adamAvatar from "@/assets/robot-adam-avatar.png";
import paulAvatar from "@/assets/robot-paul-avatar.png";
import amandaAvatar from "@/assets/robot-amanda-avatar.png";

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
      name: "ADAM",
      role: "Contact Center Operations",
      location: "(North America & Europe)",
      avatar: adamAvatar,
      bgColor: "from-cyan-400 to-cyan-600"
    },
    {
      name: "PAUL",
      role: "Business Development",
      location: "",
      avatar: paulAvatar,
      bgColor: "from-blue-400 to-blue-600"
    },
    {
      name: "AMANDA",
      role: "Marketing Assistant",
      location: "",
      avatar: amandaAvatar,
      bgColor: "from-purple-400 to-pink-500"
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
              THE TEAM OF TOP AGENTS
            </h2>
            
            <p className={`text-xl text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              We work hard. We play hard. We do the best.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`
                  bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl
                  transition-all duration-700 group
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                `}
                style={{
                  transitionDelay: `${index * 200 + 400}ms`
                }}
              >
                {/* Avatar Section */}
                <div className={`h-64 bg-gradient-to-br ${member.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <img 
                    src={member.avatar}
                    alt={`${member.name} - AI Robot Avatar`}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info Section */}
                <div className="p-6 text-center bg-card">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    {member.role}
                  </p>
                  {member.location && (
                    <p className="text-sm text-muted-foreground">
                      {member.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;