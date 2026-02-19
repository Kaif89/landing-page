import FadeIn from "@/components/FadeIn";

const CtaBand = () => {
  return (
    <section id="contact" className="bg-primary section-py">
      <div className="container-site text-center flex flex-col items-center gap-7">
        <FadeIn direction="up">
          <p className="font-body text-xs text-primary-foreground/60 tracking-[0.25em] uppercase">
            Ready to Begin?
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight max-w-4xl">
            Take the first step toward feeling like yourself again.
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="font-body text-sm text-primary-foreground/70 max-w-xl leading-relaxed">
            I offer a free 20-minute phone consultation to see if we're a good fit. Reach out today — in-person in Santa Monica or via telehealth anywhere in California.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:hello@drmayareynolds.com" className="btn-outline-light">
              Get in Touch
            </a>
            <a
              href="tel:+13105550100"
              className="font-body text-sm text-primary-foreground/70 self-center tracking-wide hover:text-primary-foreground transition-colors duration-200"
            >
              (310) 555-0100
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CtaBand;
