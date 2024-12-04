"use client";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/ui/Cursor";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Interest from "@/components/Interest";
import Lenis from "lenis";
import ParralaxScale from "@/components/ParallaxScale";
import HorizontalScrollCarouselSection from "@/components/HorizontalScrollCarouselSection";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Interest />
      <ParralaxScale />
      <HorizontalScrollCarouselSection />
      <JoinUs />
      <Footer />
    </>
  );
}
