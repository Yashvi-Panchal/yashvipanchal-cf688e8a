import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { getProjectById } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation breadcrumb={{ label: 'Project Not Found', href: '#' }} />
        <main className="pt-[var(--nav-height)]">
          <div className="section-container section-spacing">
            <h1 className="font-serif text-3xl">Project not found</h1>
            <Link to="/#work" className="text-primary hover:underline mt-4 inline-block">
              ← Back to Work
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation breadcrumb={{ label: project.title, href: `/work/${project.id}` }} />
      
      <main className="pt-[var(--nav-height)]">
        <article className="section-container section-spacing">
          <Link 
            to="/#work" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wide">Back to Work</span>
          </Link>

          <header className="mb-12 animate-fade-up">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-balance">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground font-sans">
              {project.context}
            </p>
          </header>

          <div className="space-y-8 animate-fade-up-delay-1">
            <section>
              <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                What was explored
              </h2>
              <p className="text-foreground/80 font-sans leading-relaxed text-lg">
                {project.explored}
              </p>
            </section>

            {project.fullDescription && (
              <section className="pt-8 border-t border-border">
                <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                  Overview
                </h2>
                <p className="text-foreground/80 font-sans leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </section>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;
