import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation breadcrumb={{ label: "About", href: "/about" }} />
      <main className="pt-28 pb-16">
        <div className="section-container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start">

            <div className="md:col-span-7">
              <p
                className="font-sans mb-5"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#B85C38",
                }}
              >
                About
              </p>
              <h1
                className="font-serif text-foreground leading-[1.1] mb-8"
                style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300 }}
              >
                I'm Yashvi, a designer and{" "}
                <em style={{ fontStyle: "italic", color: "#B85C38" }}>researcher.</em>
              </h1>

              <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-[17px] mb-12">
                <p>
                  I'm based in India and Canada, and I spend most of my time thinking about
                  what happens when policies meet people. I'm drawn to the small frictions in
                  a system that add up to real consequences for someone who is already having
                  a hard time.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="eyebrow mb-4">Background</h2>
                <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-[17px]">
                  <p>
                    I started out as a design assistant at A Cube Inc. in India, where I
                    designed accessories for two and a half years. It was good work, but I
                    kept wondering whether I was only helping to make more products for the
                    market. I wanted my work to matter more than that.
                  </p>
                  <p>
                    That question took me to Canada, where I did two postgraduate diplomas at
                    Algonquin College in Ottawa, one in Human-Centred Design and one in
                    Interactive Media Management. During my studies I did a UX research
                    co-op with Employment and Social Development Canada, looking at how
                    people move through the Canada Pension Plan Disability program.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="eyebrow mb-4">How I work</h2>
                <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-[17px]">
                  <p>
                    I like to start by listening, and by following the people who are moving
                    through a system instead of the process as it looks on paper. From there
                    I try to map what is really happening and put it in a form that a team
                    can act on. In practice that has meant user research, journey mapping,
                    and a lot of plain-language communication.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="eyebrow mb-4">Writing</h2>
                <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-[17px]">
                  <p>
                    Outside of project work, I write. I'm curious about neuroscience and
                    behavioural economics, and about why people make the choices they do
                    inside systems that were not designed with them in mind. You can read my
                    essays <a href="/#writing" className="text-primary hover-underline">here</a>.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="eyebrow mb-4">Currently</h2>
                <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-[17px]">
                  <p>
                    I'm open to service design and UX research work, whether that is
                    full-time, contract, or a single project. I'm also glad to talk with
                    anyone working on humane technology, civic tech, or public-sector
                    design, even if there is no role attached.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[15px] text-foreground hover:text-primary hover-underline transition-colors"
                >
                  View my resume →
                </a>
              </div>

              <div className="bg-card border border-border p-6 md:p-8">
                <h2 className="eyebrow mb-6">Let's connect</h2>
                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href="mailto:yashvipanchal22@gmail.com"
                    className="inline-flex items-center gap-2 font-sans text-[16px] text-foreground hover:text-primary hover-underline transition-colors"
                  >
                    <Mail size={18} strokeWidth={1.5} />
                    yashvipanchal22@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yashvipanchal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Yashvi on LinkedIn"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={22} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 md:sticky md:top-28">
              <img
                src="/about-photo.jpg"
                alt="Yashvi Panchal reading"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4 / 5" }}
              />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
