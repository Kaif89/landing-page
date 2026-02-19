import office1 from "@/assets/office1.jpeg";
import office2 from "@/assets/office2.jpeg";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const OfficeSection = () => {
  return (
    <section id="office" className="bg-background section-py overflow-hidden">
      <div className="container-site">
        <FadeIn direction="up">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="font-body text-xs text-sage-mid tracking-[0.25em] uppercase mb-3">
              A Place to Begin
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary">
              Our Office
            </h2>
            <p className="font-body text-sm text-foreground/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              A quiet, private space in the heart of Santa Monica — designed to help you feel calm and at ease from the moment you arrive.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Images */}
          <FadeIn direction="right" delay={0.1}>
            <div className="flex flex-col gap-5">
              <motion.div
                className="w-full aspect-[4/3] overflow-hidden shadow-md rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={office1}
                  alt="Bright and airy therapy office with exposed brick windows and natural light in Santa Monica"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="w-full sm:w-3/4 aspect-[4/3] overflow-hidden shadow-md rounded-sm self-end"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={office2}
                  alt="Cozy therapy office interior with soft lighting bookshelf and comfortable seating"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </FadeIn>

          {/* Text */}
          <div className="flex flex-col gap-7 md:pt-4">
            <FadeIn direction="up" delay={0.15}>
              <h3 className="font-display text-2xl sm:text-3xl text-primary">
                A Calm Space for Healing
              </h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.22}>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                My Santa Monica office was intentionally designed to feel like a sanctuary — not a clinical waiting room. Natural light, comfortable seating, and an uncluttered environment work together to help you settle in and feel safe before we even begin.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.28}>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                Clients regularly share that walking into the office helps them decompress. The space is private, soundproofed, and located in a quiet part of Santa Monica — making it easy to arrive, breathe, and begin.
              </p>
            </FadeIn>
            <div className="flex flex-col gap-4 mt-2">
              {[
                { icon: "📍", label: "Location", value: "123th Street 45 W, Santa Monica, CA 90401" },
                { icon: "🏠", label: "Session Format", value: "In-person & secure telehealth for California residents" },
                { icon: "🔒", label: "Privacy", value: "Private, soundproofed office — fully confidential" },
              ].map((item, i) => (
                <FadeIn key={item.label} direction="up" delay={0.34 + i * 0.07}>
                  <div className="flex items-start gap-4">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                      <p className="font-body text-sm text-foreground/80">{item.value}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn direction="up" delay={0.55}>
              <a href="#contact" className="btn-outline-primary self-start mt-2">
                Schedule a Visit
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
