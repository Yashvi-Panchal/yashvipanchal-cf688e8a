import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import yashviPortrait from "@/assets/yashvi-portrait.jpg";

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
              
              {/* Intro */}
              <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg mb-12">
                <p>
                  I'm a designer and researcher with experience in user research, service design, and project coordination. My background combines design studio work with public-sector research, where I've worked on understanding user needs and improving complex services.
                </p>
              </div>

              {/* Background */}
              <div className="mb-12">
                <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  Background
                </h2>
                <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg">
                  <p>
                    My professional experience spans both commercial and public-sector contexts.
                  </p>
                  <p>
                    At A Cube Inc. in India, I worked as a Design Assistant, supporting product development, client communication, and design documentation for commercial projects.
                  </p>
                  <p>
                    More recently, I collaborated with Employment and Social Development Canada on a service design project focused on improving the Canada Pension Plan Disability experience. My work included conducting user interviews, creating journey maps, and synthesizing research insights into practical recommendations.
                  </p>
                  <p>
                    I hold two post-graduate diplomas from Algonquin College, Ottawa — Interactive Media Management and Human-Centred Design — and a Bachelor of Design from India.
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
                    I'm interested in work at the intersection of research, design, and communication. This includes understanding user needs through interviews, mapping service journeys, coordinating with stakeholders, and translating insights into clear, actionable recommendations.
                  </p>
                  <p>
                    My skills include user research, journey mapping, information synthesis, stakeholder communication, and design thinking.
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
                    I'm seeking opportunities in UX research, service design, customer experience, or coordination roles. I'm open to full-time, contract, or project-based work across Canada.
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
                    <a
                      href="mailto:yashvipanchal22@gmail.com"
                      className="font-sans text-lg text-foreground hover:text-primary hover-underline transition-colors"
                    >
                      yashvipanchal22@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">LinkedIn</span>
                    <a
                      href="https://linkedin.com/in/yashvipanchal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-lg text-foreground hover:text-primary hover-underline transition-colors"
                    >
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
                  <img 
                    src={yashviPortrait}
                    alt="Yashvi Panchal"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
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
