import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ArrowRightIconBlack, ArrowLeftIconBlack } from "../enviaroments/icons";
import { Layout } from "../layouts/Layout";
import { allModels, mainModels } from "../mock";

export const AllModels: React.FC = () => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [activeModel, setActiveModel] = useState<number>(0);

  const handleSetActive = (n: number) => {
    setActiveModel(n);
    window.innerWidth > 768 ? window.scrollTo(0, 100) : window.scrollTo(0, 0);
  }
  useEffect(() => {
    setAnimation(true);
    // eslint-disable-next-line
  }, []);

  const singleSettings = window.innerWidth > 768 ? 
  {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "120px",
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <ArrowRightIconBlack />,
    prevArrow: <ArrowLeftIconBlack />,
    pauseOnHover: false,
  } 
  :
  {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <ArrowRightIconBlack />,
    prevArrow: <ArrowLeftIconBlack />,
    pauseOnHover: false,
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <div
          className={`flex flex-col items-center pt-28 md:pt-32 md:px-8 max-w-7xl w-full ${
            animation ? "all_models" : "animation"
          }`}
        >
          <div className="md:w-2/3 text-2xl md:text-3xl font-jost_medium mb-10">
            <span className="border-b-2 border-black px-5 py-2">
              All Models
            </span>
          </div>
          <div className="flex flex-col gap-10 max-w-5xl w-full mb-8">
            <Slider {...singleSettings}>
              {allModels[activeModel].map((src, i) => (
                <img key={`active-model-${i}`} src={src} alt="model" />
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex justify-center bg-gray/30 w-full">
          <div className="flex flex-wrap justify-around max-w-7xl w-full gap-5 p-5">
            {mainModels.map((model, i) => (
              <div
                key={`model-${i}`}
                className={`flex flex-col justify-center items-center w-24 h-24 md:w-52 md:h-52 
                 transition-opacity bg-white p-2 cursor-pointer
                 ${model.number === activeModel ? "opacity-70" : "hover:opacity-80"}`}
                onClick={() => handleSetActive(model.number)}
              >
                <img
                  src={model.src}
                  alt="model"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
