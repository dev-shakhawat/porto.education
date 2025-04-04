import React from 'react'



import List from '../common/List'
import { BsSearch } from "react-icons/bs";

const Navbar = ({style}) => {
  const navLink = [{list:"Home"},{list:"About"},{list:"Courses"},{list:"Instructors"},{list:"Blog"},{list:"Contact Us"}]
  return (
    <div className={`${style} fixed  left-0 w-full z-50 duration-[.4s] py-3  `}>
      <div className="container">
        <div className="flex justify-between items-center  ">
          <img src="/images/logo.png" alt="logo" className=' w-[130px] ' />
          <div className="flex items-center gap-8  ">
            <List listArr={navLink} boxStyle=' flex gap-6 ' listStyle=' text-brand2 hover:text-brand duration-[.4s] text-[14px] leading-[24px] font-semibold  ' link={"#"} />
            <button type="button" className=' text-brand ' ><BsSearch/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar