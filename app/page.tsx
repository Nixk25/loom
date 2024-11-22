"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Interest from "@/components/Interest";
import Lenis from "lenis";
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
    </>
  );
}
