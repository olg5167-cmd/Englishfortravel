import { Hero } from "./components/Hero";
import { ForWhom } from "./components/ForWhom";
import { Program } from "./components/Program";
import { WhySpecial } from "./components/WhySpecial";
import { Requirements } from "./components/Requirements";
import { Schedule } from "./components/Schedule";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Английский для путешествий | Онлайн-курс для детей";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Hero />
        <ForWhom />
        <Program />
        <WhySpecial />
        <Requirements />
        <Schedule />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}