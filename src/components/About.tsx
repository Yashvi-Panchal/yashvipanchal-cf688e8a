import aboutPortrait from '@/assets/about-portrait.jpg';

const tags = [
  'Systems thinking',
  'Human behaviour',
  'Service design',
  'Research',
  'Learning French',
];

export const About = () => {
  return (
    <section id="about" className="section-spacing border-t border-hairline">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left: portrait */}
          <div className="md:col-span-5">
            <img
              src={aboutPortrait}
              alt="Yashvi Panchal in a thoughtful pose"
              className="w-full object-cover"
              style={{ aspectRatio: '3 / 4', borderRadius: '2px' }}
              loading="lazy"
            />
          </div>

          {/* Right: content */}
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
                My work sits between research, service design and writing. I am drawn to the places where policies meet people, because that is where small frictions turn into real consequences.
              </p>
              <p>
                I have worked on projects about disability benefits and immigration. On each one I spoke with the people going through the system, tried to understand what was really happening to them, and then explained it in a way a team could act on.
              </p>
              <p>
                I am based in India, and I spent the last few years studying and working in Canada. I am most at home when I am helping people see their own system more clearly.
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
