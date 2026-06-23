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
              backgroundColor: "#11082c",
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
              <h1 className="text-5xl md:text-6xl lg">
                Crafting <span className="text-primary">digital</span>
                <br />
                experiences with <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                Hi, I'm Philip Guarin - a software engineer specializing in
                Flutter and React. I build scalable, performant applications
                that users love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
