import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/home/Hero";
import ProgressSection from "../../components/home/ProgressSection";
import Features from "../../components/home/Features";
import HowItWorks from "../../components/home/HowItWorks";
import Motivation from "../../components/home/Motivation";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProgressSection />
        <Features />
        <HowItWorks />
        <Motivation />
      </main>

      <Footer />
    </>
  );
}

export default Home;