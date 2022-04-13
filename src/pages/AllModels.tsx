import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ArrowRightIconBlack, ArrowLeftIconBlack } from "../envairoments/icons";
import { Layout } from "../layouts/Layout";
import { mainModels } from "../mock";
import { Model } from "../type/model";

export const AllModels: React.FC = () => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [activeModel, setActiveModel] = useState<Model>(mainModels[0]);
  // const [activeTab, setActiveTab] = useState<typeof Rings | typeof Bracelets | typeof Pendants>(Rings);

  const handleSetActiveModel = (model: Model) => {
    setActiveModel(model);
    window.innerWidth > 768 ? window.scrollTo(0, 100) : window.scrollTo(0, 0);
  };
  useEffect(() => {
    setAnimation(true);
    // eslint-disable-next-line
  }, []);

  const singleSettings =
    window.innerWidth > 768
      ? {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "120px",
          slidesToShow: 1,
          speed: 1000,
          autoplay: true,
          autoplaySpeed: 3000,
          nextArrow: <ArrowRightIconBlack />,
          prevArrow: <ArrowLeftIconBlack />,
          pauseOnHover: false,
        }
      : {
          className: "center",
          centerMode: true,
          infinite: true,
          slidesToShow: 1,
          speed: 1000,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: false,
        };

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <div
          className={`flex flex-col items-center pt-20 md:pt-36 md:px-8 max-w-7xl w-full ${
            animation ? "all_models" : "animation"
          }`}
        >
          <div className="md:w-2/3 text-2xl md:text-3xl font-jost_medium mb-10">
            <span className="border-b-2 border-black px-3 md:px-5 py-1 md:py-2">
              All Models
            </span>
          </div>
          <div className="flex flex-col gap-10 max-w-5xl w-full mb-8">
            <Slider {...singleSettings}>
              {activeModel.allPhotos.map((src, i) => (
                <img key={`active-model-${i}`} src={src} alt="model" />
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray/30 w-full pb-16">
          <span className=" text-center text-base md:text-2xl font-jost_medium px-2 py-1 md:py-2 bg-white mt-2 md:mt-3 w-full">Rings, Pendants, Bracelets and etc. </span>
          <div className="flex flex-wrap justify-center max-w-7xl w-full gap-5 p-3 md:p-4">
            {mainModels.map((model, i) => (
              <div
                key={`model-${i}`}
                className={`flex flex-col justify-center items-center w-24 h-24 md:w-52 md:h-52
                 transition-opacity bg-white p-2 cursor-pointer
                 ${
                   model === activeModel
                     ? "opacity-50"
                     : "hover:opacity-80"
                 }`}
                onClick={() => handleSetActiveModel(model)}
              >
                <img src={model.mainPhoto} alt="model" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

//        <div className="md:w-4/5 text-xl md:text-2xl font-jost_medium mt-5 md:mt-10 mb-2">
//             <span className="border-b-2 border-black px-4 py-2">Rings</span>
//           </div>
//           <div className="flex flex-wrap justify-center md:justify-start max-w-7xl w-full gap-5 p-5">
//             {Rings.map((model, i) => (
//               <div
//                 key={`model-${i}`}
//                 className={`flex flex-col justify-center items-center w-24 h-24 md:w-52 md:h-52
//                  transition-opacity bg-white p-2 cursor-pointer
//                  ${
//                    model.number === activeModel
//                      ? "opacity-50"
//                      : "hover:opacity-80"
//                  }`}
//                 onClick={() => handleSetActive(model.number)}
//               >
//                 <img src={model.src} alt="model" className="object-cover" />
//               </div>
//             ))}
//           </div>
//           <div className="md:w-4/5 text-xl md:text-2xl font-jost_medium  mt-5 md:mt-10 mb-2">
//             <span className="border-b-2 border-black px-4 py-2">Pendants</span>
//           </div>
//           <div className="flex flex-wrap justify-center md:justify-start max-w-7xl w-full gap-5 p-5">
//             {Pendants.map((model, i) => (
//               <div
//                 key={`model-${i}`}
//                 className={`flex flex-col justify-center items-center w-24 h-24 md:w-52 md:h-52
//                  transition-opacity bg-white p-2 cursor-pointer
//                  ${
//                    model.number === activeModel
//                      ? "opacity-50"
//                      : "hover:opacity-80"
//                  }`}
//                 onClick={() => handleSetActive(model.number)}
//               >
//                 <img src={model.src} alt="model" className="object-cover" />
//               </div>
//             ))}
//           </div>
//           <div className="md:w-4/5 text-xl md:text-2xl font-jost_medium  mt-5 md:mt-10 mb-2">
//             <span className="border-b-2 border-black px-4 py-2">Bracelets</span>
//           </div>
//           <div className="flex flex-wrap justify-center md:justify-start max-w-7xl w-full gap-5 p-5">
//             {Bracelets.map((model, i) => (
//               <div
//                 key={`model-${i}`}
//                 className={`flex flex-col justify-center items-center w-24 h-24 md:w-52 md:h-52
//                  transition-opacity bg-white p-2 cursor-pointer
//                  ${
//                    model.number === activeModel
//                      ? "opacity-50"
//                      : "hover:opacity-80"
//                  }`}
//                 onClick={() => handleSetActive(model.number)}
//               >
//                 <img src={model.src} alt="model" className="object-cover" />
//               </div>
//             ))}
//           </div>

// <div className="flex w-full justify-center md:justify-start gap-2 px-5 md:gap-5 md:w-4/5 text-lg md:text-2xl font-jost_medium mt-5 md:mt-10 mb-2">
//   <button
//     onClick={() => setActiveTab(Rings)}
//     className={`border-b-2 ${
//       activeTab === Rings
//         ? "border-black"
//         : "border-black/0 hover:opacity-70"
//     } transition-colors px-2 md:px-4 py-1 d:py-1.5`}
//   >
//     Rings
//   </button>
//   <button
//     onClick={() => setActiveTab(Pendants)}
//     className={`border-b-2 ${
//       activeTab === Pendants
//         ? "border-black"
//         : "border-black/0 hover:opacity-70"
//     } transition-colors px-2 md:px-4 py-1 md:py-1.5`}
//   >
//     Pendants
//   </button>
//   <button
//     onClick={() => setActiveTab(Bracelets)}
//     className={`border-b-2 ${
//       activeTab === Bracelets
//         ? "border-black"
//         : "border-black/0 hover:opacity-70"
//     } transition-colors px-2 md:px-4 py-1 md:py-1.5`}
//   >
//     Bracelets
//   </button>
// </div>
// <div className="flex flex-wrap justify-center md:justify-start max-w-7xl w-full gap-5 p-5">
//   {activeTab.map((model, i) => (
//     <div
//       key={`model-${i}`}
//       className={`flex flex-col justify-center items-center w-24 h-24 md:w-52 md:h-52
//     transition-opacity bg-white p-2 cursor-pointer
//     ${
//       model.number === activeModel ? "opacity-70" : "hover:opacity-80"
//     }`}
//       onClick={() => handleSetActive(model.number)}
//     >
//       <img src={model.src} alt="model" className="object-cover" />
//     </div>
//   ))}
// </div>
