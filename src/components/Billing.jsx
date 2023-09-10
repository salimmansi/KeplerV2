import {  T1,
  T2,
  T3,
  T4,
  T7,
  T5,
  T6, } from "../assets";
import styles, { layout } from "../style";
import '../assets/css/billing.css'
import React, { useState } from "react";
const Billing = () =>{
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return(
    <section id="product" className={layout.section}>

    <div className={layout.sectionInfoBilling}>
      <h2 className={styles.heading2} data-aos="fade-up"
     data-aos-duration="2000">
      Our Team
      </h2>
<div className="team-wrapper flex flex-row flex-wrap " data-aos="fade-up"
     data-aos-duration="2500">
  <div></div>
<figure
      className={`snip1163 ${isHovered ? 'hover' : ''} col`}
      onMouseLeave={handleMouseLeave}
    >
      <img src={T2} alt="sample48" />
      <figcaption>
        <h2>Belhassen Ben Rached</h2>
        <div>
          <p>CEO</p>
        </div>
        <a href="#"></a>
      </figcaption>
    </figure>
<figure
      className={`snip1163 ${isHovered ? 'hover' : ''} col`}
      onMouseLeave={handleMouseLeave}
    >
      <img src={T5} alt="sample48" />
      <figcaption>
        <h2>Khaoula Ghazouani</h2>
        <div>
          <p>Director of Event Operations</p>
        </div>
        <a href="#"></a>
      </figcaption>
    </figure>
<figure
      className={`snip1163 ${isHovered ? 'hover' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <img src={T4} alt="sample48" />
      <figcaption>
        <h2>Rami Saadaoui</h2>
        <div>
          <p>Project Manager</p>
        </div>
        <a href="#"></a>
      </figcaption>
    </figure>
<figure
      className={`snip1163 ${isHovered ? 'hover' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <img src={T6} alt="sample48" />
      <figcaption>
        <h2>Jihene Hajaiej</h2>
        <div>
          <p>Accountant</p>
        </div>
        <a href="#"></a>
      </figcaption>
    </figure>
<figure
      className={`snip1163 ${isHovered ? 'hover' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <img src={T3} alt="sample48" />
      <figcaption>
        <h2>Ahmed Ben Rached</h2>
        <div>
          <p>Event Manager</p>
        </div>
        <a href="#"></a>
      </figcaption>
    </figure>
<figure
      className={`snip1163 ${isHovered ? 'hover' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <img src={T1} alt="sample48" />
      <figcaption>
        <h2>Jinene Dridi</h2>
        <div>
          <p>Reservation and Ticketing Manager</p>
        </div>
        <a href="#"></a>
      </figcaption>
    </figure>
<figure
      className={`snip1163 ${isHovered ? 'hover' : ''}`}
      onMouseLeave={handleMouseLeave}
    >
      <img src={T7} alt="sample48"  className="rounded-e"/>
      <figcaption>
        <h2>Khadija Ben Rached</h2>
        <div>
          <p>Event Coordinator</p>
        </div>
        <a href="#"></a>
      </figcaption>
    </figure>
</div>

 
    </div>
  </section>
  )

  };

export default Billing;
