export const Contact = () => {
  return (
    <section id="contact" className="section-spacing border-t border-border">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">
            Let's Connect
          </h2>
          
          <p className="text-foreground/80 font-sans text-lg leading-relaxed mb-12">
            I'm seeking opportunities in UX research, service design, customer experience, or coordination roles. I'm open to full-time, contract, or project-based work across Canada.
          </p>
          
          <div className="space-y-6">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground block mb-2">
                Email
              </span>
              <a
                href="mailto:yashvipanchal22@gmail.com"
                className="font-sans text-lg text-foreground hover:text-primary hover-underline transition-colors"
              >
                yashvipanchal22@gmail.com
              </a>
            </div>
            
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground block mb-2">
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/yashvipanchal"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-lg text-foreground hover:text-primary hover-underline transition-colors"
              >
                linkedin.com/in/yashvipanchal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
