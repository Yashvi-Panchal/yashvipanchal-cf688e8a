interface ProjectCardProps {
  title: string;
  context: string;
  explored: string;
  index: number;
}

export const ProjectCard = ({ title, context, explored, index }: ProjectCardProps) => {
  return (
    <article className="group border-t border-border py-8 md:py-10 first:border-t-0">
      <div className="grid md:grid-cols-12 gap-4 md:gap-8">
        <div className="md:col-span-1 text-muted-foreground font-sans text-sm">
          {String(index).padStart(2, '0')}
        </div>
        
        <div className="md:col-span-4">
          <h3 className="font-serif text-xl md:text-2xl font-medium group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        
        <div className="md:col-span-7 space-y-4">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Context
            </span>
            <p className="mt-1 text-foreground/80 font-sans leading-relaxed">
              {context}
            </p>
          </div>
          
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              What was explored
            </span>
            <p className="mt-1 text-foreground/80 font-sans leading-relaxed">
              {explored}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
