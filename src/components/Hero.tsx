export const Hero = () => {
  return (
    <section className="pt-28 md:pt-32 pb-0">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-12 items-end pb-16 md:pb-24">

          <div className="md:col-span-7 animate-fade-up">
            <p className="font-sans mb-5" style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B85C38',
              fontWeight: 400
            }}>
              Designer and Researcher · Montréal
            </p>
            <h1 className="font-serif text-foreground tracking-tight leading-[1.05] mb-6" style={{
              fontSize: 'clamp(44px, 5.5vw, 72px)',
              fontWeight: 300
            }}>
              Yashvi<br />
              <em style={{ fontStyle: 'italic', color: '#B85C38' }}>Panchal.</em>
            </h1>
            <p className="font-serif italic text-muted-foreground" style={{
              fontSize: 'clamp(18px, 1.8vw, 24px)',
              lineHeight: 1.5
            }}>
              Designing clarity in a complex world.
            </p>
          </div>

          <div className="md:col-span-5 animate-fade-up-delay-2">
            <p className="font-sans text-foreground/70 leading-relaxed mb-8" style={{
              fontSize: '15px',
              lineHeight: 1.9,
              fontWeight: 300
            }}>
              I research how systems shape human experience and I care about building things that actually work for the people inside them.
            </p>
            <div className="flex flex-col gap-3" style={{ alignItems: 'flex-start' }}>
              <a href="#work" className="btn-terracotta">View my work</a>
              <a href="#writing" className="btn-ghost">Read my writing</a>
            </div>
          </div>

        </div>
        <hr className="border-0" style={{
          height: '0.5px',
          backgroundColor: 'rgba(0,0,0,0.08)',
        }} />
      </div>
    </section>
  );
};
