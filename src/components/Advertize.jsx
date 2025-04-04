import React from "react";

import Bannerimg from "../assets/Bannerimg.png";
import AdvertizeCard from "./common/AdvertizeCard";
import award from "../assets/award.svg"
import list from "../assets/list.svg"
import instructor from "../assets/instructor.svg"
import advershap from "../assets/advershap.svg"



const Advertize = () => {

    const advertizes = [
        {image: award , title: "National Awards" , text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis elit vitae enim vehicula fermentum consectetur adipiscing elit."},
        {image: list , title: "Many Courses" , text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis elit vitae enim vehicula fermentum consectetur adipiscing elit."},
        {image: instructor , title: "The Best Instructors" , text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis elit vitae enim vehicula fermentum consectetur adipiscing elit."},
    ]

  return (
    <div className="mt-[73px] relative overflow-hidden  ">
        <img src={advershap} alt="advershap" className="absolute top-50 left-[-70px] opacity-[.3]  " />
      <div className="container">
        <div className="flex justify-between items-center ">
          <img src={Bannerimg} alt="Bannerimg" />
          <div className=" w-[40%] flex flex-col gap-[60px]  ">
            {advertizes.map((item , index)=> <AdvertizeCard key={index} imageURl={item.image} title={item.title} text={item.text} />)}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Advertize;
