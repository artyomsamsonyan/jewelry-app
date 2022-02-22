import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../const";
import {
  CloseIcon,
  CloseIconWhite,
  DiamondIcon,
  DiamondIconBlack,
  MenuIcon,
  MenuIconWhite,
} from "../enviaroments/icons";

interface HeaderProps {
  blur: boolean;
  onBlur: () => void;
}

export const Header: React.FC<HeaderProps> = ({ blur, onBlur }) => {
  const [animation, setAnimation] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const location = useLocation();
  useEffect(() => {
    setAnimation(true);
    // eslint-disable-next-line
  }, []);

  const handleShowModal = () => {
    setShowModal(!showModal);
    onBlur();
  };

  return (
    <div
      className={`flex justify-center items-center z-30 absolute top-0 w-full ${
        location.pathname === routes.home && "bg-gradient-black"
      }`}
    >
      <div
        className={`flex justify-between items-center max-w-7xl w-full gap-5 sm:gap-10 p-5 sm:px-8 sm:py-10 
        ${location.pathname === routes.home ? "text-white" : "text-black"}
        ${animation ? "header" : "animation"}`}
      >
        <NavLink to={routes.home} className="flex items-center gap-3">
          {location.pathname === routes.home ? (
            <DiamondIcon />
          ) : (
            <DiamondIconBlack />
          )}
          <span className="text-xl md:text-3xl font-jost_semibold tracking-widest">
            Sahakyan's Jewelry
          </span>
        </NavLink>
        <div className="hidden md:flex gap-5 text-sm md:text-lg h-8">
          <NavLink
            to={routes.allModels}
            className={`font-jost_medium tracking-widest px-2 ${
              location.pathname === routes.home
                ? "hover:border-b-2 hover:border-white"
                : "border-b-2 border-white hover:border-black"
            } transition-colors`}
          >
            All Models
          </NavLink>
          <NavLink
            to={routes.contact}
            className={`font-jost_medium tracking-widest px-2 ${
              location.pathname === routes.home
                ? "hover:border-b-2 hover:border-white"
                : "border-b-2 border-white hover:border-black"
            } transition-colors`}
          >
            Contact
          </NavLink>
          <NavLink
            to={routes.about}
            className={`font-jost_medium tracking-widest px-2 ${
              location.pathname === routes.home
                ? "hover:border-b-2 hover:border-white"
                : "border-b-2 border-white hover:border-black"
            } transition-colors`}
          >
            About
          </NavLink>
        </div>

        {/* for Mobile version */}
        <div className="block md:hidden">
          {showModal ? (
            location.pathname === routes.home ? (
              <button onClick={handleShowModal}>
                <CloseIconWhite />
              </button>
            ) : (
              <button onClick={handleShowModal}>
                <CloseIcon />
              </button>
            )
          ) : location.pathname === routes.home ? (
            <button onClick={handleShowModal}>
              <MenuIconWhite />
            </button>
          ) : (
            <button onClick={handleShowModal}>
              <MenuIcon />
            </button>
          )}
        </div>

        {/* for Mobile version */}
        {showModal && (
          <div className="block md:hidden absolute top-24 left-0 z-30 min-h-screen w-full">
            <div className="flex flex-col items-center gap-5 text-lg h-8 z-40">
              <NavLink
                to={routes.allModels}
                className="font-jost_medium tracking-widest px-2"
              >
                All Models
              </NavLink>
              <NavLink
                to={routes.contact}
                className="font-jost_medium tracking-widest px-2"
              >
                Contact
              </NavLink>
              <NavLink
                to={routes.about}
                className="font-jost_medium tracking-widest px-2"
              >
                About
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
