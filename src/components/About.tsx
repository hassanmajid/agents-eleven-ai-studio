import aboutBg from "@/assets/about-bg.avif";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content Block with Purple Background */}
          <div className="bg-purple-900/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20 shadow-2xl animate-in fade-in-50 duration-1000">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">
              Transforming Business Through Intelligence
            </h2>
            
            <div className="space-y-6 text-gray-100 text-lg leading-relaxed">
              <p className="animate-in fade-in-50 duration-1000 delay-300">
                Agents Eleven LLC is a Virginia-based company helping businesses 
                across the United States, Canada, Australia, and the United Kingdom 
                optimize their operations. What began with providing dedicated 
                telemarketing agents to reduce the costs of in-house teams has evolved 
                into a comprehensive AI automation platform.
              </p>
              
              <p className="animate-in fade-in-50 duration-1000 delay-500">
                By blending human creativity with artificial intelligence, we help clients 
                streamline repetitive tasks, cut unnecessary expenses, and focus on 
                growth. Our team of AI specialists, workflow engineers, and business 
                strategists design solutions that not only save time and money but also 
                unlock new opportunities for innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;