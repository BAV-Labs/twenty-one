import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Twenty One — 21 days. One conscious choice at a time." },
      {
        name: "description",
        content:
          "Twenty One is a calm, reflective habit-change app. Step away from a habit for 21 days and understand what happens along the way.",
      },
      { property: "og:title", content: "Twenty One — 21 days. One conscious choice at a time." },
      {
        property: "og:description",
        content:
          "Twenty One is a calm, reflective habit-change app. Step away from a habit for 21 days and understand what happens along the way.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
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
