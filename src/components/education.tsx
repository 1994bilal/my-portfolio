import React from 'react'
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
// My education here
const Education = () => {
  let education=[
  {
    degree: "Matriculation Science",
    institution: "Superior Model School",
    year: "2010",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?"
  },

  {
    degree: "F.sc Pre-engineering",
    institution: "Nabi Bagh Z.M science Collage",
    year: "2013",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?"
  },

  {
    degree: "DAE Mechanical Engineering",
    institution: "Swedish Institute of Technology",
    year: "2015",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?"
  },

  {
    degree: "BS-TECH Mechanical technology",
    institution: "Preston University",
    year: "2021",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?"
  },
 

  {
    degree: "E-commerce Web Development 2.0",
    institution: "Memon Institite Of Technology (MITI)",
    year: "2023",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?"
  },

  {
    degree: "Cloud Generative AI Engineer & Web 3.0",
    institution: "Presendential Initiative Artifical Intellegence Cousrse (PIAIC)",
    year: "2024 ( In Process)",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?"
  },


];
  return (
    <div className="bg-fixed bg-cover bg center custom-image">
    <Card data-aos="zoom-in" className="h-[85vh] w-full overflow-y-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Education</CardTitle>
          
          </CardHeader>
          <CardContent className="space-y-2">
          
    <div className="-my-8 divide-y-2 divide-gray-100">
      {/* Diploma */}
      {education.map((item,i)=>(


      <div  key={i}className="py-8 flex flex-wrap md:flex-nowrap ">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white uppercase">
            {item.degree}
          </span>
          <span className="mt-1 text-blue-900 font-extrabold text-sm">
            {item.year}
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
            {item.institution}
          </h2>
          <p className="leading-relaxed">
            {item.description}
          </p>
          
        </div>
      </div>
      
    
    ))}
  
  </div>
          </CardContent>
          
        </Card>
        </div>
  )
}

export default Education