import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import List from './common/List';

const Footer = () => {

    const about = [{list: "Porto Education"}, {list: "123 Porto Blvd, Suite 100"},{list: "New York, NY"},{list: "Phone: 123-456-7890"},{list: "Email: porto@domain.com"},]
    const Navigation = [{list: "- Home"}, {list: "- About Us"},{list: "- Courses"},{list: "- Instructors"},{list: "- Blog"},{list: "- Contact Us"}]
    const Support = [{list: "- Documentation"}, {list: "- Forums"},{list: "- Open a Ticket"},{list: "- FAQ's"}]
    const More = [{list: "- Terms of Use"}, {list: "- Privacy Policy"}]
  return (
    <div className=' py-[96px] bg-brand2   '>
        <div className="container">

            <div className="grid grid-cols-5 ">

                {/* logo part */}
                <div className="">
                  <img src="/images/footlogo.png" alt="footlogo" />
                  <List listArr={[{list: <FaInstagram/>} , {list: <FaXTwitter/>} , {list: <FaFacebookF/>}]} link={"#"} boxStyle={"flex gap-5 mt-4  "} listStyle={"text-white  "}    />
                  <List listArr={[{list: "Porto Education. © 2025."} , {list: "All Rights Reserved"} ]} link={"#"} boxStyle={" mt-10  "} listStyle={"text-secondery  "}    />
                </div>

                {/* about part */}
                <div className="">
                    <h3 className='text-xl font-semibold tracking-tighter leading-7 text-white max-sm:text-base capitalize  '>about us</h3>
                  <List listArr={about} link={"#"} boxStyle={" mt-4  "} listStyle={"text-secondery py-1  "}   />
                </div>

                {/* Navigation part */}
                <div className="">
                    <h3 className='text-xl font-semibold tracking-tighter leading-7 text-white max-sm:text-base capitalize  '>about us</h3>
                  <List listArr={Navigation} link={"#"} boxStyle={" mt-4  "} listStyle={"text-secondery py-1 duration-[.4s] hover:ml-2 hover:text-brand  "}    />
                </div>


                {/* Support part */}
                <div className="">
                    <h3 className='text-xl font-semibold tracking-tighter leading-7 text-white max-sm:text-base capitalize  '>about us</h3>
                  <List listArr={Support} link={"#"} boxStyle={" mt-4  "} listStyle={"text-secondery py-1 duration-[.4s] hover:ml-2 hover:text-brand  "}    />
                </div>


                {/* More part */}
                <div className="">
                    <h3 className='text-xl font-semibold tracking-tighter leading-7 text-white max-sm:text-base capitalize  '>about us</h3>
                  <List listArr={More} link={"#"} boxStyle={" mt-4  "} listStyle={"text-secondery py-1 duration-[.4s] hover:ml-2 hover:text-brand  "}    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer