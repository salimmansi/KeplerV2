import React from 'react'
import {
  vid1,


} from "../assets";
import { useLanguage } from '../utils/LanguageContext';
const Destination = () => {
  const { translate } = useLanguage()
  return (
    <section className="text-gray-600 body-font overflow-hidden" >
      <div className="container px-5 py-24 mx-auto card-layer" data-aos="fade-up">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <video src={vid1} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" loop controls ></video>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className=" text-3xl title-font font-medium mb-1 text-red-800 keppler">Kepler!</h1>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"> {translate("From dream destinations to unforgettable events!")} </h1>

            <p className="leading-relaxed mt-8">{translate("The organization of international business events requires careful planning, attention to detail, and a deep understanding of cultural differences and etiquette.")}</p>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
