"use client"
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {Sidebar} from './Sidebar';
import {Detail} from './Detail';
import MobileCard from './MobileComponents/card';
import MobileEducation from './MobileComponents/Education';
import MobileExperience from './MobileComponents/Experience';
import MobileSkills from './MobileComponents/Skills';
import MobileProject from './MobileComponents/Project';
import MobileContact from './MobileComponents/Contact';
import { Contact } from 'lucide-react';

const Mainpage = () => {
    useEffect(()=>{
        AOS.init({
           once:false,
        });
      },[]);
    
  return (
    <div>
      {/* Mobile View */}
      <div className="overflow-x-hidden bg-white h-screen md:hidden">
        {/* card */}
        <MobileCard/>

         {/* skills */}
         <MobileSkills/>

         {/* projects */}
        <MobileProject/>


        {/* education */}
        <MobileEducation/>
        {/* experience*/}
        <MobileExperience/>
       
        
        {/* contact */}
       <MobileContact/>

      </div>
      {/* Desktop View */}
    <div className="hidden md:flex md:overflow-hidden md:h-screen">
    {/* SideBar */}
    <div className="w-1/5">
      <Sidebar/>
    </div>
    {/* main */}
    <div className="w-full">
      <Detail/>
    </div>
      </div>
      </div>
  )
}

export default Mainpage