import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, Zap, Database, MessageSquare, BarChart3 } from "lucide-react";
const Services = () => {
  const services = [{
    icon: <Bot className="w-8 h-8" />,
    title: "AI Process Automation",
    description: "Transform repetitive tasks into intelligent, self-managing workflows that adapt and improve over time.",
    features: ["Document Processing", "Data Entry Automation", "Email & Communication", "Report Generation"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  }, {
    icon: <Workflow className="w-8 h-8" />,
    title: "Intelligent Workflows",
    description: "Design and implement smart workflows that connect your tools, data, and processes seamlessly.",
    features: ["Multi-System Integration", "Decision Trees", "Approval Processes", "Real-time Monitoring"],
    color: "text-ai-electric",
    bgColor: "bg-ai-electric/10"
  }, {
    icon: <Database className="w-8 h-8" />,
    title: "Data Intelligence",
    description: "Extract insights and automate decision-making with advanced AI analytics and predictive modeling.",
    features: ["Predictive Analytics", "Pattern Recognition", "Real-time Insights", "Automated Reporting"],
    color: "text-ai-neon",
    bgColor: "bg-ai-neon/10"
  }, {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "AI Communication",
    description: "Deploy intelligent chatbots and virtual assistants that understand context and provide meaningful responses.",
    features: ["Customer Support Bots", "Internal AI Assistants", "Lead Qualification", "Multi-channel Support"],
    color: "text-ai-warm",
    bgColor: "bg-ai-warm/10"
  }, {
    icon: <Zap className="w-8 h-8" />,
    title: "Integration Services",
    description: "Connect your existing tools and systems with powerful AI capabilities for maximum efficiency.",
    features: ["API Integrations", "Cloud Migrations", "System Optimization", "Custom Connectors"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  }, {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Performance Analytics",
    description: "Monitor, measure, and optimize your AI implementations with comprehensive analytics and insights.",
    features: ["ROI Tracking", "Performance Metrics", "Optimization Recommendations", "Success Monitoring"],
    color: "text-ai-electric",
    bgColor: "bg-ai-electric/10"
  }];
  return <section id="services" className="py-24 relative overflow-hidden neural-bg">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We bridge the gap between people and possibilities, blending human expertise with intelligent automation to move businesses forward.</p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => <Card key={index} className="group p-8 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-500 hover:shadow-card ai-float" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
                
                <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/10 group-hover:border-primary/50 transition-all">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>)}
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
    </section>;
};
export default Services;