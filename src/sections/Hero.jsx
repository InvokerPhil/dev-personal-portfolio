import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

const greenDots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 57) % 100}%`,
  animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
}));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background " />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {greenDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: dot.left,
              top: dot.top,
              animation: dot.animation,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-3 rounded-full glass text-sm text-primary ">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Frontend Specialist
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting robust{" "}
                <span className="text-primary glow-text">systems</span>
                <br />
                through clean
                <span className="font-serif italic font-normal text-white ml-2">
                  architecture.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                Hi, I'm Philip Guarin — a Software Engineer specializing in
                Flutter and React. I build scalable and maintainable
                applications with clean, organized code and modern development
                practices.
              </p>
            </div>

            {/* CTA Buttons */}
            <Button size="lg">
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Column - Image */}
        </div>
      </div>
    </section>
  );
};
