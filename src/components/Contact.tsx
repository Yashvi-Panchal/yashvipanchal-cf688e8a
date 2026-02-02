export const Contact = () => {
  return (
    <section id="contact" className="section-spacing">
      <div className="max-w-xl mx-auto px-6 md:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 text-foreground">
          Contact
        </h2>
        
        <p className="text-foreground/80 font-sans text-lg leading-relaxed mb-12">
          If you're working on something complex or unclear, I'm always interested in talking.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <a
            href="mailto:yashvipanchal22@gmail.com"
            className="font-sans text-base text-primary hover:text-primary/80 hover-underline transition-colors"
          >
            yashvipanchal22@gmail.com
          </a>
          
          <a
            href="https://www.linkedin.com/in/yashvipanchal/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-base text-primary hover:text-primary/80 hover-underline transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
