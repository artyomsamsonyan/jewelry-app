import React, { useEffect, useState } from "react";
import { EmailIcon, LocationIcon, PhoneIcon } from "../envairoments/icons";
import { Layout } from "../layouts/Layout";

export const Contact: React.FC = () => {
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    setAnimation(true);
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <div
          className={`flex flex-col items-center pt-28 md:pt-32 px-5 md:px-8 max-w-7xl w-full ${
            animation ? "all_models" : "animation"
          }`}
        >
          <div className="flex flex-col items-center md:items-start md:max-w-4xl w-full">
            <span className="border-b-2 border-black px-2 md:px-5 py-2 text-2xl md:text-3xl font-jost_medium">
              Contact me for cooperation
            </span>
            <div className="flex flex-col mt-10 gap-5">
              <a
                href="mailto:vardansahakyan155@gmail.com"
                className="flex items-center gap-2 hover:opacity-100 border-b-2 border-white hover:border-black transition-colors py-1 max-w-min px-2"
              >
                <EmailIcon />
                <span className="text-xl font-jost_medium">
                  vardansahakyan155@gmail.com
                </span>
              </a>
              <a
                href="tel:37455905002"
                className="flex items-center gap-2 hover:opacity-100 border-b-2 border-white hover:border-black transition-colors py-1 max-w-min px-2"
              >
                <PhoneIcon />
                <span className="text-xl font-jost_medium">+37455905002</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Yerevan"
                className="flex items-center gap-2 hover:opacity-100 border-b-2 border-white hover:border-black transition-colors py-1 px-2 w-52"
                target="_blank"
                rel="noreferrer"
              >
                <LocationIcon />
                <span className="text-xl font-jost_medium">
                  {" "}
                  Armenia, Yerevan
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
