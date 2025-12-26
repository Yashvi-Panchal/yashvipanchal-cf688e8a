import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Mapping Decision Architectures',
    context: 'Research project exploring how environments shape choices in organizational settings.',
    explored: 'The hidden structures that influence decision-making, from physical spaces to information flows. Developed frameworks for auditing and redesigning decision environments.',
  },
  {
    title: 'The Clarity Project',
    context: 'Personal writing initiative on cognitive simplicity and mental models.',
    explored: 'How we can think more clearly in an age of information overload. Essays on attention, filtering, and the art of knowing what to ignore.',
  },
  {
    title: 'Systems Narratives Workshop',
    context: 'Facilitated sessions for strategy teams at mid-size organizations.',
    explored: 'Helping teams articulate complex interdependencies through storytelling. Moving from linear plans to adaptive narratives.',
  },
  {
    title: 'Behavioral Design Audit',
    context: 'Consulting engagement with a digital product team.',
    explored: 'Identifying friction points and behavioral bottlenecks in user journeys. Recommendations grounded in cognitive science and systems thinking.',
  },
  {
    title: 'The Attention Diaries',
    context: 'Ongoing personal research on focus and distraction.',
    explored: 'Documenting patterns of attention across different contexts. Experimenting with environmental and behavioral interventions.',
  },
];

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
              key={project.title}
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
