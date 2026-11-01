import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import aboutPagePortrait from "@/assets/about-page.jpg";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation breadcrumb={{ label: "About", href: "/about" }} />

      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">

            {/* Text */}
            <div className="md:col-span-8 order-2 md:order-1">
              <h1 className="font-serif text-4xl font-medium mb-8 text-primary">About</h1>

              <div className="space-y-6 text-foreground/80 font-sans leading-relaxed text-lg mb-12">
                <p>
                  I am a designer and researcher interested in how institutions, policies and technology shape ordinary life. My training is in human centred design, and my most substantial research so far was with Employment and Social Development Canada, where I studied how people experience applying for disability benefits.
                </p>
                <p>
                  What I keep noticing is that most systems are built around the people who run them. The people who use them are left to interpret unclear letters, long waits and forms written for someone else. I am interested in that gap, and in what it takes to close it.
                </p>
                <p>
                  I write about these observations here, alongside more personal notes on moving between countries and languages. I am based in India and spent the past few years studying and working in Canada.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Currently</h2>
                <p className="text-foreground/80 font-sans leading-relaxed text-lg">
                  I am open to research, service design and writing opportunities, whether full time, contract or project based.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Button asChild variant="ghost" className="px-0 hover:bg-transparent hover:text-primary">
                  <a href="#">View my resume →</a>
                </Button>
                <a
                  href="https://linkedin.com/in/yashvipanchal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:yashvipanchal22@gmail.com"
                  aria-label="Email"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="md:col-span-4 order-1 md:order-2">
              <div className="md:sticky md:top-28">
                <img
                  src={aboutPagePortrait}
                  alt="Yashvi Panchal"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4 / 5", borderRadius: "2px" }}
                  loading="lazy"
                />
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
