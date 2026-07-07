import NavbarTabs from "@/components/NavbarTabs";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

import BackgroundLayout from "@/components/BackgroundLayout";

export default function LandingPage() {
  return (
    <BackgroundLayout>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-white/30 backdrop-blur-xl border-b border-white/20">
        <img src="/icon.png" className="h-12 object-contain" alt="PORTFOLIO" />

        <div className="flex-1 flex justify-center">
          <NavbarTabs />
        </div>

        <div className="w-32" />
      </nav>

      {/* CONTENT */}
      <div className="section-divider">
        <AboutSection />
      </div>

      <div className="section-divider">
        <SkillsSection />
      </div>

      <div className="section-divider">
        <ProjectsSection />
      </div>

      <div className="section-divider">
        <ExperienceSection />
      </div>

      <div className="section-divider">
        <ContactSection />
      </div>
    </BackgroundLayout>
  );
}
