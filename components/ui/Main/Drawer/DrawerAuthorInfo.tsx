import React from "react";
import { Photo } from "../MainClient";
const DrawerAuthorInfo = ({
  selectedPhoto,
}: {
  selectedPhoto: Photo | null;
}) => {
  return (
    <div className="flex flex-col  w-full items-center md:items-end">
      <h1 className="mainHeadline flex justify-center text-center  md:justify-end md:text-end md:leading-[120px] xl:leading-[150px] ">
        {selectedPhoto?.author}
      </h1>
      <p className="flex text-sm max-w-[70%] font-normal  text-neutral-500  justify-center text-center  md:justify-end md:text-end md:mt-10">
        {selectedPhoto?.description}
      </p>
    </div>
  );
};

export default DrawerAuthorInfo;
