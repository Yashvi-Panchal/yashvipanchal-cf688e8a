export const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Subtle decorative line */}
        <div className="w-12 h-px bg-primary/40 mb-16" />
        
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left column - Heading */}
          <div className="md:col-span-4">
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block font-sans">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Let's Connect
            </h2>
          </div>
          
          {/* Right column - Content */}
          <div className="md:col-span-8">
            <p className="text-foreground/80 font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              If you're working on something complex or unclear, I'm always interested in talking.
            </p>
            
            <div className="space-y-4">
              <div className="group">
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground block mb-2 font-sans">
                  Email
                </span>
                <a
                  href="mailto:yashvipanchal22@gmail.com"
                  className="font-sans text-lg text-foreground hover:text-primary transition-colors duration-300 hover-underline"
                >
                  yashvipanchal22@gmail.com
                </a>
              </div>
              
              <div className="group">
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground block mb-2 font-sans">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/yashvipanchal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-lg text-foreground hover:text-primary transition-colors duration-300 hover-underline"
                >
                  linkedin.com/in/yashvipanchal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
