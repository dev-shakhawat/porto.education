import React from "react";
import CourseCard from "./common/CourseCard";

// images
import img1 from "../assets/course-1.jpg";
import img2 from "../assets/course-2.jpg";
import img3 from "../assets/course-3.jpg";
import profile1 from "../assets/avatar.jpg";
import profile2 from "../assets/avatar-2.jpg";
import profile3 from "../assets/avatar-3.jpg";

const Course = () => {
  const CourseDetails = [
    {
      bg: img1,
      profile: profile1,
      title: "Course Name Example",
      student: 123,
      comments: 123,
      price: 79,
      author: "john deo",
    },
    {
      bg: img2,
      profile: profile2,
      title: "Course Name Example",
      student: 123,
      comments: 123,
      price: 59,
      author: "john deo",
    },
    {
      bg: img3,
      profile: profile3,
      title: "Course Name Example",
      student: 123,
      comments: 123,
      price: 29,
      author: "john deo",
    },
  ];
  return (
    <div className=" bg-[#F4F4F4] py-[74px]  ">
      <div className="container">
        <h2 className="cmnTitle pb-9     ">Popular Courses</h2>
        <div className="grid grid-cols-3 gap-4   ">
          {CourseDetails.map((item, index) => (
            <CourseCard
              key={index}
              bg={item.bg}
              profile={item.profile}
              title={item.title}
              students={item.student}
              comments={item.comments}
              author={item.author}
              price={item.price}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8  ">
          <button className="cmnBtn" type="button">view all</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
