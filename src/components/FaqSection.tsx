import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import decorCircle from "@/assets/decor-circle.jpg";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "I am an out-of-network provider. I can provide a monthly superbill that you may submit to your insurance company for possible reimbursement, depending on your out-of-network benefits. Many clients with PPO plans receive partial reimbursement.",
  },
  {
    q: "Do you offer telehealth sessions?",
    a: "Yes. I offer secure, HIPAA-compliant telehealth sessions for clients located anywhere in California. Many clients appreciate the flexibility of video sessions, while others prefer meeting in-person at my Santa Monica office.",
  },
  {
    q: "What does a first session look like?",
    a: "The first session is a chance for us to get to know each other. I'll ask about what's bringing you in, your history, and what you're hoping to get from therapy. It's also an opportunity for you to ask questions and decide whether working with me feels like a good fit.",
  },
  {
    q: "How long does therapy typically last?",
    a: "This varies for each person. Some clients work with me for a few months to address a specific concern; others benefit from longer-term work. We'll check in regularly and adjust as needed based on your goals and progress.",
  },
  {
    q: "What is your approach to therapy?",
    a: "I take a warm, collaborative, and evidence-based approach. Sessions are structured enough to feel supportive, while leaving room for reflection and depth. I draw from CBT, EMDR, mindfulness-based techniques, and somatic (body-oriented) practices depending on what's most helpful for you.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="bg-background section-py overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Decorative image */}
          <FadeIn direction="right" delay={0.1} className="hidden md:flex justify-center items-start pt-8">
            <div className="relative">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="w-full max-w-[280px] sm:max-w-xs md:w-80 h-[360px] sm:h-80 md:h-96 overflow-hidden shadow-lg"
                  style={{ borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%" }}
                >
                  <img
                    src={decorCircle}
                    alt="Lush green botanical leaves representing natural calm"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full bg-sage-light/70" />
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-terracotta/30" />
            </div>
          </FadeIn>

          {/* FAQ accordion */}
          <div>
            <FadeIn direction="up">
              <p className="font-body text-xs text-sage-mid tracking-[0.25em] uppercase mb-3 sm:mb-4">
                Common Questions
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-8 md:mb-10">
                Everything you want to know
              </h2>
            </FadeIn>

            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <FadeIn key={i} direction="up" delay={0.08 * i}>
                  <div className="border-b border-border">
                    <button
                      className="w-full flex items-center justify-between py-4 sm:py-5 gap-4 text-left"
                      onClick={() => setOpen(open === i ? null : i)}
                      aria-expanded={open === i}
                    >
                      <span className="font-display text-base sm:text-lg text-primary leading-snug pr-2">{faq.q}</span>
                      <motion.span
                        className="flex-shrink-0 text-primary/60"
                        animate={{ rotate: open === i ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {open === i ? <Minus size={16} /> : <Plus size={16} />}
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open === i && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="pb-5 pr-8">
                            <p className="font-body text-sm text-foreground/70 leading-relaxed">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
