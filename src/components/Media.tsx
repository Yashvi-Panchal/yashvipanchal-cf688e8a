const writings = [
  {
    title: 'On Seeing Systems',
    description: 'Why the ability to perceive interconnections is the meta-skill of our time.',
    date: '2024',
  },
  {
    title: 'The Geometry of Decisions',
    description: 'How spatial metaphors shape our understanding of choice and consequence.',
    date: '2024',
  },
  {
    title: 'Clarity as Practice',
    description: 'Moving beyond "thinking clearly" as aspiration to clarity as daily discipline.',
    date: '2023',
  },
  {
    title: 'Notes on Attention',
    description: 'Fragments from a year of observing where my mind goes—and why.',
    date: '2023',
  },
  {
    title: 'The Quiet Power of Restraint',
    description: 'What we gain by choosing not to act, speak, or add.',
    date: '2023',
  },
];

export const Media = () => {
  return (
    <section id="media" className="section-spacing border-t border-border">
      <div className="section-container">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
          Notes & Reflections
        </h2>
        
        <p className="text-muted-foreground font-sans text-lg mb-12 max-w-2xl">
          Essays and observations on systems, cognition, and the craft of thinking clearly.
        </p>
        
        <div className="space-y-0">
          {writings.map((writing) => (
            <article
              key={writing.title}
              className="group border-t border-border py-6 md:py-8 cursor-pointer hover:bg-card/50 transition-colors -mx-4 px-4 md:-mx-6 md:px-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                <div className="flex-1">
                  <h3 className="font-serif text-lg md:text-xl font-medium group-hover:text-primary transition-colors">
                    {writing.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground font-sans text-sm md:text-base">
                    {writing.description}
                  </p>
                </div>
                
                <span className="text-sm text-muted-foreground font-sans md:mt-1">
                  {writing.date}
                </span>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-muted-foreground font-sans text-sm">
            For speaking inquiries or collaboration, please get in touch.
          </p>
        </div>
      </div>
    </section>
  );
};
