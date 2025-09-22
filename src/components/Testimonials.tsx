import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Dawn McCool",
    title: "Director of Business Development", 
    content: "In a world where our customers have questions 24 hours a day, partnering with AgentsEleven to facilitate continued communication after hours and when we are not available has been key. Their team is very receptive to ongoing improvement and changes as needs arise. Utilizing AgentsEleven has allowed us to further our customer service resources. I definitely recommend AgentsEleven to other businesses."
  },
  {
    name: "Jerry Nelson", 
    title: "Digital Marketing Assistant",
    content: "By using AgentsEleven to handle our Telemarketing we have seen a valuable increase in our appointments. They keep the prospects engaged by their friendly and professional approach. We are extremely happy with the service that AgentsEleven provides. They are always there for us by keeping everyone on track and up to date, especially during these uncertain times. We would highly recommend them."
  },
  {
    name: "Mr. Jon Knudson",
    title: "Knudson Benefits Group, Murray, Utah", 
    content: "I've been pleased with the amount of referrals I have gotten from Agents Eleven. Their caller Jason seems to be working hard and getting good consistent results pushed over to me on a regular basis. I've gotten into some really excellent opportunities because of his efforts. I'd definitely recommend you use them!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real testimonials from businesses who have transformed their operations with AgentsEleven
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-card/50 via-card to-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-primary/20 hover:border-primary/40 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm z-10"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-primary/20 hover:border-primary/40 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm z-10"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </Button>

            {/* Testimonial Content */}
            <div className="text-center mx-8 md:mx-16">
              <div className="mb-8">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                  "{currentTestimonial.content}"
                </p>
              </div>

              <div className="border-t border-primary/20 pt-6">
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {currentTestimonial.name}
                </h4>
                <p className="text-primary font-medium">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border border-primary/20 rounded-full px-8 py-4 shadow-lg">
            <div>
              <div className="text-2xl font-bold text-primary">5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-10 bg-primary/20"></div>
            <div>
              <div className="text-2xl font-bold text-primary">17+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="w-px h-10 bg-primary/20"></div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;