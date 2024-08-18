import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'

const MobileProject = () => {
  let projects = [
    {
      category:"FOOD BUSINESS",
      name:"RESTAURA",
      details:"This website is for those who own food buisness.",
      image:"rr.png",
      link:"https://restaurant-puce-kappa.vercel.app/",
    },

    {
      category:"FOOD BUSINESS",
      name:"SMOKE HOUSE",
      details:"This website is for those who own food buisness.",
      image:"res.png",
      link:"https://restaurant-landing-page-rho-ten.vercel.app/",
    },

    {
      category:"JEWELLERY BUSINESS",
      name:"EMPRESS JEWELLERS",
      details:"This website is for those who own jewellery business.",
      image:"web.png",
      link:"https://empressfinejewelers.com/",
    },
  ]
  return (
    <div className="bg-fixed bg-cover bg center custom-image4">
    <div className='w-full p-5'>
     <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Projects
    </h2>
     
    <div className="mt-4 divide-y-2 divide-blue-200">
      {/* My projects here */}
      {projects.map((item,i)=>(
        <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={`/assets/${item.image}`}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0
           hover:opacity-100 cursor-pointer duration-300 ">
            <h4 className="text-sm font-semibold tracking-tight text-blue-700">
              {item.category}
            </h4>
            <h2 className="text-lg font-semibold tracking-tight text-gray-900 mt-3">
              {item.name}
            </h2>
            <p className="leading-relaxed line-clamp-2">
              {item.details}
            </p>
            <Link href={item.link} target='_blank' className="text-sm font-medium
             tracking-tight text-blue-700 hover:underline">
             <p className='mt-4'>View Project</p>
            </Link>
          </div>
        </div>
      </div>

      ))}
      

      </div>
    

    </div>
    </div>
  )
}

export default MobileProject