import React from "react";

type Detail = {
  label: string;
  value: string | undefined;
};

type Details = Detail[];
const DrawerDetails = ({ details }: { details: Details }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 container px-4  min-[1500px]:grid-cols-4  text-center  gap-5 w-full">
      {details.map(
        (detail, index) =>
          detail.value && (
            <div key={index} className="flex  items-center flex-col">
              {" "}
              <h3 className="drawerHeadline ">{detail.label}</h3>
              <p className="text-sm text-neutral-500 font-light">
                {detail.value}
              </p>
            </div>
          )
      )}
    </div>
  );
};

export default DrawerDetails;
