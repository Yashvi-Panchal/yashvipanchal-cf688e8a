import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const AboutPage = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation breadcrumb={{
      label: "About",
      href: "/about"
    }} />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-medium mb-8 text-primary md:text-4xl">
              About
            </h1>

            {/* Intro */}
            <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg mb-12">
              <p>
                I'm Yashvi — a designer and researcher based in Montréal. My work sits at the intersection of human behaviour, service design, and clear communication. I'm drawn to complex systems: the kind where policies meet people, and where small frictions add up to real consequences.
              </p>
            </div>

            {/* Background */}
            <div className="mb-12">
              <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Background
              </h2>
              <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg">
                <p>
                  I started my career as a Design Assistant at A Cube Inc. in India, before moving to Canada to pursue two postgraduate diplomas at Algonquin College — Human-Centred Design and Interactive Media Management. During my studies I worked with Employment and Social Development Canada, researching how people navigate the Canada Pension Plan Disability program.
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
                  I listen carefully, map what's actually happening, and translate it into something teams can act on. My background spans user research, journey mapping, stakeholder communication, and design thinking.
                </p>
              </div>
            </div>

            {/* Currently */}
            <div className="mb-8">
              <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Currently
              </h2>
              <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg">
                <p>
                  Open to service design, UX research, and coordination roles — full-time, contract, or project-based across Canada.
                </p>
              </div>
            </div>

            {/* Resume button */}
            <div className="mb-12">
              <Button asChild variant="ghost" className="px-0 hover:bg-transparent hover:text-primary">
                <a href="#">View my resume →</a>
              </Button>
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
        </div>
      </main>

      <Footer />
    </div>;
};
export default AboutPage;
