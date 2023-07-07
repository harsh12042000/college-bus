import React from "react";
import Hero from "../Components/Home/Hero";
import Cards from "../Components/Home/cards";
import Emergency from "../Components/Home/Emergency";
import Maps from "../Components/Home/Maps";

export const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <Emergency />
      <Maps/>
    </>
  );
};
