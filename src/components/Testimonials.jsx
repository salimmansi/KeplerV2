import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { I1, I2, I3, I4, I5, I6 } from "../assets";
import { useLanguage } from "../utils/LanguageContext";

const Testimonials = () => {
  const { translate } = useLanguage()
  return (<section id="clients" class="text-gray-600 body-font" data-aos="fade-up">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h2 className="sm:text-3xl text-2xxl font-medium title-font mb-2 text-red-800 ">{translate("What We Offer!")}</h2>
          <div className="h-1 w-20 bg-red-800 rounded"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-red-800 p-6 rounded-lg h-full">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={I1} alt="content" />
            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">{translate("BUSINESS TRAVEL")}</h2>
            <p className="leading-relaxed text-base text-gray-100 ">{translate("Coming together in an external setting to work and strengthen teams with the aim of rewarding or addressing important issues")}</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-red-800 p-6 rounded-lg h-full">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={I3} alt="content" />
            <h2 className="text-lg text-gray-100 font-medium title-font mb-4"> {translate("INTERNAL COPORATE EVENT")}</h2>
            <p className="leading-relaxed text-base text-gray-100 ">{translate("End-of-year events, anniary celebrations, or the June Garden Party are convivial moments during which associates come together to socialize. We handle everything for you from A to Z")}</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-red-800 p-6 rounded-lg h-full">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={I2} alt="content" />
            <h2 className="text-lg text-gray-100 font-medium title-font mb-4"> {translate("GENERAL ASSEMBLY CONFERENCE")}</h2>
            <p className="leading-relaxed text-base text-gray-100 ">*{translate("Whether it's for 20 or 1500 people, we tailor all of our proposals to the specifications that we establish together")}</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-red-800 p-6 rounded-lg h-full">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={I4} alt="content" />
            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
              {translate("SEMINAR")}</h2>
            <p className="leading-relaxed text-base text-gray-100 "> {translate("Taking care of finding a venue, coordinating transportation, and ensuring that you have everything you need is the most important thing for us")}</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-red-800 p-6 rounded-lg h-full">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={I6} alt="content" />
            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
              {translate("TEAM BUILDING")}</h2>
            <p className="leading-relaxed text-base text-gray-100 ">{translate("Because a hardworking team that shares, communicates, and knows each other well is a productive and fulfilled team")}</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-red-800 p-6 rounded-lg h-full">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={I5} alt="content" />
            <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
              {translate("OPERATIONAL MARKETING")}</h2>
            <p className="leading-relaxed text-base text-gray-100 ">  {translate("We also carry out high-impact operations with the aim of making a lasting impression. These are short-term events designed to quickly increase the visibility of a brand, product, or company")}</p>
          </div>
        </div>
      </div>
    </div>
  </section>)
};

export default Testimonials;
