import React, { useEffect, useState } from 'react'
import HeaderTop from './HeaderTop'
import Navbar from './Navbar'

const Index = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
        <HeaderTop/>
        <Navbar style={isScrolled ? "top-[0px] bg-white " : "top-[70px]"}/>
    </>
  )
}

export default Index