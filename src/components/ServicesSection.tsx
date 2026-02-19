import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const services = [
  {
    title: "Anxiety & Panic Therapy",
    description:
      "Chronic worry, racing thoughts, physical tension, and panic attacks can be exhausting. Using CBT and somatic techniques, I help you understand the patterns driving your anxiety and develop tools to feel calmer and more regulated in your daily life — not just in session.",
    tags: ["CBT", "Somatic Work", "Panic Disorder"],
  },
  {
    title: "Trauma & EMDR Therapy",
    description:
      "Whether you've experienced a single traumatic event or long-standing patterns from childhood or relationships, I offer a careful, paced approach to trauma work. Using EMDR and trauma-informed practices, we focus on safety, stabilization, and restoring your sense of self.",
    tags: ["EMDR", "Complex Trauma", "Childhood Experiences"],
  },
  {
    title: "Burnout & Perfectionism Coaching",
    description:
      "Many high-achieving professionals, entrepreneurs, and creatives arrive feeling disconnected from themselves after years of pushing through. Therapy becomes a space to slow down, reconnect with what matters, and build more sustainable ways of working and living.",
    tags: ["Burnout Recovery", "High Achievers", "Perfectionism"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-warm-taupe/50 section-py">
      <div className="container-site">
        <FadeIn direction="up">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="font-body text-xs text-sage-mid tracking-[0.25em] uppercase mb-3">
              Areas of Focus
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary">
              How I can help you thrive
            </h2>
            <p className="font-body text-sm text-foreground/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              Serving adults in Santa Monica and throughout California — in-person and via secure telehealth.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} direction="up" delay={0.1 + i * 0.12}>
              <motion.div
                className="service-card bg-background h-full"
                whileHover={{ y: -6, boxShadow: "0 12px 32px -8px hsl(155 28% 28% / 0.12)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-2xl text-primary">{service.title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs text-primary/70 border border-primary/20 px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <a href="#contact" className="btn-outline-primary">
              Book a Free Consultation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;
