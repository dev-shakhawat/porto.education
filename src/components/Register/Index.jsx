"use client";
import React from "react";
import CountdownTimer from "./CoundownTimer";
import RegistrationForm from "./RegistrationForm";
import registerbg from "../../assets/registerbg.png"

function RegisterSection() {
  return (
    <div className="flex relative flex-col justify-center items-start px-20 py-20 min-h-[650px] max-md:px-5">
      <div className="container">
        <img
        src={registerbg}
          alt="registerbg"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col px-11 py-14 max-w-full bg-white    w-[546px] max-md:px-5">
          <h2 className="cmnTitle">
            Register Now
          </h2>
          <p className="self-center mt-3 text-lg leading-loose text-center text-secondery   ">
            Get <span className="font-bold">50% OFF</span> For All Courses
          </p>

          <CountdownTimer />
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default RegisterSection;
