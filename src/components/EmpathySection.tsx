import empathyImage from "@/assets/empathy-image.jpg";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const struggles = [
  "Constant worry or a mind that won't slow down",
  "Feeling exhausted despite looking 'fine' from the outside",
  "Difficulty sleeping or a body that feels tense and on edge",
  "Bracing for something to go wrong — even when things are okay",
  "Old experiences that still affect your relationships or confidence",
];

const EmpathySection = () => {
  return (
    <section className="bg-sage-light/40 section-py overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div className="flex flex-col gap-7">
            <FadeIn direction="up">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1]">
                You don't have to carry <em>this alone.</em>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p className="font-body text-sm sm:text-base text-foreground/70 leading-relaxed">
                Many of the people I work with are thoughtful and capable — yet internally feel stuck, overwhelmed, or emotionally depleted. If any of these sound familiar, therapy can help:
              </p>
            </FadeIn>
            <ul className="flex flex-col gap-3">
              {struggles.map((item, i) => (
                <FadeIn key={item} direction="up" delay={0.15 + i * 0.08}>
                  <li className="flex items-start gap-3 font-body text-sm text-foreground/75">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                    {item}
                  </li>
                </FadeIn>
              ))}
            </ul>
            <FadeIn direction="up" delay={0.6}>
              <div className="pt-2 border-t border-border">
                <a href="#services" className="btn-outline-primary inline-block mt-5">
                  How I Can Help
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn direction="left" delay={0.2}>
            <div className="flex justify-center md:justify-end">
              <motion.div
                className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="w-full aspect-[3/4] overflow-hidden shadow-lg"
                  style={{ borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%" }}
                >
                  <img
                    src={empathyImage}
                    alt="Warm hands holding a cup of tea representing care and support"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
