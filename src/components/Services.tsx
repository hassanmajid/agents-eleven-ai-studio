import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, Camera, Crown, Tablet, Layout, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "TELEMARKETING",
      description: "We hire/manage a full-time dedicated Telemarketer for you: Business-to-Business (B2B) Or Business-to-Consumer (B2C).",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "APPOINTMENT SCHEDULING",
      description: "We hire/manage an experienced dedicated agent at our end to schedule appointments for you with businesses (B2B).",
      color: "text-ai-electric",
      bgColor: "bg-ai-electric/10"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "DEMO SCHEDULING",
      description: "Mostly B2B Companies (Software, CRM etc.) hire a full-time dedicated agent at our end for Demo Scheduling. Just provide us with training materials and leave the rest to us.",
      color: "text-ai-neon",
      bgColor: "bg-ai-neon/10"
    },
    {
      icon: <Tablet className="w-8 h-8" />,
      title: "LIVE TRANSFERS",
      description: "You can hire a full-time dedicated resource at our end for getting your prospect transferred live to your agents (Example: Personal Insurance Brokers, Financial Advisors etc.).",
      color: "text-ai-warm",
      bgColor: "bg-ai-warm/10"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI / UX DESIGN",
      description: "We also specialize in hiring dedicated UI/UX Assistant Designers' for mostly Software and Web/App Development Companies.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "WEB DEVELOPMENT",
      description: "Website Development companies hire an assistant agent with us for Building, Creating and maintaining websites. Including HTML/CSS, .Net, Responsive design, JavaScript, WordPress E-Commerce, Testing and debugging.",
      color: "text-ai-electric",
      bgColor: "bg-ai-electric/10"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden neural-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              <span className="text-primary glow-text">AI Solutions</span> That Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bridge the gap between people and possibilities, blending human expertise with intelligent automation to move businesses forward.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services && services.map((service, index) => (
              <Card 
                key={index} 
                className="group p-8 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-card" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-ai-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-12 ai-glow">
              <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how AI automation can streamline your operations, reduce costs, 
                and unlock new growth opportunities for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-ai-primary ai-glow hover:shadow-ai-intense transition-all duration-300">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;