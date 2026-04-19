import heroPortrait from '@/assets/hero-portrait.jpg';

export const Hero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left — text */}
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="eyebrow mb-6 animate-fade-up">
              Montréal · India · Canada
            </p>

            <h1 className="font-serif text-foreground tracking-tight leading-[0.95] mb-6 animate-fade-up-delay-1"
                style={{ fontSize: 'clamp(48px, 7vw, 92px)', fontWeight: 500 }}>
              Yashvi
              <br />
              Panchal
            </h1>

            <p className="font-serif italic text-muted-foreground mb-7 animate-fade-up-delay-2"
               style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>
              Designing clarity in a complex world.
            </p>

            <p className="font-sans text-foreground/75 leading-relaxed max-w-lg mb-10 animate-fade-up-delay-3 text-[15.5px]">
              Designer and researcher working at the intersection of service design, user research, and clear communication. I help organizations understand their users and improve the systems that hold them.
            </p>

            <div className="flex flex-wrap items-center gap-3 animate-fade-up-delay-4">
              <a href="#work" className="btn-terracotta">View my work</a>
              <a href="#writing" className="btn-ghost">Read my writing</a>
            </div>
          </div>

          {/* Right — portrait */}
          <div className="md:col-span-5 order-1 md:order-2 animate-fade-up">
            <div className="relative">
              <img
                src={heroPortrait}
                alt="Portrait of Yashvi Panchal smiling"
                className="w-full h-[420px] md:h-[560px] object-cover"
                style={{ borderRadius: '2px' }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
