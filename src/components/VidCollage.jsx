import React, { useEffect } from 'react'
import '../assets/css/video.css'
import {
    vid1,
    vid2,
    vid3,
    vid4

} from "../assets";
function VidCollage() {
    useEffect(() => {
        let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});
    }, [])
  return (
<div className="container" data-aos="fade-up">

<div className="main-video-container">
   <video src={vid1} loop controls className="main-video"></video>
   <h3 className="main-vid-title text-grey-100">Closing ceremony of Boot-camp
October 2022</h3>
</div>

<div className="video-list-container">

   <div className="list active">
      <video src={vid1}className="list-video"></video>
      <h3 className="list-title">Closing ceremony of Boot-camp
October 2022</h3>
   </div>

   <div className="list">
      <video src={vid2}className="list-video"></video>
      <h3 className="list-title">ENA
7th cohort
2022</h3>
   </div>

   <div className="list">
      <video src={vid3} className="list-video"></video>
      <h3 className="list-title">CORP
Graduation ceremony
2022</h3>
   </div>

   <div className="list">
      <video src={vid4} className="list-video"></video>
      <h3 className="list-title">GIZ
Tunisian-German cooperation
2022</h3>
   </div>
   <div className="list">
      <video src={vid4} className="list-video"></video>
      <h3 className="list-title">GIZ
      FGDB
key challenges in Reimbursing Depositors
2023</h3>
   </div>

</div>

</div>

  )
}

export default VidCollage
