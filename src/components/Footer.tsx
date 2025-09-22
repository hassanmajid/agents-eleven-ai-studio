import { Sparkles, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#cases" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "AI Process Automation",
    "Intelligent Workflows", 
    "Data Intelligence",
    "AI Communication",
    "Integration Services",
    "Performance Analytics"
  ];

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-primary/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-ai-primary rounded-lg flex items-center justify-center ai-glow">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-display font-bold text-xl text-foreground">
                Agents <span className="text-primary glow-text">Eleven</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming businesses through intelligent automation and AI-powered workflows. 
              Your trusted partner in the future of work.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@agentseleven.com" className="hover:text-primary transition-colors">
                  hello@agentseleven.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+15714501144" className="hover:text-primary transition-colors">
                  (571) 450-1144
                </a>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>10432 Balls Ford Rd, Suite 300<br />Manassas, VA 20109</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest insights on AI automation and industry trends delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-secondary/30 border-primary/20 focus:border-primary/40 text-sm"
              />
              <Button 
                size="sm" 
                className="bg-gradient-ai-primary ai-glow hover:shadow-ai-intense transition-all duration-300 flex-shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Agents Eleven LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;