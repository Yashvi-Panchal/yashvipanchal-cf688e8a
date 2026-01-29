export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="section-container w-full">
        <div className="max-w-3xl">
          <p className="text-muted-foreground font-sans text-sm md:text-base mb-4 animate-fade-up">
            Designer & Researcher
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 animate-fade-up-delay-1">
            Yashvi Panchal
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-sans leading-relaxed max-w-2xl animate-fade-up-delay-2">
            I help organizations understand their users and improve services through research, design thinking, and clear communication.
          </p>
          
          <div className="mt-12 animate-fade-up-delay-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-primary hover:text-primary/80 transition-colors group"
            >
              View selected work
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
