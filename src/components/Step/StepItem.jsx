import React from "react";

export const StepItem = ({
  number,
  icon,
  title,
  subtitle,
}) => {
  return (
    <div className="flex relative items-center gap-2 max-md:justify-start max-md:w-full">
      <img src={number} alt="number" />
      <div className="flex justify-center items-center mr-4 bg-red-100 h-[72px] rounded-[72px] w-[72px] max-sm:h-[60px] max-sm:w-[60px]">
        <img src={icon} alt="icon" className="w-[40px]     "/>
      </div>
      <div className="flex flex-col">
        <span className="text-xs leading-7 uppercase text-neutral-500 max-sm:text-xs">
          {subtitle}
        </span>
        <h3 className="text-xl font-semibold tracking-tighter leading-7 text-slate-700 max-sm:text-base">
          {title}
        </h3>
      </div>
    </div>
  );
};
