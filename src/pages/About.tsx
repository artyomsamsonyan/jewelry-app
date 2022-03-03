import React, { useEffect, useState } from "react";
import { Layout } from "../layouts/Layout";

export const About: React.FC = () => {
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    setAnimation(true);
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <div
          className={`flex flex-col items-center pt-28 md:pt-32 px-8 max-w-7xl w-full ${
            animation ? "all_models" : "animation"
          }`}
        >
          <div className="flex justify-between items-center max-w-5xl w-full">
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
              <span className="border-b-2 border-black px-5 py-2 text-2xl md:text-3xl font-jost_medium md:pl-8">
                About me
              </span>
              <div className="w-full mt-10 text-xl font-jost_regular max-w-md w-full">
                Hello!
                <br /> <br />
                My name is Vardan Sahakyan and I аm a Jewelry 3D designer from Armenia, Yerevan.
                <br />
                I have experience with Matrix, Rhinoceros, V-Ray, Magics.
                All models on the website, created by me from scratch.
                <br />
              </div>
            </div>
            <div className="hidden md:block w-1/2">
              <img
                src="/assets/models/Engagement_Gold_Ring1.jpg"
                alt="ring"
                className="-mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
