"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Interest from "@/components/Interest";
import Lenis from "lenis";
import ParralaxScale from "@/components/ParallaxScale";
import HorizontalScrollCarouselSection from "@/components/HorizontalScrollCarouselSection";
import JoinUs from "@/components/JoinUs";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Hero />
      <Interest />
      <ParralaxScale />
      <HorizontalScrollCarouselSection />
      <JoinUs />
    </>
  );
}
