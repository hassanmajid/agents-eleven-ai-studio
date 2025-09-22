import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "We believe AI should amplify human potential, not replace it. Every solution we create is designed to empower your team."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human-Centric",
      description: "Technology is only as good as the people behind it. We prioritize relationships, understanding, and genuine partnership."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "We stay ahead of the curve, constantly exploring new AI technologies to deliver cutting-edge solutions that matter."
    }
  ];

  const achievements = [
    { number: "500+", label: "Workflows Automated" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "60%", label: "Average Time Savings" },
    { number: "24/7", label: "AI Support Systems" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Where <span className="text-primary glow-text">Innovation</span> Meets Purpose
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded on the belief that AI should enhance human capabilities, Agents Eleven emerged from 
              a simple question: How can intelligent automation make work more meaningful?
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Transforming Business Through Intelligence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                What started as a mission to streamline repetitive tasks has evolved into a comprehensive 
                AI automation platform. We've helped hundreds of businesses discover the perfect balance 
                between human creativity and artificial intelligence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're not just automating processes—we're reimagining how work gets done. Our team 
                of AI specialists, workflow engineers, and business strategists work together to create 
                solutions that don't just save time, but unlock new possibilities.
              </p>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Trusted Partner:</strong> We become an extension of your team, 
                  understanding your unique challenges and crafting personalized AI solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10 ai-glow">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2 font-display">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 ai-float group"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-xl font-display font-semibold mb-4 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;