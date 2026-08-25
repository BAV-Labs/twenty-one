import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Concept } from "@/components/sections/Concept";
import { DailyExperience } from "@/components/sections/DailyExperience";
import { DataWithoutPressure } from "@/components/sections/DataWithoutPressure";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MirrorOfTruth } from "@/components/sections/MirrorOfTruth";
import { Momentum } from "@/components/sections/Momentum";
import { Privacy } from "@/components/sections/Privacy";
import { Why21Days } from "@/components/sections/Why21Days";
import { Footer } from "@/components/site/Footer";
import { Navigation } from "@/components/site/Navigation";

export function Index() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <DailyExperience />
        <DataWithoutPressure />
        <Momentum />
        <MirrorOfTruth />
        <BeforeAfter />
        <Why21Days />
        <Privacy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
