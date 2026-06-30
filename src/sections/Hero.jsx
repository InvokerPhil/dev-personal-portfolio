import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, Download } from "lucide-react";

const greenDots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 57) % 100}%`,
  animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
}));

const GithubIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.93c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.2 10.2 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedinIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 17.34V9.75H5.82v7.59h2.52ZM7.08 8.71c.81 0 1.31-.54 1.31-1.21-.01-.69-.5-1.21-1.29-1.21-.79 0-1.31.52-1.31 1.21 0 .67.5 1.21 1.27 1.21h.02Zm11.1 8.63v-4.36c0-2.34-1.25-3.43-2.92-3.43-1.35 0-1.95.74-2.28 1.26V9.75h-2.52c.03.71 0 7.59 0 7.59h2.52V13.1c0-.23.02-.45.08-.61.18-.45.58-.92 1.25-.92.88 0 1.24.69 1.24 1.69v4.08h2.63Z" />
  </svg>
);

const skills = [
  "Dart",
  "Flutter",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Clean Architecture",
  "MVVM",
  "RESTful APIs Integration",
  "Version Control (Git)",
];

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
                Crafting sophisticated{" "}
                <span className="text-primary glow-text">systems</span>
                <span> through </span>
                <br />
                clean
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

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-m text-muted-foreground">Social Links:</span>
            {[
              {
                icon: GithubIcon,
                label: "GitHub",
                href: "https://github.com/InvokerPhil",
              },

              {
                icon: LinkedinIcon,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/edward-philip-guarin-336aa0211/",
              },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon
                  className="w-12 h-12 rounded-full p-2 glass
                  hove:bg-primary/10 hover:text-primary transition-all duration-300
                
                "
                />
              </a>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative w-[450px] ">
              <div className="relative glass rounded-3xl p-2 glow-border ">
                {/* <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br
                from-primary/30 via-transparent
                to-primary/10 blur-2xl animate-pulse-glow"
                /> */}
                <img
                  src="src/assets/my_pic2.png"
                  alt="Philip Guarin"
                  className="w-full object-cover rounded-2xl"
                />

                {/* Floating Badge */}

                <div
                  className=" absolute -bottom-4 -right-4 glass rounded-xl 
                px-4 py-3 animate-float "
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                <div className=" absolute -top-4 -left-4 glass rounded-xl px-4 py-2 animate-float">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <span>Years of Exp.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Technologies I work with
            </p>

            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="flex-shrink-0 px-8 py-4">
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
