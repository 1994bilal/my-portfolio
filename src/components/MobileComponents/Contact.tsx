import React from 'react'

const MobileContact = () => {
  return (
    <div className="bg-fixed bg-cover bg center custom-image5">
        <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Contact
    </h2>
    </div>

  <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        className="absolute inset-0"
    
        height="100%"
        
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.380038735236!2d67.15409857262698!3d24.885015295482575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339c33df7b295%3A0x29e0892d5cf9ec45!2sPakistan%20Sanitary%20Hardware%20Electric%20%26%20Paints!5e0!3m2!1sen!2s!4v1723784663159!5m2!1sen!2s"
        style={{
          filter: 'contrast(1.2) opacity(0.4)'
        }}
        title="map"
        width="100%"
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
          C5/104 Asifabad Green Town karachi
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">
          Bilalfiaz802@gmail.com
          </a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">
          +923422709496
          </p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <form action="https://formspree.io/f/xeojznne"
  method="POST">
      <div className="relative p-5">
        <label
          className="scroll-m-20 text-sm font-semibold tracking-tight"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-[100%] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          id="name"
          name="name"
          type="text"
        />
      </div>
      <div className="relative mb-4 p-5">
        <label
          className="scroll-m-20 text-sm font-semibold tracking-tight"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-[100%] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          id="email"
          name="email"
          type="email"
        />
      </div>

      <div className="relative mb-4 p-5">
        <label
          className="scroll-m-20 text-sm font-semibold tracking-tight"
          htmlFor="subject"
        >
          Subject
        </label>
        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          id="subject"
          name="subject"
        
        />
      </div>
      <div className="relative mb-4 p-5">
        <label
          className="scroll-m-20 text-sm font-semibold tracking-tight"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          id="message"
          name="message"
        />
      </div>
      <button className= "ml-12 mb-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Submit
      </button>
      </form>
    </div>
  </div>
    </div>
  )
}

export default MobileContact