import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

export const Work = () => {
  return (
    <section id="work" className="section-spacing border-t border-border">
      <div className="section-container">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12">
          Selected Work
        </h2>
        
        <p className="text-muted-foreground font-sans text-lg mb-12 max-w-2xl">
          A selection of projects exploring systems, behavior, and clarity. Each represents an inquiry into how things work—and how they might work better.
        </p>
        
        <div className="border-t border-border">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              context={project.context}
              explored={project.explored}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
