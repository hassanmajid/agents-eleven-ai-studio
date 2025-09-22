import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background to-background/95 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
              LET'S MAKE SOMETHING TOGETHER
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-12">
              BOOK AN APPOINTMENT
            </h3>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input 
                  placeholder="Your Name*" 
                  className="bg-background/60 border-border/50 h-14 text-lg placeholder:text-muted-foreground/70"
                />
                <Input 
                  type="email" 
                  placeholder="Email*" 
                  className="bg-background/60 border-border/50 h-14 text-lg placeholder:text-muted-foreground/70"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Select>
                  <SelectTrigger className="bg-background/60 border-border/50 h-14 text-lg">
                    <SelectValue placeholder="Campaigns" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="telemarketing">Telemarketing Campaigns</SelectItem>
                    <SelectItem value="appointment">Appointment Scheduling</SelectItem>
                    <SelectItem value="demo">Demo Scheduling</SelectItem>
                    <SelectItem value="transfers">Live Transfers</SelectItem>
                    <SelectItem value="customer-service">Customer Service</SelectItem>
                    <SelectItem value="data-entry">Data Entry Service</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="bg-background/60 border-border/50 h-14 text-lg">
                    <SelectValue placeholder="Select Your Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accountants">Accountants</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                    <SelectItem value="traditional-marketing">Traditional Marketing</SelectItem>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="software">Software Companies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Textarea 
                placeholder="Message*" 
                rows={6}
                className="bg-background/60 border-border/50 text-lg placeholder:text-muted-foreground/70 resize-none"
              />
              
              <Button 
                type="submit" 
                className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-lg"
              >
                SEND
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;