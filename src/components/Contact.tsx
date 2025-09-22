import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@agentseleven.com",
      href: "mailto:hello@agentseleven.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(571) 450-1144",
      href: "tel:+15714501144"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "10432 Balls Ford Rd, Suite 300\nManassas, VA 20109",
      href: "https://maps.google.com/?q=10432+Balls+Ford+Rd,+Suite+300,+Manassas,+VA+20109"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Business Hours",
      value: "Mon-Fri: 9AM-6PM EST\nWeekends: By appointment",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden neural-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Let's Build the <span className="text-primary glow-text">Future</span> Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with AI? We'd love to hear about your challenges 
              and explore how intelligent automation can drive your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/10 ai-glow">
              <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
                Start Your AI Journey
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-secondary/30 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Smith" 
                      className="bg-secondary/30 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-secondary/30 border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name" 
                    className="bg-secondary/30 border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone (Optional)</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="bg-secondary/30 border-primary/20 focus:border-primary/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Tell us about your needs</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your current challenges and how you envision AI helping your business..." 
                    rows={4}
                    className="bg-secondary/30 border-primary/20 focus:border-primary/40 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-ai-primary ai-glow hover:shadow-ai-intense transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking to automate a single process or transform your entire operation, 
                  we're here to guide you every step of the way. Reach out and let's start the conversation.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 ai-float group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{info.label}</h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Response Promise */}
              <Card className="p-6 bg-gradient-ai-primary/10 backdrop-blur-sm border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full ai-pulse" />
                  <span className="font-semibold text-foreground">Quick Response Guarantee</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, don't hesitate to call us directly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;