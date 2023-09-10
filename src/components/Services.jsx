import React from 'react'
import {

    vid3


} from "../assets";
import '../assets/css/services.css'
function Services() {
  return (
<section className="text-gray-600 body-font" data-aos="fade-up">
<div className="flex flex-wrap w-full ">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-800">We Provide the Best
Services</h1>
        <div className="h-1 w-20 bg-red-800 rounded"></div>
      </div>
    </div>
  <div className="container px-5 py-2 mx-auto flex flex-wrap flexlayout  ">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <video src={vid3} loop controls className="main-video"></video>
    </div>
    <div className="flex flex-col flex-wrap lg:py-1 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center card-services-gray">
     
        <div className="flex-grow">
          <h1 className="text-gray-100 text-lg title-font font-medium mb-3">Operational marketing</h1>
          <p className="leading-relaxed text-gray-100 ">We also carry out high-impact operations with the aim of making a lasting impression. These are short-term events designed to quickly increase the visibility of a brand, product, or company</p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center card-services-red">
    
        <div className="flex-grow">
          <h1 className="text-gray-100  text-lg title-font font-medium mb-3">Team Building
</h1>
          <p className="leading-relaxed text-gray-100">Paintball / Olympiads
Bumper ball tournaments
Skyrunner initiation
Gladiator tournaments
Treasure hunt / Sniper hunt
Babouche race</p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center card-services-gray">
  
        <div className="flex-grow">
          <h1 className="text-gray-100  text-lg title-font font-medium mb-3">Meetings & Incentives</h1>
          <ul>
            <li className='text-gray-100 '>Hotel and accommodation selection</li>
            <li className='text-gray-100 '>Catering and catering services
</li>
            <li className='text-gray-100 '>Catering and catering services
</li>
            <li className='text-gray-100 '>Themed evenings, Cocktail Dinatoire, Gala dinners
</li>
            <li className='text-gray-100 '>Audiovisual equipment
</li>
            <li className='text-gray-100 '>Continuous assistance
</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Services
