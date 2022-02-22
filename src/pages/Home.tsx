import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../const";
import { ArrowRightIconWhite } from "../enviaroments/icons";
import { Layout } from "../layouts/Layout";

export const Home: React.FC = () => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [buttonAnimation, setButtonAnimation] = useState<boolean>(false);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => setButtonAnimation(true), 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <Layout footer={false}>
        <div
          className="flex justify-center w-full  min-h-screen bg-no-repeat bg-center z-10 bg-cover"
          style={{ backgroundImage: "url(/assets/home_wallpaper5.jpg)" }}
        >
          <div className="max-w-7xl w-full pt-28 md:pt-44 px-8">
            <div className={`flex mb-8 ${animation ? "home" : "animation"}`}>
              <span className="flex flex-col gap-3 text-4xl md:text-6xl text-white font-jost_semibold tracking-wide ">
                <div>You can see my</div>  
                <div>Works, by clicking</div>
                <div>The button below</div>
              </span>
            </div>
            <div
              className={`flex md:p-10 ${
                buttonAnimation ? "home_button" : "animation"
              }`}
            >
              <NavLink to={routes.allModels}>
                <button className="flex items-center gap-1 px-3 py-2 md:px-5 md:py-4 border-2 rounded-lg md:rounded-none md:border-4 border-white text-white font-jost_medium hover:border-lighGray/50 transition-colors">
                  Show all Models
                  <ArrowRightIconWhite />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
    </Layout>
  );
};
