import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaWordpress } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

const MobileSkills = () => {
  return (
    <div id='skills' className="bg-fixed bg-cover bg center custom-image3">
    <div className='w-full p-5'>
        <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Skills
    </h2>
        <div className="mt-4 flex flex-wrap -m-4">
      {/* Html */}
      <div className="p-4 w-full md:w-1/2">
       
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaHtml5 className='text-white text-lg'/>
            </div>
            <h2 className="text-lg text-white font-semibold tracking-tight">
              HTML
            </h2>
            
              </div>
              <div className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[80%] h-1 bg-blue-500 rounded-lg'/>
          </div>
          <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tighter'>80%</h3>          
        </div>

        {/* CSS */}
        <div className="p-4 w-full md:w-1/2">
       
       <div className="flex items-center mb-3">
         <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
           <FaCss3Alt className='text-white text-lg'/>
         </div>
         <h2 className="text-lg text-white font-semibold tracking-tight">
           CSS
         </h2>
         
           </div>
           <div className='w-full h-1 rounded-lg bg-gray-500'>
         <div className='w-[80%] h-1 bg-blue-500 rounded-lg'/>
       </div>
       <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tighter'>80%</h3>          
     </div> 

     {/* Typescript */}
     <div className="p-4 w-full md:w-1/2">
       
       <div className="flex items-center mb-3">
         <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
           <SiTypescript className='text-white text-lg'/>
         </div>
         <h2 className="text-lg text-white font-semibold tracking-tight">
           TypeSript
         </h2>
         
           </div>
           <div className='w-full h-1 rounded-lg bg-gray-500'>
         <div className='w-[60%] h-1 bg-blue-500 rounded-lg'/>
       </div>
       <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tighter'>60%</h3>          
     </div> 


     {/* JavaScript */}
     <div className="p-4 w-full md:w-1/2">
       
       <div className="flex items-center mb-3">
         <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
           <SiJavascript className='text-white text-lg'/>
         </div>
         <h2 className="text-lg text-white font-semibold tracking-tight">
         JavaScript
         </h2>
         
           </div>
           <div className='w-full h-1 rounded-lg bg-gray-500'>
         <div className='w-[60%] h-1 bg-blue-500 rounded-lg'/>
       </div>
       <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tighter'>60%</h3>          
     </div>


  {/* WordPress */}
  <div className="p-4 w-full md:w-1/2">
       
       <div className="flex items-center mb-3">
         <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
           <FaWordpress className='text-white text-lg'/>
         </div>
         <h2 className="text-lg text-white font-semibold tracking-tight">
         WordPress
         </h2>
         
           </div>
           <div className='w-full h-1 rounded-lg bg-gray-500'>
         <div className='w-[70%] h-1 bg-blue-500 rounded-lg'/>
       </div>
       <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tighter'>70%</h3>          
     </div>

     {/* React */}
     <div className="p-4 w-full md:w-1/2">
       
       <div className="flex items-center mb-3">
         <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
           <FaReact className='text-white text-lg'/>
         </div>
         <h2 className="text-lg text-white font-semibold tracking-tight">
         React
         </h2>
         
           </div>
           <div className='w-full h-1 rounded-lg bg-gray-500'>
         <div className='w-[70%] h-1 bg-blue-500 rounded-lg'/>
       </div>
       <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tighter'>70%</h3>          
     </div>

     {/* NextJs */}
     <div className="p-4 w-full md:w-1/2">
       
       <div className="flex items-center mb-3">
         <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
           <RiNextjsFill className='text-white text-lg'/>
         </div>
         <h2 className="text-lg text-white font-semibold tracking-tight">
         NextJS
         </h2>
         
           </div>
           <div className='w-full h-1 rounded-lg bg-gray-500'>
         <div className='w-[80%] h-1 bg-blue-500 rounded-lg'/>
       </div>
       <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tighter'>80%</h3>          
     </div>

     {/* TailwindCss */}
     <div className="p-4 w-full md:w-1/2">
       
       <div className="flex items-center mb-3">
         <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
           <RiTailwindCssFill className='text-white text-lg'/>
         </div>
         <h2 className="text-lg text-white font-semibold tracking-tight">
         TailwindCss
         </h2>
         
           </div>
           <div className='w-full h-1 rounded-lg bg-gray-500'>
         <div className='w-[80%] h-1 bg-blue-500 rounded-lg'/>
       </div>
       <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tighter'>80%</h3>          
     </div>
      

     
     
      
      </div>
    </div>
    </div>
  )
}

export default MobileSkills