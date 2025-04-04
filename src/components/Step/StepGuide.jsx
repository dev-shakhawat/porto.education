

import React from "react";
import { StepItem } from "./StepItem";
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import datasearch from "../../assets/datasearch.svg"
import note from "../../assets/note.svg"
import laptop from "../../assets/laptop.svg"

export const StepGuide = () => {

  const StpItems = [
    {number: one , icon : datasearch , title: "Find Your Course" , subtitle: "step 1"},
    {number: two , icon : note , title: "Make a Register" , subtitle: "step 2"},
    {number: three , icon : laptop , title: "Enjoy and Learn" , subtitle: "step 3"},
  ]
  return (
    <div className="flex gap-28 justify-center items-center px-0 py-8 bg-white max-md:flex-col max-md:gap-10 max-md:p-5 max-sm:p-4">
      {StpItems.map((item ,index)=> <StepItem key={index} number={item.number} icon={item.icon} title={item.title} subtitle={item.subtitle} />)}
    </div>
  );
};

export default StepGuide;
