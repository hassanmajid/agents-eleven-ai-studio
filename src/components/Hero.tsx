import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Users, Zap } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Load animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll parallax effect
  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.3)));
        
        requestAnimationFrame(() => {
          setScrollY(scrollProgress);
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll, { passive: true });
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [reducedMotion]);

  const easing = reducedMotion ? 'ease' : 'cubic-bezier(0.22,0.61,0.36,1)';

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)
        `
      }}
    >
      {/* Animated Grid Background */}
      <div 
        className={`absolute inset-0 opacity-20 transition-all duration-400 ${
          isLoaded ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.5) 1px, transparent 0)
          `,
          backgroundSize: '50px 50px',
          transform: reducedMotion ? 'none' : `translate(${scrollY * 2}%, ${scrollY * 1}%) rotate(${scrollY * 2}deg)`,
          transition: `transform 0.1s ${easing}`
        }}
      />

      {/* Animated Particles */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-violet-400 rounded-full transition-all duration-400 ${
                isLoaded ? 'opacity-60' : 'opacity-0'
              }`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 200}ms`,
                transform: `translateY(${scrollY * (2 + i)}px)`,
                animation: `float 4s ${easing} infinite alternate`
              }}
            />
          ))}
        </div>
      )}

      {/* Neural Lines SVG Background */}
      <svg
        className={`absolute inset-0 w-full h-full opacity-10 transition-opacity duration-400 ${
          isLoaded ? 'opacity-10' : 'opacity-0'
        }`}
        style={{
          transform: reducedMotion ? 'none' : `translateY(${scrollY * -3}px)`
        }}
      >
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.4)" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q250,50 500,100 T1000,100 L1000,200 Q750,150 500,200 T0,200 Z"
          fill="url(#neural-gradient)"
          opacity="0.3"
        />
        <path
          d="M0,300 Q300,250 600,300 T1200,300"
          stroke="rgba(139, 92, 246, 0.5)"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </svg>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <h1 
              className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white transition-all duration-320 ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-[18px] opacity-0'
              }`}
              style={{
                transitionDelay: reducedMotion ? '0ms' : '60ms',
                transitionTimingFunction: easing,
                opacity: reducedMotion ? 1 : (1 - scrollY * 0.05)
              }}
            >
              Automate work.<br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Amplify people.
              </span>
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl transition-all duration-300 ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-[14px] opacity-0'
              }`}
              style={{
                transitionDelay: reducedMotion ? '0ms' : '140ms',
                transitionTimingFunction: easing,
                opacity: reducedMotion ? 1 : (1 - scrollY * 0.05)
              }}
            >
              From telemarketing to AI automation, we blend human expertise with intelligent systems to drive measurable growth.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-220 ${
                isLoaded 
                  ? 'scale-100 opacity-100' 
                  : 'scale-95 opacity-0'
              }`}
              style={{
                transitionDelay: reducedMotion ? '0ms' : '240ms',
                transitionTimingFunction: easing
              }}
            >
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold transition-all duration-160 hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(139,92,246,0.4)] group overflow-hidden"
              >
                <span className="relative z-10">Book an Appointment</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-160" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="relative border-violet-400/30 text-violet-300 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-160 group overflow-hidden"
              >
                <span className="relative z-10">See How It Works</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </Button>
            </div>

            {/* Trust Row */}
            <div 
              className={`text-gray-400 text-sm transition-all duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: reducedMotion ? '0ms' : '400ms'
              }}
            >
              <span className="font-medium">Serving</span> US • CA • UK • AU
            </div>
          </div>

          {/* Right Column - Visual Stack */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              
              {/* Card A - Performance Chart */}
              <div 
                className={`absolute top-0 left-0 w-72 h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transition-all duration-260 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] ${
                  isLoaded 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-[26px] opacity-0'
                }`}
                style={{
                  transitionTimingFunction: easing,
                  transform: reducedMotion 
                    ? 'none' 
                    : `translateY(${scrollY * -6}px) ${isLoaded ? 'translateX(0)' : 'translateX(26px)'}`,
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  willChange: 'transform, opacity'
                }}
                onMouseEnter={(e) => {
                  if (!reducedMotion) {
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(2deg) rotateY(2deg) translateY(${scrollY * -6}px)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!reducedMotion) {
                    e.currentTarget.style.transform = `translateY(${scrollY * -6}px)`;
                  }
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <BarChart3 className="w-6 h-6 text-violet-400" />
                  <span className="text-xs text-gray-400">Performance</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Conversion Rate</span>
                    <span className="text-green-400 font-semibold">+47%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-violet-500 to-blue-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Card B - Analytics */}
              <div 
                className={`absolute top-32 right-0 w-80 h-52 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transition-all duration-260 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] ${
                  isLoaded 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-[26px] opacity-0'
                }`}
                style={{
                  transitionDelay: reducedMotion ? '0ms' : '120ms',
                  transitionTimingFunction: easing,
                  transform: reducedMotion 
                    ? 'none' 
                    : `translateY(${scrollY * -4}px) ${isLoaded ? 'translateX(0)' : 'translateX(26px)'}`,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  willChange: 'transform, opacity'
                }}
                onMouseEnter={(e) => {
                  if (!reducedMotion) {
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(2deg) rotateY(2deg) translateY(${scrollY * -4}px)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!reducedMotion) {
                    e.currentTarget.style.transform = `translateY(${scrollY * -4}px)`;
                  }
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  <span className="text-xs text-gray-400">Analytics</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-white">2.4k</div>
                    <div className="text-xs text-gray-400">Active Calls</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">98.5%</div>
                    <div className="text-xs text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Card C - Team Activity */}
              <div 
                className={`absolute bottom-0 left-8 w-64 h-44 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transition-all duration-260 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] ${
                  isLoaded 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-[26px] opacity-0'
                }`}
                style={{
                  transitionDelay: reducedMotion ? '0ms' : '240ms',
                  transitionTimingFunction: easing,
                  transform: reducedMotion 
                    ? 'none' 
                    : `translateY(${scrollY * -2}px) ${isLoaded ? 'translateX(0)' : 'translateX(26px)'}`,
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  willChange: 'transform, opacity'
                }}
                onMouseEnter={(e) => {
                  if (!reducedMotion) {
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(2deg) rotateY(2deg) translateY(${scrollY * -2}px)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!reducedMotion) {
                    e.currentTarget.style.transform = `translateY(${scrollY * -2}px)`;
                  }
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-6 h-6 text-teal-400" />
                  <span className="text-xs text-gray-400">Team</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">17 agents online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">AI assist active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes for animations */}
      <style>
        {`
          @keyframes float {
            from { transform: translateY(0px); }
            to { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;