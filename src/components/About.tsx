export const About = () => {
  return (
    <section id="about" className="section-spacing border-t border-border">
      <div className="section-container">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">
          About
        </h2>
        
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg">
              <p>
                I'm a systems-oriented thinker drawn to the patterns beneath everyday complexity. My work sits at the intersection of behavioral insight, strategic clarity, and human-centered design.
              </p>
              
              <p>
                Whether through writing, research, or facilitation, I help individuals and organizations see their challenges more clearly—and move through them with intention.
              </p>
              
              <p>
                My background spans creative writing, cognitive exploration, and strategic consulting. I believe that the most powerful insights often come from paying closer attention to what's already there.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Areas of Focus
              </h3>
              <ul className="space-y-3 font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Systems thinking & complexity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Human behavior & decision-making</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Clarity of cognition & communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Strategic narrative & positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Creative inquiry & research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
