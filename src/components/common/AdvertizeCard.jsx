import React from 'react'

const AdvertizeCard = ({imageURl , title , text}) => {
  return (
    <div className='flex gap-6 items-start  '>
        <img src={imageURl} alt="imageURl" />
        <div className="">
            <h3 className='cmnSubTitle'>{title}</h3>
            <p className=" text-base leading-[29px] text-[#777777]  ">{text}</p>
        </div>
    </div>
  )
}

export default AdvertizeCard