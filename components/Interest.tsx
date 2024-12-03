import React from "react";
import { trending } from "@/app/constants";
import Card from "./ui/Card";
import { useCursor } from "@/app/CursorContext";
import InterestTexts from "./ui/InterestTexts";

const Interest = () => {
  const { setCursorHidden } = useCursor();

  return (
    <section
      onMouseEnter={() => setCursorHidden(true)}
      onMouseLeave={() => setCursorHidden(false)}
    >
      <div className="mt-[10vh]   sm:mt-[50vh] flex relative flex-col gap-10 items-center last:h-[20vh]">
        {trending.map((trendingArtwork) => (
          <Card key={trendingArtwork.id} data={trendingArtwork} />
        ))}
      </div>
      <InterestTexts />
    </section>
  );
};

export default Interest;
