import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Make sure you've imported ScrollTrigger

import '../assets/css/heero.css'; // Replace with the path to your CSS file

const Slider = () => {
    useEffect(() => {
        // Initialize gsap and ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        let singleContainer = document.querySelector(".container.single");
        let doubleContainer = document.querySelector(".container.double");

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        if (singleContainer) {
            let innerContainer = singleContainer.querySelector(".inner-container");
            let sections = gsap.utils.toArray(".container.single .panel");

            let panPinned = gsap.to(sections, {
                scrollTrigger: {
                    trigger: singleContainer,
                    pin: true,
                    start: "top top",
                    end: () => "+=" + innerContainer.offsetWidth,
                    scrub: 1
                }
            });

            sections.forEach((section, index) => {
                const rndEND = randomIntFromInterval(65, 110);
                const rndSTART = randomIntFromInterval(12, 22);
                const endMultiplier = rndEND / 100;
                const startMultiplier = rndSTART / 10;

                let scrollTween = gsap.fromTo(
                    section,
                    {
                        x: () => window.innerWidth / startMultiplier
                    },
                    {
                        x: () => -1 * (innerContainer.offsetWidth - window.innerWidth),
                        ease: "none",
                        scrollTrigger: {
                            trigger: singleContainer,
                            start: "top 65%",
                            pin: false,
                            scrub: 1,
                            end: () =>
                                "+=" + (innerContainer.offsetWidth + window.innerWidth * endMultiplier)
                        }
                    }
                );

                const rndVH = randomIntFromInterval(5, 50);
                let OpacityTweenIn = gsap.fromTo(
                    section,
                    {
                        opacity: 0,
                        y: rndVH + "vh"
                    },
                    {
                        opacity: 1,
                        y: "0",
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: singleContainer,
                            start: "top 50%",
                            markers: false,
                            pin: false,
                            scrub: 1,
                            end: "center 25%"
                        }
                    }
                );
            });
        }

        if (doubleContainer) {
            let innerContainer = doubleContainer.querySelector(".inner-container");
            let topRow = doubleContainer.querySelector(".container.double .row--top");
            let bottomRow = doubleContainer.querySelector(".container.double .row--bottom");
            let topSections = gsap.utils.toArray(".container.double .row--top .panel");
            let bottomSections = gsap.utils.toArray(".container.double .row--bottom .panel");

            topSections.forEach((section, index) => {
                const rndEND = randomIntFromInterval(10, 14);
                const rndSTART = randomIntFromInterval(10, 14);
                const endMultiplier = rndEND / 100;
                const startMultiplier = rndSTART / 10;
                let scrollTween = gsap.fromTo(
                    section,
                    {
                        x: () => window.innerWidth / startMultiplier
                    },
                    {
                        x: () => -1 * (topRow.offsetWidth - window.innerWidth),
                        ease: "none",
                        scrollTrigger: {
                            trigger: doubleContainer,
                            markers: false,
                            start: "top bottom",
                            pin: false,
                            scrub: 1,
                            end: "bottom center"
                        }
                    }
                );

                const rndVH = randomIntFromInterval(5, 20);
                let OpacityTweenIn = gsap.fromTo(
                    section,
                    {
                        opacity: 0,
                        y: rndVH + "vh"
                    },
                    {
                        opacity: 1,
                        y: "0",
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: innerContainer,
                            start: "top bottom",
                            markers: false,
                            pin: false,
                            scrub: 1,
                            end: "top 45%"
                        }
                    }
                );
            });

            bottomSections.forEach((section, index) => {
                const rndEND = randomIntFromInterval(10, 12);
                const rndSTART = randomIntFromInterval(10, 12);
                const endMultiplier = rndEND / 10;
                const startMultiplier = rndSTART / 10;
                let scrollTween = gsap.fromTo(
                    section,
                    {
                        x: () => -1 * (bottomRow.offsetWidth * startMultiplier)
                    },
                    {
                        x: () => (bottomRow.offsetWidth - window.innerWidth),
                        ease: "none",
                        scrollTrigger: {
                            trigger: doubleContainer,
                            markers: false,
                            start: "top 70%",
                            pin: false,
                            scrub: 1,
                            end: "bottom top"
                        }
                    }
                );

                const rndVH = randomIntFromInterval(5, 20);
                let OpacityTweenIn = gsap.fromTo(
                    section,
                    {
                        opacity: 0,
                        y: rndVH + "vh"
                    },
                    {
                        opacity: 1,
                        y: "0",
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: innerContainer,
                            start: "center bottom",
                            markers: false,
                            pin: false,
                            scrub: 1,
                            end: "center center"
                        }
                    }
                );
            });
        }
    }, []);

    return (
        <div>
            <section class="container double">
                <div class="inner-container">
                    <div class="container-text">
                        <h1 >Planning your next Adventure & unforgettable Trip with Kepler !</h1>
                    </div>
                    <div class="row--top">
                        <section class="panel behind width--thin height--short direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/652" />
                            </figure>
                        </section>
                        <section class="panel width--small height--tall direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/642" />
                            </figure>
                        </section>
                        <section class="panel behind width--extra-wide height--extra-tall direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/662" />
                            </figure>
                        </section>
                        <section class="panel behind width--normal height--tall direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/622" />
                            </figure>
                        </section>
                        <section class="panel width--normal height--extra-short direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/692" />
                            </figure>
                        </section>
                        <section class="panel behind width--normal height--normal direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/672" />
                            </figure>
                        </section>
                        <section class="panel behind width--normal height--tall direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/622" />
                            </figure>
                        </section>
                    </div>
                    <div class="row--bottom">
                        <section class="panel behind width--thin height--short direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/651" />
                            </figure>
                        </section>
                        <section class="panel width--small height--tall direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/641" />
                            </figure>
                        </section>
                        <section class="panel behind width--extra-wide height--extra-tall direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/661" />
                            </figure>
                        </section>
                        <section class="panel behind width--normal height--tall direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/621" />
                            </figure>
                        </section>
                        <section class="panel width--normal height--extra-short direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/691" />
                            </figure>
                        </section>
                        <section class="panel behind width--normal height--normal direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/671" />
                            </figure>
                        </section>
                        <section class="panel width--small height--tall direction--right">
                            <figure>
                                <img src="https://picsum.photos/1200/641" />
                            </figure>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Slider;
