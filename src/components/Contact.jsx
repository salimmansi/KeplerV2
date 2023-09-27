import React from 'react'
import { mips } from '../assets'
import '../assets/css/Contact.css'
import { useLanguage } from '../utils/LanguageContext'
function Contact() {
  const { translate } = useLanguage()
  return (



    <section className="text-gray-600 body-font relative" data-aos="fade-up" data-aos-duration="1000">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ">
          <img src={mips} alt="contact" />

        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-red-800 flex flex-col md:ml-auto w-full md:py-8 md:px-3 mt-8 md:mt-0 rounded-lg " >
          <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font text-gray-100">Get <span className='text-gray-100'>inTouch!</span></h2>
          <p className="leading-relaxed mb-5 text-gray-100">{translate("Please feel free to get in touch with me if you have any further questions or concerns.")}</p>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-100">{translate("Name")}</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-100">{translate("Email")}</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-100"> {translate("Message")}</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" ></textarea>
          </div>
          <button className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 hover:text-gray-900 rounded text-lg">{translate("Send")}</button>
        </div>
      </div>
    </section>

  )
}

export default Contact
