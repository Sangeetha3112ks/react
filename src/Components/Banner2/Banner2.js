import React, { useState, useRef } from "react";
import "./Banner2.css";
import Image from "../images/Banners/banner.jpg";
import PlayDetails from "../PlayDetails/PlayDetails";
import Video1 from "../videos/video1.mp4";

const Banner2 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const videoRef = useRef(null);
  const popupVideo = Video1;

  const togglePopup = (open = !showPopup) => {
    setShowPopup(open);
    if (!open && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="home1">
      <img src={Image} alt="Banner" className="banner-image" />
      <div className="content1">
        <h1>Explore every part of this product</h1>
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <PlayDetails
          onClick={() => togglePopup(true)}
          videoRef={videoRef}
          popupVideo={popupVideo}
          showPopup={showPopup}
          closePopup={() => togglePopup(false)}
        />
      </div>
    </div>
  );
};

export default Banner2;