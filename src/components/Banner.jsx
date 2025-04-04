import React from 'react'

import bnrshap from "../assets/bnrshap.jpg"
import Bannerimg from "../assets/Bannerimg.png"
import hash from "../assets/hash.png"

const Banner = () => {
  return (
    <div className='relative pt-[250px]  '>
        <img src={bnrshap} alt="bnrshap" className='absolute top-0 left-0 h-full w-full     ' />
            <div className="container">
                <div className="flex items-center justify-between relative z-10    ">
                    <div className="mt-[-400px]">
                        <h1 className=' font-extrabold text-[100px] leading-[42px] text-brand2 flex items-center gap-4    '  > <img src={hash} alt="hash" />   <span>letslearn</span></h1>
                        <p className=" fontsemibold text-[21px] leading-[42px] text-secondery mt-[-30px] ml-[190px] tracking-[-1.05px]    ">Complete Solution For Your Education Needs!</p>
                        <button type="button" className=' cmnBtn ml-[452px] mt-4 '>get started</button>
                    </div>
                    <div className="flex">
                        
                    </div>
                    <img src={Bannerimg} alt="Bannerimg" />
                </div>
            </div>
    </div>
  )
}

export default Banner