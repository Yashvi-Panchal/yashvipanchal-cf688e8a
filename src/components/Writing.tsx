const entries = [
  {
    color: '#E8E0D5',
    accent: '#B85C38',
    category: 'Essay',
    title: 'On reading systems before redesigning them',
    status: 'Coming soon',
    label: '01',
  },
  {
    color: '#D8E4DA',
    accent: '#2C4A35',
    category: 'Field note',
    title: 'What waiting teaches you about institutional time',
    status: 'Coming soon',
    label: '02',
  },
  {
    color: '#E4DDD6',
    accent: '#8A7355',
    category: 'Reflection',
    title: 'Clarity is a form of care',
    status: 'Coming soon',
    label: '03',
  },
];

export const Writing = () => {
  return (
    <section id="writing" className="section-spacing border-t border-hairline">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-16 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-4">Writing & thinking</p>
            <h2 className="font-serif text-foreground leading-tight"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500 }}>
              Notes from the <span className="italic text-sage">in-between</span>.
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="font-sans text-[14.5px] text-muted-foreground leading-relaxed">
              Short essays and reflections on systems, attention, and the quiet craft of design research.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {entries.map((entry) => (
            <article
              key={entry.title}
              className="group cursor-pointer"
            >
              {/* Colored card instead of photo */}
              <div
                className="overflow-hidden mb-5 flex items-end justify-between p-5"
                style={{
                  borderRadius: '2px',
                  height: '180px',
                  background: entry.color,
                }}
              >
                <span
                  className="font-serif"
                  style={{
                    fontSize: '64px',
                    fontWeight: 400,
                    lineHeight: 1,
                    color: entry.accent,
                    opacity: 0.4,
                  }}
                >
                  {entry.label}
                </span>
                <span
                  className="font-sans text-[10px] tracking-widest uppercase"
                  style={{ color: entry.accent, opacity: 0.7 }}
                >
                  {entry.category}
                </span>
              </div>
              <p className="eyebrow mb-3" style={{ color: 'hsl(var(--foreground) / 0.5)' }}>
                {entry.category}
              </p>
              <h3 className="font-serif text-foreground mb-4 transition-colors group-hover:text-primary"
                  style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.25 }}>
                {entry.title}
              </h3>
              <span className="font-sans text-[12px] tracking-widest uppercase text-muted-foreground inline-flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-primary" style={{ borderRadius: '2px' }} />
                {entry.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
