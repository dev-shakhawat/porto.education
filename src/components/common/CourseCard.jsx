import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";

const CourseCard = ({bg , profile , title , students , comments , price , author}) => {
  return (
    <div>
      <div className="relative h-[190px]">
        <img
          src={bg}
          className="object-cover size-full"
          alt="Course"
        />
        <img
          src={profile}
          className="absolute right-5 bottom-[-30px] h-[60px] rounded-[30px] w-[60px]"
          alt="Avatar"
        />
      </div>
      <div className="px-8 pt-9 pb-8 max-sm:px-4 max-sm:pt-6 max-sm:pb-4 bg-white  ">
        <p className="mb-2 text-xs uppercase text-secondery   ">{author}</p>
        <h2 className="mb-4 cmnSubTitle">
          {title}
        </h2>
        <div className="flex gap-5 items-center max-sm:flex-wrap">
          <div className="flex gap-1 items-center text-xs text-brand2">
            <FaRegUser className=" text-brand text-lg  "/>
            <span>{students}</span>
          </div>
          <div className="flex gap-1 items-center text-xs text-brand2">
            <FaRegComments className=" text-brand text-lg  "/>
            <span>{comments}</span>
          </div>
          <div className="ml-auto text-xl font-bold text-red-500">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
