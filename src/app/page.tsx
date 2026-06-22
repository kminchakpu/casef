import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/Home/AboutSection";
import Features from "@/components/Home/Features";
import ImpactStats from "@/components/Home/ImpactStats";
import Testimonials from "@/components/Home/Testimonials";



export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Features />
      <ImpactStats />
      <Testimonials />
    </>
  );
}
