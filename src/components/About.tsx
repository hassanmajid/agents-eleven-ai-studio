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
              The <span className="text-primary glow-text">Future</span> We Imagined Has Arrived
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              It all started with a mission, helping businesses boost sales and simplify their operations. 
              But at Agents Eleven, we saw something bigger on the horizon: a world where Artificial Intelligence doesn't replace people, it empowers them.
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Your Partner in the AI Revolution
              </h3>
              <p className="text-muted-foreground leading-relaxed">At Agents Eleven LLC, we help North American businesses embrace the future of work through AI automation. What began in Virginia as a mission to cut costs with dedicated telemarketing agents has evolved into a next-generation platform that streamlines operations, boosts productivity, and drives smarter growth.</p>
              <p className="text-muted-foreground leading-relaxed">By blending human expertise with cutting-edge AI technology, we help clients eliminate repetitive tasks, reduce operational overhead, and unlock new revenue streams. Our team of AI specialists, automation engineers, and business strategists creates tailored solutions that transform how you work—making your business faster, more efficient, and ready for what's next.</p>
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
                  {achievements.map((stat, index) => <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2 font-display">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>)}
                </div>
              </Card>
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