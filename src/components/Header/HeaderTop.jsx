import React from 'react'


// icons
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlUser } from "react-icons/sl";

const HeaderTop = () => {
  return (
    <div className=' py-4  '>
        <div className="container">
            <div className="flex justify-between items-center  ">
              <div className="flex items-center">

              <a href="" className="text-secondery text-[12.6px] leading-[25px]    ">Any Questions?</a>
              <ul className=' ml-7 flex gap-14 '>
                <li className=""><a href="tel:(800) 123-4567" className="flex items-center gap-2 text-[12.6px] leading-[24px] font-semibold text-brand2    "><IoCallOutline className=' text-brand text-lg  '/><span>(800) 123-4567</span></a></li>
                <li className=""><a href="mailto:porto@portotheme.com" className="flex items-center gap-2 text-[12.6px] leading-[24px] font-semibold text-brand2    "><MdOutlineEmail className=' text-brand text-lg  '/><span>porto@portotheme.com</span></a></li>
              </ul>
              </div>

              {/* login/reg.. */}
              <div className="flex items-center   ">
                <SlUser className=' text-brand  '/>
                <ul className=' flex ml-3 gap-3 relative after:content-[""] after:w-[1px] after:h-[15px] after:bg-brand2 after:absolute after:top-[20%] after:skew-x-15  after:left-[33%]   '>
                  <li><a href="" className="text-brand2 font-semibold text-[12.6px] leading-[25px]    ">Login</a></li>
                  <li><a href="" className="text-brand2 font-semibold text-[12.6px] leading-[25px]    ">Registration</a></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop