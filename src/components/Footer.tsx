import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="flex justify-center items-center z-30 w-full ">
      <div className="flex justify-center max-w-2xl w-full px-10 pt-10 pb-5">
        <div className="flex flex-wrap sm:flex-row justify-center gap-3 sm:gap-10">
          <div className="flex items-end gap-10">
            <img
              src="/assets/rhino_icon.png"
              alt="Rhinoceros Icon"
              className="h-8"
            />
            <span className="text-white text-gray text-base font-jost_regular -ml-8">
              Rhinoceros
            </span>
            <img
              src="/assets/matrix_icon.webp"
              alt="Matrix Icon"
              className="w-full h-8 opacity-70"
            />
          </div>
          <div className="flex items-end gap-10">
            <img
              src="/assets/vray_icon.png"
              alt="V-Ray Icon"
              className="w-full h-6"
            />
            <img
              src="/assets/magics_icon.png"
              alt="Magics Icon"
              className="w-full h-8 opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
