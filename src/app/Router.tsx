import React from "react";
import { Home, AllModels, Contact, About } from "../pages";
import { Routes, Route } from "react-router-dom";
import { routes } from "../const";
  
export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.allModels} element={<AllModels />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.contact} element={<Contact />} />
    </Routes>
  );
};
