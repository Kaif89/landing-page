import heroImage from "@/assets/hero-image.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-background section-py overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image – arch mask with float animation */}
          <motion.div
            className="order-2 md:order-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="w-full aspect-[3/4] overflow-hidden arch-mask-top shadow-xl"
                style={{ borderRadius: "50% 50% 0 0 / 40% 40% 0 0" }}
              >
                <img
                  src={heroImage}
                  alt="A peaceful therapy session setting in Santa Monica"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
              {/* Decorative circles */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-sage-light/60 -z-10"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-terracotta/20 -z-10"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Text content – staggered entrance */}
          <div className="order-1 md:order-2 flex flex-col gap-7">
            <motion.p
              className="font-body text-xs sm:text-sm text-sage-mid tracking-[0.2em] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Licensed Clinical Psychologist · Santa Monica, CA
            </motion.p>
            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Find clarity.<br />
              Reclaim <em>yourself.</em>
            </motion.h1>
            <motion.p
              className="font-body text-sm sm:text-base text-foreground/70 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Therapy for high-achieving adults navigating anxiety, burnout, and the weight of past experiences — in Santa Monica and across California via telehealth.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <a href="#contact" className="btn-outline-primary">
                Book a Free Consultation
              </a>
              <a href="#about" className="font-body text-sm text-primary link-underline self-center tracking-wide">
                Learn More About Dr. Reynolds
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
