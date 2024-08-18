import React from 'react'
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from '../ui/button';

const MobileCard = () => {
  return (
    
    <div data-aos="fade-up" className= " bg-fixed bg-cover bg center custom-image7 h-[90vh] flex flex-col items-center justify-center">
        <div className="card bg-blue-100 glass w-80 p-5 flex flex-col justify-center items-center">
        {/* Image Section */}
  <Image
          src="/assets/bilal12.jpg"
           alt="portfolio-pic"
            width={200} 
            height={200}
             className="rounded-md mx-auto"
             />

  <div className="card-body">
  <h1  className="text-2xl text-center font-bold tracking-tight uppercase">Bilal Fiaz</h1>
  <h2 className="text-md font-semibold text-center text-blue-500">
  <Typewriter
  options={{
    strings: ['Web Develepor', 'AI Engineer'],
    autoStart: true,
    loop: true, 
  }}
/>
</h2>
{/* Social Medio Bittons */}
<div className="mt-2 grid grid-cols-3 gap-2">
          <div className="mt-4">
            <Link href="https://www.linkedin.com/in/bilalfayaz/" target="_blank" className=" text-gray-600 hover:text-[#0762C8]">
            <FaLinkedin className="text-3xl"/>
            </Link>
          
          </div>
          <div className="mt-4">
          <Link href="https://www.youtube.com/@besaybilal7952" target="_blank"  className=" text-gray-600 hover:text-[#CD201F]"> 
          <FaYoutube className="text-3xl"/>
          </Link>
          </div>
          <div className="mt-4">
          <Link href="https://github.com/1994bilal" target="_blank" className=" text-gray-600 hover:text-[#171515]">
          <FaGithub className="text-3xl"/>
          </Link>
          </div>

        </div>

{/* Download CV Button*/}
        <Link href={'assets/RESUME.pdf'} className="w-full mt-4 bg-black text-white rounded" target="_blank">
        <Button>
        <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
    </Button>
    </Link>       
   
    </div>
  </div>
</div>

  );
};

export default MobileCard