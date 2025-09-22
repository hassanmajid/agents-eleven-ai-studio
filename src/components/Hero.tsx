import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Workflow } from "lucide-react";
import heroImage from "@/assets/ai-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full ai-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-ai-neon rounded-full ai-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-ai-electric rounded-full ai-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-ai-warm rounded-full ai-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 mb-8 ai-shimmer">
            <Bot className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-foreground">AI-Powered Business Transformation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-foreground">Intelligence Meets</span>
            <br />
            <span className="bg-gradient-ai-primary bg-clip-text text-transparent glow-text">
              Automation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI automation and intelligent workflows. 
            We help companies streamline operations, accelerate growth, and unlock the future of work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-ai-primary ai-glow hover:shadow-ai-intense transition-all duration-300 text-lg px-8 py-4 group"
              asChild
            >
              <a href="#contact">
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground">
            <div className="flex items-center space-x-3 ai-float">
              <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center">
                <Workflow className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Smart Workflows</div>
                <div className="text-sm">Intelligent automation</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 ai-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-ai-electric" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Lightning Fast</div>
                <div className="text-sm">Instant optimization</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 ai-float" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-ai-neon" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">AI-Powered</div>
                <div className="text-sm">Advanced intelligence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;