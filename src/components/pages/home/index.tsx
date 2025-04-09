import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ParallaxBackground from "./components/ParallaxBackground";
import { AnimatedPage, FadeInSection } from "./styles";

export default function HomePage() {
  return (
    <AnimatedPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ParallaxBackground />
      <FadeInSection
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </FadeInSection>
      <FadeInSection
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <AboutSection />
      </FadeInSection>
      <FadeInSection
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ExperienceSection />
      </FadeInSection>
      <FadeInSection
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SkillsSection />
      </FadeInSection>
      <FadeInSection
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <ContactSection />
      </FadeInSection>
    </AnimatedPage>
  );
}
