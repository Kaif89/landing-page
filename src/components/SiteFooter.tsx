const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-taupe/60 pt-16 pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 pb-10 md:pb-12 border-b border-border/60">
          {/* Column 1: Practice info */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-2xl text-primary">Dr. Maya Reynolds</span>
            <p className="font-body text-sm text-foreground/60 leading-relaxed max-w-xs">
              Licensed Clinical Psychologist · PsyD<br />
              Serving Santa Monica & all of California
            </p>
            <address className="not-italic font-body text-sm text-foreground/60 leading-relaxed">
              123th Street 45 W<br />
              Santa Monica, CA 90401<br />
              <a href="mailto:hello@drmayareynolds.com" className="link-underline hover:text-primary transition-colors">
                hello@drmayareynolds.com
              </a><br />
              <a href="tel:+13105550100" className="link-underline hover:text-primary transition-colors">
                (310) 555-0100
              </a>
            </address>
          </div>

          {/* Column 2: Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg sm:text-xl text-primary">Office Hours</h3>
            <div className="flex flex-col gap-2 font-body text-sm text-foreground/60">
              <div className="flex justify-between gap-6">
                <span>Monday – Friday</span>
                <span>9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>Saturday</span>
                <span>By Appointment</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="font-body text-xs text-foreground/45 mt-1">
              Telehealth available for all California residents.
            </p>
          </div>

          {/* Column 3: Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg sm:text-xl text-primary">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "About Dr. Reynolds", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "FAQs", href: "#faqs" },
                { label: "Our Office", href: "#office" },
                { label: "Book a Consultation", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-foreground/60 link-underline hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-7">
          <p className="font-body text-xs text-foreground/40 text-center md:text-left">
            © {currentYear} Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-foreground/40 hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <p className="font-body text-xs text-foreground/30 text-center mt-6 leading-relaxed max-w-xl mx-auto">
          This website is for informational purposes only and does not constitute medical or psychological advice. If you are in crisis, please call 988 (Suicide & Crisis Lifeline) or visit your nearest emergency room.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
