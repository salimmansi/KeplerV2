import React from 'react'
import {
  TT1, TT2, TT3
} from "../assets";
import { useLanguage } from '../utils/LanguageContext';
function Travel() {
  const { translate } = useLanguage()
  return (
    <section className="text-gray-600 body-font" data-aos="fade-up" id='travel'>
      <div className="container px-5 py-24 mx-auto" >
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-800"> {translate("Ready To Explore The World?")}</h1>
            <div className="h-1 w-20 bg-red-800 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-900"> {translate("Here are some of the travel options we offer:")}</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-red-800 p-6 rounded-lg h-full">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={TT2} alt="content" />
              <h1 className="text-lg text-gray-100 font-medium title-font mb-4"> {translate("Beach Getaways")}</h1>
              <p className="leading-relaxed  text-gray-100"> {translate("Relax on the white sands of the Caribbean or the turquoise waters of the Mediterranean.")}</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-red-800 p-6 rounded-lg h-full">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={TT3} alt="content" />
              <h1 className="text-lg text-gray-100 font-medium title-font mb-4">{translate("Adventure Travel")}</h1>
              <p className="leading-relaxed  text-gray-100">{translate("Get your adrenaline pumping with safaris, hiking trips, and whitewater rafting.")}</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-red-800 p-6 rounded-lg h-full">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={TT1} alt="content" />
              <h1 className="text-lg text-gray-100 font-medium title-font mb-4"> {translate("Cultural Tours")}</h1>
              <p className="leading-relaxed  text-gray-100">{translate("Immerse yourself in the history and culture of a new destination.")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Travel
