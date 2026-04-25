import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

const tagFor = (id: string) =>
  id === 'canada-pension-plan-disability' ? 'UX Research' : 'Lived Research';

export const Work = () => {
  return (
    <section id="work" className="section-spacing border-t border-hairline">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="font-serif text-foreground leading-tight"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500 }}>
              A few projects worth <span className="italic text-sage">slowing down</span> for.
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="font-sans text-[14.5px] text-muted-foreground leading-relaxed">
              Each one is a study in how systems shape behaviour — and how careful research helps teams see what's actually happening.
            </p>
          </div>
        </div>

        <div className="border-t border-hairline">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group block border-b border-hairline py-9 md:py-12 transition-colors hover:bg-card/40"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-1 font-sans text-[13px] text-muted-foreground tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="md:col-span-5">
                  <h3 className="font-serif text-foreground transition-colors group-hover:text-primary flex items-start gap-3"
                      style={{ fontSize: 'clamp(26px, 2.4vw, 28px)', fontWeight: 500, lineHeight: 1.15 }}>
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 mt-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                </div>

                <div className="md:col-span-5 md:pr-8">
                  <p className="font-sans text-foreground/75 leading-relaxed pr-8" style={{ fontSize: '15px' }}>
                    {project.descriptor || project.context}
                  </p>
                </div>

                <div className="md:col-span-1 flex md:justify-end md:gap-6">
                  <span
                    className="inline-flex items-center justify-center font-sans uppercase"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      padding: '8px 16px',
                      border: '1px solid hsl(var(--foreground) / 0.18)',
                      color: 'hsl(var(--foreground) / 0.72)',
                      borderRadius: '2px',
                      minWidth: '130px',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tagFor(project.id)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
