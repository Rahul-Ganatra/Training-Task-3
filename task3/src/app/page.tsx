import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import StatsSection from "./components/StatsSection";
import WhatDifference from "./components/whatdifference";
import SuccessStories from "./components/SuccessStories";
import RequestCallBack from "./components/RequestCallBack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <StatsSection />
      <WhatDifference />
      <SuccessStories />
      <RequestCallBack />
      <Footer />
    </div>
  );
}
