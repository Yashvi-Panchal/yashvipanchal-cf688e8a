import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  context: string;
  explored: string;
  index: number;
}

export const ProjectCard = ({ id, title, context, explored, index }: ProjectCardProps) => {
  return (
    <Link to={`/work/${id}`} className="block">
      <article className="group border-t border-border py-8 md:py-10 first:border-t-0 cursor-pointer">
        <div className="grid md:grid-cols-12 gap-4 md:gap-8">
          <div className="md:col-span-1 text-muted-foreground font-sans text-sm">
            {String(index).padStart(2, '0')}
          </div>
          
          <div className="md:col-span-4">
            <h3 className="font-serif text-xl md:text-2xl font-medium group-hover:text-primary transition-colors flex items-center gap-2">
              {title}
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
    </Link>
  );
};
