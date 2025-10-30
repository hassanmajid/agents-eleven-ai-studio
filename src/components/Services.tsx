import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneIncoming, Send, Home, Car, Database, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <PhoneIncoming className="w-8 h-8" />,
      title: "Inbound Agents",
      description: "AI-driven inbound agents manage customer queries, support tickets, and information requests around the clock. They handle FAQs, capture leads, and route complex cases to the right human, ensuring no opportunity is missed.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Outbound Agents",
      description: "These agents automate outreach campaigns across email, SMS, and calls. They qualify leads, follow up consistently, and update your CRM in real time—scaling your sales pipeline without burning out your team.",
      color: "text-ai-electric",
      bgColor: "bg-ai-electric/10"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Real Estate Agents",
      description: "AI real estate agents assist with property inquiries, schedule viewings, qualify buyers/renters, and follow up automatically. They reduce manual effort for brokers while keeping prospects engaged.",
      color: "text-ai-neon",
      bgColor: "bg-ai-neon/10"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Car Dealership Agents",
      description: "Dealership agents automate lead responses, test drive scheduling, and financing pre-qualification. They ensure buyers get fast answers and dealerships capture every sales opportunity without relying on manual callbacks.",
      color: "text-ai-warm",
      bgColor: "bg-ai-warm/10"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "RAG Agents (Retrieval-Augmented Generation)",
      description: "RAG agents connect to your knowledge base, documents, and CRM to deliver accurate, context-aware responses. Perfect for industries that require precise, up-to-date information like finance, healthcare, or SaaS.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Sales Call Analyzer Agents",
      description: "These agents listen to and transcribe sales calls, then use AI to evaluate performance. They identify missed opportunities, track customer sentiment, and provide actionable insights to improve closing rates.",
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
              We design intelligent agents that automate repetitive tasks, improve accuracy, and free your team to focus on growth. Each agent is powered by AI to handle specialized workflows with speed and consistency.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services && services.map((service, index) => (
              <Card 
                key={index} 
                className="group p-8 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/30 transition-all duration-500 hover:shadow-card shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)] ai-glow" 
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
                <Button 
                  size="lg" 
                  className="bg-gradient-ai-primary ai-glow hover:shadow-ai-intense transition-all duration-300"
                  asChild
                >
                  <a href="#contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
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