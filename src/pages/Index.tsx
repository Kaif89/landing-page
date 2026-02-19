import SiteNavbar from "@/components/SiteNavbar";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import CredentialsSection from "@/components/CredentialsSection";
import OfficeSection from "@/components/OfficeSection";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNavbar />
      <main>
        <HeroSection />
        <EmpathySection />
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <CredentialsSection />
        <OfficeSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
