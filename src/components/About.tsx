import aboutPortrait from '@/assets/about-portrait.jpg';

const tags = [
  'Systems thinking',
  'Human behaviour',
  'Service design',
  'Research',
  'Bilingual EN/FR',
];

export const About = () => {
  return (
    <section id="about" className="section-spacing border-t border-hairline">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left — portrait with offset accent square */}
          <div className="md:col-span-5">
            <div className="relative inline-block w-full">
              <img
                src={aboutPortrait}
                alt="Yashvi Panchal in a thoughtful pose"
                className="w-full object-cover"
                style={{ aspectRatio: '3 / 4', borderRadius: '2px' }}
                loading="lazy"
              />
              {/* Decorative offset square */}
              <span
                aria-hidden="true"
                className="hidden md:block absolute"
                style={{
                  bottom: '-18px',
                  right: '-18px',
                  width: '120px',
                  height: '120px',
                  border: '2px solid hsl(var(--taupe))',
                  borderRadius: '2px',
                }}
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="md:col-span-7">
            <p className="eyebrow mb-5">About me</p>

            <h2 className="font-serif text-foreground leading-[1.05] mb-8"
                style={{ fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 500 }}>
              I think in systems.{' '}
              <span className="italic text-sage block md:inline">
                I feel in people.
              </span>
            </h2>

            <div className="space-y-5 text-foreground/80 font-sans leading-relaxed max-w-xl" style={{ fontSize: '15px' }}>
              <p>
                My work sits between research, service design, and communication. I'm drawn to the messy middle of public services and complex organizations — where policies meet people, and where small frictions add up to real consequences.
              </p>
              <p>
                I've worked with public-sector teams on benefits, immigration, and customer experience. Across each project, my role has been the same: listen carefully, map what's actually happening, and translate it into something teams can act on.
              </p>
              <p>
                I'm bilingual (English / French), based between Montréal and Canada with roots in India, and most at home when I'm helping a team see their system more clearly.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
              {tags.map((tag, i) => (
                <span key={tag} className="flex items-center gap-3">
                  <span className="font-sans text-[13px] text-foreground/75">
                    {tag}
                  </span>
                  {i < tags.length - 1 && (
                    <span className="text-foreground/30">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
