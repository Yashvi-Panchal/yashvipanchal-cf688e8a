import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { getProjectById, ProjectImage } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';
const ProjectPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const project = id ? getProjectById(id) : undefined;
  if (!project) {
    return <div className="min-h-screen bg-background">
        <Navigation breadcrumb={{
        label: 'Project Not Found',
        href: '#'
      }} />
        <main className="pt-[var(--nav-height)]">
          <div className="section-container section-spacing">
            <h1 className="font-serif text-3xl">Project not found</h1>
            <Link to="/#work" className="text-primary hover:underline mt-4 inline-block">
              ← Back to Work
            </Link>
          </div>
        </main>
        <Footer />
      </div>;
  }
  const hasNarrative = project.narrative && Object.keys(project.narrative).length > 0;
  return <div className="min-h-screen bg-background">
      <Navigation breadcrumb={{
      label: project.title,
      href: `/work/${project.id}`
    }} />
      
      <main className="pt-[var(--nav-height)]">
        {/* Hero Section */}
        <header className="animate-fade-up">
          {/* Back link */}
          <div className="max-w-3xl mx-auto px-6 md:px-8 pt-12 md:pt-16">
            <Link to="/#work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-sans">Back to Work</span>
            </Link>
          </div>

          {/* Title & Descriptor */}
          <div className="max-w-3xl mx-auto px-6 md:px-8 pt-12 md:pt-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-6 text-foreground">
              {project.title}
            </h1>
            {project.descriptor && <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-2xl">
                {project.descriptor}
              </p>}
          </div>

          {/* Metadata Row */}
          {project.metadata && <div className="max-w-3xl mx-auto px-6 md:px-8 pt-10">
              <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-sans border-t border-border pt-6">
                {project.metadata.role && <div>
                    <span className="text-muted-foreground block mb-1">Role</span>
                    <span className="text-foreground">{project.metadata.role}</span>
                  </div>}
                {project.metadata.focus && <div>
                    <span className="text-muted-foreground block mb-1">Focus</span>
                    <span className="text-foreground">{project.metadata.focus}</span>
                  </div>}
                {project.metadata.context && <div>
                    <span className="text-muted-foreground block mb-1">Context</span>
                    <span className="text-foreground">{project.metadata.context}</span>
                  </div>}
                {project.metadata.timeline && <div>
                    <span className="text-muted-foreground block mb-1">Timeline</span>
                    <span className="text-foreground">{project.metadata.timeline}</span>
                  </div>}
              </div>
            </div>}

          {/* Hero Image */}
          {project.heroImage && <div className="w-full mt-12 md:mt-16">
              <ProjectImageBlock image={project.heroImage} />
            </div>}
        </header>

        {/* Content Sections */}
        {hasNarrative ? <article className="animate-fade-up-delay-1">
            {project.narrative?.overview && <>
                <NarrativeSection title="Overview" content={project.narrative.overview} />
                {project.sectionImages?.afterOverview && <ProjectImageBlock image={project.sectionImages.afterOverview} />}
              </>}

            {project.narrative?.whyItMattered && <>
                <NarrativeSection title="Why This Mattered" content={project.narrative.whyItMattered} />
                {project.sectionImages?.afterWhyItMattered && <ProjectImageBlock image={project.sectionImages.afterWhyItMattered} />}
              </>}

            {project.narrative?.whatIObserved && <>
                <NarrativeSection title="Observations" content={project.narrative.whatIObserved} />
                {project.sectionImages?.afterWhatIObserved && <ProjectImageBlock image={project.sectionImages.afterWhatIObserved} />}
              </>}

            {project.narrative?.howIApproached && <>
                <NarrativeSection title="Approach" content={project.narrative.howIApproached} />
                {project.sectionImages?.afterHowIApproached && <ProjectImageBlock image={project.sectionImages.afterHowIApproached} />}
              </>}

            {project.narrative?.whatIExplored && <>
                <NarrativeSection title="Exploration" content={project.narrative.whatIExplored} />
                {project.sectionImages?.afterWhatIExplored && <ProjectImageBlock image={project.sectionImages.afterWhatIExplored} />}
              </>}

            {project.narrative?.whatItShaped && <NarrativeSection title="Reflection" content={project.narrative.whatItShaped} />}

            {/* Context Section */}
            <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
              <div className="border-t border-border pt-12">
                <span className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground">
                  Context
                </span>
                <p className="mt-4 text-foreground/80 font-sans leading-relaxed">
                  {project.context}
                </p>
              </div>
            </div>
          </article> :
      // Fallback for projects without narrative structure
      <article className="animate-fade-up-delay-1">
            <NarrativeSection title="What was explored" content={project.explored} />
            
            {project.fullDescription && <NarrativeSection title="Overview" content={project.fullDescription} />}

            {/* Context Section */}
            <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24">
              <div className="border-t border-border pt-12">
                <span className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground">
                  Context
                </span>
                <p className="mt-4 text-foreground/80 font-sans leading-relaxed">
                  {project.context}
                </p>
              </div>
            </div>
          </article>}
      </main>

      <Footer />
    </div>;
};
interface NarrativeSectionProps {
  title: string;
  content: string;
}
const NarrativeSection = ({
  title,
  content
}: NarrativeSectionProps) => {
  // Split content by double newlines to create paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  return <section className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24 my-px">
      <h2 className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-primary mb-8">
        {title}
      </h2>
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => <p key={index} className="font-serif text-lg md:text-xl text-foreground/90 leading-[1.8]">
            {paragraph}
          </p>)}
      </div>
    </section>;
};
interface ProjectImageBlockProps {
  image: ProjectImage;
}
const ProjectImageBlock = ({
  image
}: ProjectImageBlockProps) => {
  return <figure className="w-full my-8 md:my-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-sm bg-muted">
          <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" loading="lazy" />
        </div>
        {image.caption && <figcaption className="max-w-3xl mx-auto px-2 mt-4 text-sm text-muted-foreground font-sans text-center">
            {image.caption}
          </figcaption>}
      </div>
    </figure>;
};
export default ProjectPage;