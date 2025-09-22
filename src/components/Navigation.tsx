import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import agentsElevenLogo from "@/assets/agentseleven_logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Expertise", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Our Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src={agentsElevenLogo} 
                alt="Agents Eleven Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="font-display font-bold text-xl text-foreground">
              <span className="relative inline-block">
                <span>Agents</span>{" "}
                <span className="relative">
                  <span className="animate-fade-text opacity-100">Eleven</span>
                  <span className="absolute top-0 left-0 animate-fade-text-alt opacity-0 text-primary glow-text">11</span>
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-ai-primary ai-glow hover:shadow-ai-intense transition-all duration-300"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-ai-primary ai-glow w-full"
                asChild
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;