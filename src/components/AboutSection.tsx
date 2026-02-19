import aboutImage from "@/assets/about-image.jpg";
import drMaya from "@/assets/dr-maya-reynolds.png";
import FadeIn from "@/components/FadeIn";

const stats = [
  { label: "Modalities", value: "CBT, EMDR, Mindfulness, Somatic" },
  { label: "Format", value: "In-Person & Telehealth (CA)" },
  { label: "Specialty", value: "Anxiety, Trauma, Burnout" },
  { label: "Location", value: "Santa Monica, CA 90401" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-background section-py overflow-hidden">
      <div className="container-site">
        <FadeIn direction="up">
          <p className="font-body text-xs text-sage-mid tracking-[0.25em] uppercase mb-10 sm:mb-12 md:mb-14 text-center">
            About Dr. Reynolds
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Images */}
          <FadeIn direction="right" delay={0.1}>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
                <div
                  className="w-full aspect-[4/5] overflow-hidden shadow-lg"
                  style={{ borderRadius: "50% 50% 0 0 / 30% 30% 0 0" }}
                >
                  <img
                    src={aboutImage}
                    alt="Calm and welcoming therapy office in Santa Monica"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background overflow-hidden shadow-lg">
                  <img
                    src={drMaya}
                    alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <div className="flex flex-col gap-6 pt-0 md:pt-8">
            <FadeIn direction="up" delay={0.15}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
                A warm, grounded approach to lasting change.
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.25}>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                I'm Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California. I work with adults who feel overwhelmed by anxiety, stress, or the lingering weight of past experiences — many of whom appear "functional" on the outside while quietly struggling inside.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.32}>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                My approach is warm, collaborative, and evidence-based. I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological roots of what you're experiencing.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.38}>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                I believe therapy works best when you feel respected, understood, and actively involved. My goal isn't just symptom relief — it's helping you develop insight, resilience, and a stronger relationship with yourself.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.44}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {stats.map((item) => (
                  <div key={item.label} className="border-l-2 border-terracotta pl-3">
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="font-body text-xs sm:text-sm text-foreground/80 mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.52}>
              <a href="#contact" className="btn-outline-primary self-start mt-2">
                Work With Me
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
