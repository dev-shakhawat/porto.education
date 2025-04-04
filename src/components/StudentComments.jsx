import React from "react";
import commentProfile from "../assets/client-1.jpg";

const StudentComments = () => {
  return (
    <div className=" py-[74px]  ">
      <div className="container">
        <h2 className="cmnTitle">What Students Say</h2>

        {/* slider */}
        <div className="relative mt-10 ">
          <div className="flex">
            <div className=" w-full  ">
              <img
                src={commentProfile}
                alt="commentProfile"
                className=" rounded-full mx-auto  "
              />

              <p className=" italic text-base leading-[26px] text-[#777777] mx-[100px] text-center mt-4  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget risus porta, tincidunt turpis at, interdum tortor.
                Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Fusce ante tellus,
                convallis non consectetur sed, pharetra nec ex.
              </p>
              <h5 className=" font-bold text-base leading-[19px] text-[#111111] text-center mt-6  ">john smith</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComments;
