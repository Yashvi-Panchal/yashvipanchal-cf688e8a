import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation breadcrumb={{ label: "About", href: "/about" }} />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Text Content */}
            <div className="md:col-span-7 order-2 md:order-1">
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8">
                About
              </h1>
              
              <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg">
                <p>
                  I'm a systems-oriented thinker drawn to the patterns beneath everyday complexity. My work sits at the intersection of behavioral insight, strategic clarity, and human-centered design.
                </p>
                
                <p>
                  Whether through writing, research, or facilitation, I help individuals and organizations see their challenges more clearly—and move through them with intention.
                </p>
                
                <p>
                  My background spans creative writing, cognitive exploration, and strategic consulting. I believe that the most powerful insights often come from paying closer attention to what's already there.
                </p>

                <p>
                  Over the years, I've worked with startups, established organizations, and independent creators to clarify their narratives, refine their positioning, and develop strategies rooted in genuine understanding rather than assumption.
                </p>

                <p>
                  When I'm not working, you'll find me reading about behavioral economics, exploring new cities, or writing essays that attempt to make sense of the messy, beautiful complexity of being human.
                </p>
              </div>

              {/* Areas of Focus */}
              <div className="mt-12 bg-card border border-border p-6 md:p-8">
                <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  Areas of Focus
                </h2>
                <ul className="space-y-3 font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Systems thinking & complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Human behavior & decision-making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Clarity of cognition & communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Strategic narrative & positioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Creative inquiry & research</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="sticky top-24">
                <div className="aspect-[4/5] bg-muted border border-border overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop&crop=face"
                    alt="Yashvi Panchal"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center font-sans">
                  Yashvi Panchal
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
