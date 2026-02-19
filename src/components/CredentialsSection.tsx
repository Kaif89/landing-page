import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const credentials = [
  {
    category: "Education",
    items: [
      "Doctor of Psychology (PsyD) — Clinical Psychology",
      "Bachelor of Science in Psychology — University of California",
    ],
  },
  {
    category: "Licensure",
    items: [
      "Licensed Clinical Psychologist — State of California",
      "PSY License in Good Standing",
    ],
  },
  {
    category: "Certifications & Training",
    items: [
      "EMDR Certified Therapist — EMDRIA",
      "Mindfulness-Based Cognitive Therapy (MBCT) Training",
      "Somatic Experiencing Practitioner (SEP) — In Progress",
    ],
  },
  {
    category: "Professional Affiliations",
    items: [
      "American Psychological Association (APA)",
      "California Psychological Association (CPA)",
      "EMDRIA — EMDR International Association",
    ],
  },
];

const CredentialsSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-sage-light/30 section-py">
      <div className="container-site">
        <FadeIn direction="up">
          <p className="font-body text-xs text-sage-mid tracking-[0.25em] uppercase mb-3 sm:mb-4 text-center">
            Credentials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary text-center mb-8 md:mb-12">
            Professional background
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {credentials.map((cred, i) => (
            <FadeIn key={i} direction="up" delay={0.08 * i}>
              <div className="border-b border-border">
                <button
                  className="w-full flex items-center justify-between py-4 sm:py-5 gap-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-display text-lg sm:text-xl text-primary">{cred.category}</span>
                  <motion.span
                    className="flex-shrink-0 text-primary/60"
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pb-5">
                        <ul className="flex flex-col gap-2">
                          {cred.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground/70">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sage-mid flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
