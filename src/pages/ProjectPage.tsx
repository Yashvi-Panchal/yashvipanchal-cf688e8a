import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { getProjectById, ProjectImage } from '@/data/projects';
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
        {/* Hero Section - Full Width with Soft Background */}
        <header className="animate-fade-up bg-primary/5">
          {/* Back link */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-sans">Back to Work</span>
            </Link>
          </div>

          {/* Hero Content - Two Column Layout */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left: Title & Descriptor */}
              <div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-6 text-foreground">
                  {project.title}
                </h1>
                {project.descriptor && (
                  <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
                    {project.descriptor}
                  </p>
                )}
              </div>

              {/* Right: Hero Image */}
              {project.heroImage && (
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl bg-card">
                    <img
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        {hasNarrative ? (
          <article className="animate-fade-up-delay-1">
            {/* Overview Section with Project Details Sidebar */}
            {project.narrative?.overview && (
              <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                    {/* Overview Content */}
                    <div className="md:col-span-2">
                      <SectionLabel>Overview</SectionLabel>
                      <NarrativeContent content={project.narrative.overview} />
                    </div>

                    {/* Project Details Card */}
                    {project.metadata && (
                      <div className="md:col-span-1">
                        <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border sticky top-32">
                          <h3 className="font-sans font-medium text-foreground mb-6">Project Details</h3>
                          <div className="space-y-5">
                            {project.metadata.role && (
                              <MetadataItem label="Role" value={project.metadata.role} />
                            )}
                            {project.metadata.focus && (
                              <MetadataItem label="Focus" value={project.metadata.focus} />
                            )}
                            {project.metadata.context && (
                              <MetadataItem label="Context" value={project.metadata.context} />
                            )}
                            {project.metadata.timeline && (
                              <MetadataItem label="Timeline" value={project.metadata.timeline} />
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Full Width Image After Overview */}
            {project.sectionImages?.afterOverview && (
              <FullWidthImage image={project.sectionImages.afterOverview} />
            )}

            {/* Why This Mattered */}
            {project.narrative?.whyItMattered && (
              <ContentSection
                label="Why This Mattered"
                content={project.narrative.whyItMattered}
              />
            )}

            {/* Full Width Image After Why It Mattered */}
            {project.sectionImages?.afterWhyItMattered && (
              <FullWidthImage image={project.sectionImages.afterWhyItMattered} />
            )}

            {/* Observations */}
            {project.narrative?.whatIObserved && (
              <ContentSection
                label="Observations"
                content={project.narrative.whatIObserved}
                variant="highlighted"
              />
            )}

            {/* Full Width Image After Observations */}
            {project.sectionImages?.afterWhatIObserved && (
              <FullWidthImage image={project.sectionImages.afterWhatIObserved} />
            )}

            {/* Approach */}
            {project.narrative?.howIApproached && (
              <ContentSection
                label="Approach"
                content={project.narrative.howIApproached}
              />
            )}

            {/* Full Width Image After Approach */}
            {project.sectionImages?.afterHowIApproached && (
              <FullWidthImage image={project.sectionImages.afterHowIApproached} />
            )}

            {/* Exploration */}
            {project.narrative?.whatIExplored && (
              <ContentSection
                label="Exploration"
                content={project.narrative.whatIExplored}
              />
            )}

            {/* Full Width Image After Exploration */}
            {project.sectionImages?.afterWhatIExplored && (
              <FullWidthImage image={project.sectionImages.afterWhatIExplored} />
            )}

            {/* Reflection */}
            {project.narrative?.whatItShaped && (
              <ContentSection
                label="Reflection"
                content={project.narrative.whatItShaped}
                variant="closing"
              />
            )}

            {/* Context Footer */}
            <ContextFooter context={project.context} />
          </article>
        ) : (
          // Fallback for projects without narrative structure
          <article className="animate-fade-up-delay-1">
            <ContentSection label="What was explored" content={project.explored} />
            {project.fullDescription && (
              <ContentSection label="Overview" content={project.fullDescription} />
            )}
            <ContextFooter context={project.context} />
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
};

// Section Label Component
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-sans font-medium tracking-[0.15em] uppercase text-primary mb-4">
    {children}
  </span>
);

// Narrative Content with Paragraphs
const NarrativeContent = ({ content }: { content: string }) => {
  const paragraphs = content.split('\n\n').filter((p) => p.trim());
  return (
    <div className="space-y-6">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="font-serif text-lg md:text-xl text-foreground/90 leading-[1.8]"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

// Metadata Item for Project Details Card
const MetadataItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-sm text-muted-foreground block mb-1">{label}</span>
    <span className="text-foreground font-medium">{value}</span>
  </div>
);

// Content Section Component
interface ContentSectionProps {
  label: string;
  content: string;
  variant?: 'default' | 'highlighted' | 'closing';
}

const ContentSection = ({ label, content, variant = 'default' }: ContentSectionProps) => {
  const bgClass = variant === 'highlighted' ? 'bg-muted/30' : variant === 'closing' ? 'bg-primary/5' : '';
  
  return (
    <section className={`py-20 md:py-28 ${bgClass}`}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <SectionLabel>{label}</SectionLabel>
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-8">
          {getSectionTitle(label)}
        </h2>
        <NarrativeContent content={content} />
      </div>
    </section>
  );
};

// Get section title based on label
const getSectionTitle = (label: string): string => {
  const titles: Record<string, string> = {
    'Why This Mattered': 'Understanding the Stakes',
    'Observations': 'Key Insights',
    'Approach': 'Research & Synthesis',
    'Exploration': 'Directions Explored',
    'Reflection': 'What This Shaped',
    'What was explored': 'Exploration',
    'Overview': 'Project Overview',
  };
  return titles[label] || label;
};

// Full Width Image Component
interface FullWidthImageProps {
  image: ProjectImage;
}

const FullWidthImage = ({ image }: FullWidthImageProps) => (
  <figure className="w-full py-8 md:py-12 bg-muted/20">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-card">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      {image.caption && (
        <figcaption className="max-w-3xl mx-auto px-2 mt-6 text-sm text-muted-foreground font-sans text-center">
          {image.caption}
        </figcaption>
      )}
    </div>
  </figure>
);

// Context Footer Component
const ContextFooter = ({ context }: { context: string }) => (
  <section className="py-16 md:py-24 border-t border-border">
    <div className="max-w-3xl mx-auto px-6 md:px-12">
      <SectionLabel>Context</SectionLabel>
      <p className="font-sans text-foreground/80 leading-relaxed text-lg">
        {context}
      </p>
    </div>
  </section>
);

export default ProjectPage;
