import React from 'react'

const MobileExperience = () => {
  let experience=[

    {
      CompanyName: "LOTTE KOLSON",
      StartDate: "Jan 2013",
      EndDate: "Feb-2014",
      Position:"Dispatch Supervisor",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?",
    
  
    work:["Make Delivery Challans","Manage Store Stock","Dispatch Stock on Whole Country", "Checking Shipments"]
  },
  
  {
    CompanyName: "LOTTE KOLSON",
    StartDate: "Feb 2014",
    EndDate: "Mar-2015",
    Position:"Store Officer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?",
  

  work:["Making Invoices","Make Delivery Challans","Manage Store Stock","Making Order", "Checking Shipments"]
},

{
  CompanyName: "MICROMERGER(Project of UNICEF)",
  StartDate: "Feb 2020",
  EndDate: "May-2020",
  Position:"Data Entry Operator (DEO)",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?",


work:["Data Entry Forms", "Children BioData" ]
},
  {
    CompanyName: "Aesthetic Life",
    StartDate: "Feb 2015",
    EndDate: "Jan-2020",
    Position:"Store Incharge",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim a corporis, iste molestiae est magnam molestias provident, facilis asperiores tenetur! Eum cumque delectus voluptates?",
  

  work:["Making Invoices","Make Delivery Challans","Manage Store Stock","Making Order", "Checking International Shipments"]
},
  

  
];
  return (
    <div id='experience' className="bg-fixed bg-cover bg center custom-image">
    <div className='w-full p-5'>
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Experience
    </h2>

    <div className="mt-4 divide-y-2 divide-blue-200">
      {/* Data Here */}
      {experience.map((item,i)=>(


      <div  key={i}className="py-8 flex flex-wrap md:flex-nowrap ">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-white uppercase">
            {item.Position}
          </span>
          <span className="mt-1 text-black font-extrabold text-sm">
            {`${item.StartDate} - ${item.EndDate}`}
          </span>
        </div>
        
          
        <div className="md:flex-grow">
          <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
            {item.CompanyName}
          </h2>

          
            <ul className='ml-4 list-disc text-black mr-1'>
      {item.work.map((workitem,i)=>(
      <li key={i}>{workitem}</li>
      ))}
              </ul>
        </div>
      </div>
      
    
    ))}
  
  </div>
    </div>
    </div>
  )
}

export default MobileExperience