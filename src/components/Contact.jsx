import React from 'react'
import { mapss } from '../assets'
function Contact() {
  return (





<section className="text-gray-100 body-font" id='contact' data-aos="fade-up" data-aos-duration="1000">
  <div className="container px-5 py-12 mx-auto flex flex-nowrap flexlayout ">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" className="object-cover object-center h-full w-full" src={mapss} />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-2 lg:text-left text-center bg-red-800 p-3 rounded-lg">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-gray-100">Get <span className='text-gray-900'>inTouch</span></h2>
      <p className="leading-relaxed mb-5 text-gray-100">Please feel free to get in touch with me if you have any further questions or concerns.</p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-100">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-100">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-100">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" ></textarea>
      </div>
      <button className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 hover:text-gray-900 rounded text-lg">Send</button>
    </div>
  </div>
</section>
    
  )
}

export default Contact
