export const Contact = () => {
  return (
    <section id="contact" className="section-spacing border-t border-hairline">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">Contact</p>

          <h2 className="font-serif text-foreground leading-[1.05] mb-7"
              style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 500 }}>
            Let's think{' '}
            <span className="italic text-primary">together.</span>
          </h2>

          <blockquote
            className="font-serif italic text-foreground/60"
            style={{
              fontSize: '24px',
              borderLeft: '2px solid #B85C38',
              paddingLeft: '1.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
          >
            The best way to understand a system is to follow the people moving through it.
          </blockquote>

          <p className="font-sans text-foreground/80 text-[16px] leading-relaxed max-w-lg mb-10">
            I'm seeking opportunities in UX research, service design, customer experience, or coordination roles — open to full-time, contract, or project-based work across Canada. If you're working on something complex or unclear, I'm always interested in talking.
          </p>

          <div className="space-y-5 mb-10">
            <div>
              <span className="eyebrow block mb-2" style={{ color: 'hsl(var(--foreground) / 0.5)' }}>
                Email
              </span>
              <a
                href="mailto:yashvipanchal22@gmail.com"
                className="font-sans text-[16px] text-foreground hover-underline"
              >
                yashvipanchal22@gmail.com
              </a>
            </div>

            <div>
              <span className="eyebrow block mb-2" style={{ color: 'hsl(var(--foreground) / 0.5)' }}>
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/yashvipanchal/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[16px] text-foreground hover-underline"
              >
                linkedin.com/in/yashvipanchal
              </a>
            </div>
          </div>

          <a href="mailto:yashvipanchal22@gmail.com" className="btn-terracotta">
            Say hello
          </a>
        </div>
      </div>
    </section>
  );
};
