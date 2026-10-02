import { ModeProvider } from "@/components/ModeProvider";
import { Splash } from "@/components/Splash";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Manifesto } from "@/components/Manifesto";
import { Programs } from "@/components/Programs";
import { Steps } from "@/components/Steps";
import { Team } from "@/components/Team";
import { Stats } from "@/components/Stats";
import { Videos } from "@/components/Videos";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <ModeProvider>
      <Splash />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Programs />
        <Steps />
        <Team />
        <Stats />
        <Videos />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </ModeProvider>
  );
}
