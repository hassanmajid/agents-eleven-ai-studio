import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";
const About = () => {
  const values = [{
    icon: <Target className="w-6 h-6" />,
    title: "Mission-Driven",
    description: "We believe AI should amplify human potential, not replace it. Every solution we create is designed to empower your team."
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Human-Centric",
    description: "Technology is only as good as the people behind it. We prioritize relationships, understanding, and genuine partnership."
  }, {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly exploring new AI technologies to deliver cutting-edge solutions that matter."
  }];
  const achievements = [{
    number: "300+",
    label: "Workflows Automated"
  }, {
    number: "98%",
    label: "Client Satisfaction"
  }, {
    number: "60%",
    label: "Average Time Savings"
  }, {
    number: "24/7",
    label: "AI Support Systems"
  }];
  return <section id="about" className="py-24 relative overflow-hidden">
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

          {/* Story - Sticky Stack Section */}
          <div className="relative" style={{ minHeight: '200vh' }}>
            <div className="sticky top-24 md:top-24 mb-20">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground text-center mb-16">
                Transforming Business Through Intelligence
              </h3>
              
              {/* Sticky Stack Container */}
              <div className="relative max-w-4xl mx-auto">
                {/* Card 1 */}
                <div 
                  className="sticky top-14 md:top-24 z-10 mb-8 animate-fade-in motion-reduce:animate-none"
                >
                  <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 motion-reduce:hover:scale-100 motion-reduce:transition-none">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Agents Eleven LLC is a Virginia-based company helping businesses across the United States, Canada, Australia, and the United Kingdom optimize their operations. What began with providing dedicated telemarketing agents to reduce the costs of in-house teams has evolved into a comprehensive AI automation platform.
                    </p>
                  </Card>
                </div>

                {/* Card 2 */}
                <div 
                  className="sticky top-14 md:top-24 z-20 mb-8 animate-fade-in motion-reduce:animate-none"
                  style={{ animationDelay: '100ms' }}
                >
                  <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm border-primary/20 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 motion-reduce:hover:scale-100 motion-reduce:transition-none">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      By blending human creativity with artificial intelligence, we help clients streamline repetitive tasks, cut unnecessary expenses, and focus on growth. Our team of AI specialists, workflow engineers, and business strategists design solutions that not only save time and money but also unlock new opportunities for innovation.
                    </p>
                  </Card>
                </div>

                {/* Card 3 */}
                <div 
                  className="sticky top-14 md:top-24 z-30 mb-8 animate-fade-in motion-reduce:animate-none"
                  style={{ animationDelay: '200ms' }}
                >
                  <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-sm border-primary/20 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-all duration-300 motion-reduce:hover:scale-100 motion-reduce:transition-none">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Trusted Partner:</strong> We become an extension of your team, understanding your unique challenges and crafting personalized AI solutions.
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Stats Card - Positioned alongside */}
                <div className="relative z-40 mt-16 max-w-2xl mx-auto">
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
            </div>
          </div>

          {/* Values Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              At <span className="text-primary">Agents Eleven</span>, we're not just automating processes—We're 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> reimagining</span> how work gets done.
            </h3>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => <Card key={index} className="p-8 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/30 transition-all duration-300 group shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] ai-glow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-xl font-display font-semibold mb-4 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;