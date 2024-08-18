import React from 'react'
import { Button } from "@/components/ui/button"


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { FaHtml5 } from "react-icons/fa";
const Skills = () => {
  
  return (
    <div className="bg-fixed bg-cover bg center custom-image3">
    <Card data-aos="zoom-in" className="h-[85vh] w-full overflow-y-auto ">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Skills

            </CardTitle>
          
          </CardHeader>
          <CardContent className="space-y-2"> 
         
    
    <div className="flex flex-wrap -m-4">
      {/* Html */}
      <div className="p-4 w-full md:w-1/2">
       
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaHtml5 className='text-white text-lg'/>
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
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
           <FaHtml5 className='text-white text-lg'/>
         </div>
         <h2 className="text-lg font-semibold tracking-tight">
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
           <FaHtml5 className='text-white text-lg'/>
         </div>
         <h2 className="text-lg font-semibold tracking-tight">
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
           <FaHtml5 className='text-white text-lg'/>
         </div>
         <h2 className="text-lg font-semibold tracking-tight">
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
           <FaHtml5 className='text-white text-lg'/>
         </div>
         <h2 className="text-lg font-semibold tracking-tight">
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
           <FaHtml5 className='text-white text-lg'/>
         </div>
         <h2 className="text-lg font-semibold tracking-tight">
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
           <FaHtml5 className='text-white text-lg'/>
         </div>
         <h2 className="text-lg font-semibold tracking-tight">
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
           <FaHtml5 className='text-white text-lg'/>
         </div>
         <h2 className="text-lg font-semibold tracking-tight">
         TailwindCss
         </h2>
         
           </div>
           <div className='w-full h-1 rounded-lg bg-gray-500'>
         <div className='w-[80%] h-1 bg-blue-500 rounded-lg'/>
       </div>
       <h3 className='text-blue-500 text-sm text-right font-semibold tracking-tighter'>80%</h3>          
     </div>
      

     
     
      
      </div>
      
    
     
          </CardContent>
          
        </Card>
        </div>
  )
}

export default Skills;