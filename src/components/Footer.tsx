import { Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const industries = [
    "Accountants",
    "Insurance", 
    "Digital Marketing",
    "Traditional Marketing",
    "Automotive",
    "Real Estate",
    "Software Companies"
  ];

  const services = [
    "Telemarketing Campaigns",
    "Appointment Scheduling",
    "Demo Scheduling", 
    "Live Transfers",
    "Customer Service (Inbound Calls)",
    "Data Entry Service"
  ];

  const sitemapLinks = [
    "Terms & Conditions",
    "Privacy Policy"
  ];

  return (
    <footer className="bg-gradient-to-br from-card to-card/80 border-t border-primary/20">
      {/* ElevenLabs Conversational AI Widget */}
      <div 
        className="py-6"
        dangerouslySetInnerHTML={{
          __html: `<elevenlabs-convai agent-id="agent_0401k9vt3aqxef2r710y5jt66mm8"></elevenlabs-convai><script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>`
        }}
      />
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Top Section with Company Info and Contact */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Company Description */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A11</span>
              </div>
              <div className="font-bold text-2xl text-foreground">
                AGENTS - 11
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              AgentsEleven bridges the gap between businesses and their clients. We go the extra mile to guarantee 
              exceptional quality incoming & outgoing Telephone Services.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Phone: (571) 450-1144</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">mason@agentseleven.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Website: agentseleven.com</span>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Industries */}
          <div>
            <h4 className="text-primary font-bold text-lg mb-6 uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry}>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {industry}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary font-bold text-lg mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-primary font-bold text-lg mb-6 uppercase tracking-wider">Sitemap</h4>
            <ul className="space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link}>
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
            <div className="flex items-start space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded border flex-shrink-0 mt-1"></div>
              <div className="text-muted-foreground">
                <div className="font-semibold text-foreground mb-2">Agents Eleven LLC:</div>
                <div>10432 Balls Ford Rd, Suite 300, Manassas, VA 20109</div>
                <div className="mt-2">Call : +1 (571) 450-1144</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-primary/20 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground">
              © Copyright 2022 <span className="text-primary">AgentsEleven</span>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-12 h-8 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-12 h-8 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
                <div className="w-12 h-8 bg-gradient-to-r from-orange-600 to-orange-400 rounded text-white text-xs flex items-center justify-center font-bold">
                  DSC
                </div>
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-yellow-400 rounded text-white text-xs flex items-center justify-center font-bold">
                  PP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;