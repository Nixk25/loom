import Image, { StaticImageData } from "next/image";
import React from "react";
type CardType = {
  url: StaticImageData;
  title: string;
  author: string;
  id: number;
};
const HorizontalSectionCard = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px]  bg-neutral-200 rounded-lg"
    >
      <div className="absolute inset-0 z-0  w-full h-full ">
        <Image
          src={card.url}
          alt={card.title}
          fill
          placeholder="blur"
          className="object-cover "
        />
      </div>
      <div className="absolute -bottom-8 items-center w-full flex justify-between left-0 ">
        <p className="text-2xl font-black uppercase text-white ">
          {card.title}
        </p>
        <p className="text-sm font-normal">{card.author}</p>
      </div>
    </div>
  );
};

export default HorizontalSectionCard;
