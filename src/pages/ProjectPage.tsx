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

  const hasNarrative = project.narrative && Object.keys(project.narrative).length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation breadcrumb={{ label: project.title, href: `/work/${project.id}` }} />
      
      <main className="pt-[var(--nav-height)]">
        <article className="max-w-[680px] mx-auto px-6 md:px-8">
          {/* Back link */}
          <div className="pt-12 md:pt-16">
            <Link 
              to="/#work" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-sans">Back to Work</span>
            </Link>
          </div>

          {/* Header */}
          <header className="pt-12 md:pt-16 pb-12 md:pb-16 animate-fade-up">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-normal leading-[1.2] mb-6 text-foreground">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
              {project.descriptor || project.context}
            </p>
          </header>

          {/* Narrative Content */}
          {hasNarrative ? (
            <div className="space-y-16 md:space-y-20 pb-24 md:pb-32 animate-fade-up-delay-1">
              {project.narrative?.overview && (
                <NarrativeSection 
                  title="Overview" 
                  content={project.narrative.overview} 
                />
              )}

              {project.narrative?.whyItMattered && (
                <NarrativeSection 
                  title="Why this work mattered" 
                  content={project.narrative.whyItMattered} 
                />
              )}

              {project.narrative?.whatIObserved && (
                <NarrativeSection 
                  title="What I observed" 
                  content={project.narrative.whatIObserved} 
                />
              )}

              {project.narrative?.howIApproached && (
                <NarrativeSection 
                  title="How I approached the problem" 
                  content={project.narrative.howIApproached} 
                />
              )}

              {project.narrative?.whatIExplored && (
                <NarrativeSection 
                  title="What I explored" 
                  content={project.narrative.whatIExplored} 
                />
              )}

              {project.narrative?.whatItShaped && (
                <NarrativeSection 
                  title="What this shaped in my thinking" 
                  content={project.narrative.whatItShaped} 
                />
              )}
            </div>
          ) : (
            // Fallback for projects without narrative structure
            <div className="space-y-12 pb-24 md:pb-32 animate-fade-up-delay-1">
              <NarrativeSection 
                title="What was explored" 
                content={project.explored} 
              />
              
              {project.fullDescription && (
                <NarrativeSection 
                  title="Overview" 
                  content={project.fullDescription} 
                />
              )}
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

interface NarrativeSectionProps {
  title: string;
  content: string;
}

const NarrativeSection = ({ title, content }: NarrativeSectionProps) => {
  // Split content by double newlines to create paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  return (
    <section>
      <h2 className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-primary mb-6">
        {title}
      </h2>
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className="font-serif text-lg md:text-xl text-foreground/90 leading-[1.75]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
