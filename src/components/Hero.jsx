import styles from "../style";
import { stats } from "../constants";
import Swipe from "react-easy-swipe";
import React, { Component } from "react";
import { Sponsers } from "./../components";
import Button from "./Button";
import '../assets/css/hero.css'
import { useLanguage } from "../utils/LanguageContext"; // Import the language context hook
import {heroBackground,herobg2,herobg3} from '../assets'
import {
    
    USAIDLogo,
    UTICALogo,
    ma3anLogo,
    FRIEDRICHLogo,
    fhiLogo,
    FAOLogo,
    CFADLogo,
    eclipse1,
    eclipse2,
    eclipse3
} from "../assets";
import GetStarted from "./GetStarted";
const CarouselData = [
    {
        image: heroBackground
    }, {
        image: herobg2
    }, {
        image: herobg3
    }
];
class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            paused: false
        };
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.paused === false) {
                let newSlide = this.state.currentSlide === CarouselData.length - 1
                    ? 0
                    : this.state.currentSlide + 1;
                this.setState({ currentSlide: newSlide });
            }
        }, 5000);
    }

    nextSlide = () => {
        let newSlide = this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
    };

    prevSlide = () => {
        let newSlide = this.state.currentSlide === 0
            ? CarouselData.length - 1
            : this.state.currentSlide - 1;
        this.setState({ currentSlide: newSlide });
    };

    setCurrentSlide = index => {
        this.setState({ currentSlide: index });
    };

    render() {
        const { translatedText } = this.props;

        return (
            <div
                className="w-full object-cover bg-[url('./src/assets/aboutusbackground.png')]	" >
                <div className="absolute inset-x-0 bottom-0 h-1/2" />
                <div className="max-w-9xl mx-auto]">
                    <div className="relative sm:overflow-hidden">
                        <div className="absolute inset-0  ">
                            <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                                {CarouselData.map((slide, index) => {
                                    return (<img
                                        src={slide.image}
                                        alt="wall"
                                        key={index}
                                        className={index === this.state.currentSlide
                                            ? "w-full absolute top-0 left-0 w-full h-full z-0 object-cover min-h-[100vh]"
                                            : "hidden"}
                                        style={{
                                            objectFit: "cover"
                                        }}
                                        onMouseEnter={() => {
                                            this.setState({ paused: true });
                                        }}
                                        onMouseLeave={() => {
                                            this.setState({ paused: false });
                                        }} />);
                                })}
                            </Swipe>
                            <div className="absolute inset-0  mix-blend-multiply" />
                        </div>
                        <div className="relative">
                            <div className="max-w-[1080px] mx-auto transform-card">
                                <div className={`flex md:flex-row flex-col p-0 `}>
                                    <div className={`flex-1 flex md:my-0 my-5 relative`}></div>
                                    <div
                                        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-2 `}>
                                        <div
                                            className="w-full h-full object-cover backdrop-blur-sm p-5 pl-10 block rounded-lg shadow-lg px-4 py-10 md:px-10  glassifedEffectBlur 	">
                                            <div className='flex flex-row justify-between items-center w-full'>
                                                <h1
                                                    className="flex-1 font-poppins font-semibold  ss:text-[2rem] text-[1.5rem]  text-white ss:leading-[2.1rem]   leading-[1.8rem]">
                                                    {translatedText.title}

                                                    <br />{" "}
                                                    <span className="text-gradient bg-red-800">Kepler!</span>{" "}
                                                </h1>
                                            </div>
                                            <p
                                                className={`${styles.paragraph} max-w-[570px] mt-5 ss:text-sm text-base text-white ss:leading-[2.1rem] leading-[1.8rem]`}>
                                                {translatedText.description}

                                            </p>
                                            <Button styles={`mt-10 align-middle bg-red-800 `} />

                                        </div>
                                    </div>
                                </div>

                                <div className="container px-7   mx-auto mt-4">
                                    <div className="flex flex-wrap -m-2 justify-center">

                                        {CarouselData.map((element, index) => {
                                            return (
                                                <div className="p-2">
                                                    <img
                                                        src={eclipse2}
                                                        className={index === this.state.currentSlide
                                                            ? " w-100 bg-red-700 rounded-full mx-2 mb-2 cursor-pointer"
                                                            : " w-100 hover:bg-white rounded-full mx-2 mb-2 cursor-pointer"}
                                                        key={index}
                                                        onClick={() => {
                                                            this.setCurrentSlide(index);
                                                        }}></img>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Hero;
