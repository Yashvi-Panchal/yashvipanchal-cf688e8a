import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import yashviPortrait from "@/assets/yashvi-portrait.jpg";
export const AboutPage = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation breadcrumb={{
      label: "About",
      href: "/about"
    }} />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Text Content */}
            <div className="md:col-span-7 order-2 md:order-1">
              <h1 className="font-serif text-4xl font-medium mb-8 text-primary md:text-4xl">
                About
              </h1>
              
              {/* Intro */}
              <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg mb-12">
                <p>
                  I think in systems. I feel in people.
                </p>
                <p>
                  I'm Yashvi — a human-centred designer and researcher based in Montréal. Originally from India, I moved to Canada to expand what I thought design could mean. What I found was a deeper question: how do systems shape human experience, and what can we do about it?
                </p>
              </div>

              {/* Background */}
              <div className="mb-12">
                <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  Background
                </h2>
                <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg">
                  <p>
                    I started my career as a Design Assistant at A Cube Inc. in India — learning what it means to make something with real constraints, real clients, and real consequences. After 2.5 years, I wanted more. I wanted to understand not just how things look, but how they work for the people who have to live inside them.
                  </p>
                  <p>
                    That brought me to Algonquin College in Ottawa, where I completed two post-graduate diplomas — Human-Centred Design and Interactive Media Management. During my studies I worked with Employment and Social Development Canada, researching the lived experience of people navigating the Canada Pension Plan Disability program. What I found there shaped everything: a process that looks logical on paper can be deeply irrational from the perspective of the person going through it.
                  </p>
                  <p>
                    I hold a Bachelor of Design from India, and I'm currently building toward B2 French — because language is how you truly understand a place and its people.
                  </p>
                </div>
              </div>

              {/* What I Do */}
              <div className="mb-12">
                <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  What I Do
                </h2>
                <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg">
                  <p>
                    I work at the intersection of research, service design, and human behaviour. I'm drawn to complex systems — the kind where policies meet people, where small frictions add up to real consequences, where the gap between intent and experience is widest.
                  </p>
                  <p>
                    My approach is simple: follow the people. Listen carefully. Map what's actually happening. Then translate that into something teams can act on.
                  </p>
                </div>
              </div>

              {/* Beyond Work */}
              <div className="mb-12">
                <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  Beyond Work
                </h2>
                <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg">
                  <p>
                    I read about neuroscience, behavioural economics, and the science of how humans make decisions. I meditate daily. I journal. I believe that understanding yourself is the foundation of understanding anyone else — which is why human-centred design, for me, is never just a methodology. It's a way of moving through the world.
                  </p>
                  <p>
                    I don't have everything figured out. But I'm here, still going — and I think that counts for something.
                  </p>
                </div>
              </div>

              {/* Currently */}
              <div className="mb-12">
                <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  Currently
                </h2>
                <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg">
                  <p>
                    Open to opportunities in service design, UX research, and coordination roles — full-time, contract, or project-based, across Canada. If you're working on something complex or unclear, I'm always interested in talking.
                  </p>
                </div>
              </div>

              {/* Let's Connect */}
              <div className="bg-card border border-border p-6 md:p-8">
                <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  Let's Connect
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">Email</span>
                    <a href="mailto:yashvipanchal22@gmail.com" className="font-sans text-lg text-foreground hover:text-primary hover-underline transition-colors">
                      yashvipanchal22@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">LinkedIn</span>
                    <a href="https://linkedin.com/in/yashvipanchal" target="_blank" rel="noopener noreferrer" className="font-sans text-lg text-foreground hover:text-primary hover-underline transition-colors">
                      linkedin.com/in/yashvipanchal
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="sticky top-24">
                <div className="aspect-[4/5] bg-muted border border-border overflow-hidden">
                  <img src={yashviPortrait} alt="Yashvi Panchal" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
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
    </div>;
};
export default AboutPage;
