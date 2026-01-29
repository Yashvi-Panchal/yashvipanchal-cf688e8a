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
                I'm a designer and researcher with experience in user research, service design, and project coordination. My background combines design studio work with public-sector research, where I've worked on understanding user needs and improving complex services.
              </p>
              
              <p>
                I'm interested in work at the intersection of research, design, and communication — understanding user needs, mapping service journeys, and translating insights into clear, actionable recommendations.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="bg-card border border-border p-6 md:p-8">
              <h3 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Skills
              </h3>
              <ul className="space-y-3 font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>User research & interviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Journey mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Information synthesis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Stakeholder communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Design thinking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
