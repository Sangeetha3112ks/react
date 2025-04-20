import React, { useEffect, useState, useRef } from "react";
import "./Banner.css";
import banner1 from "../images/Banners/banner1.jpg";
import banner2 from "../images/Banners/banner2.jpg";
import banner3 from "../images/Banners/banner3.jpg";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import PlayDetails from "../PlayDetails/PlayDetails";

const Banner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupVideo, setPopupVideo] = useState(null);
  const videoRef = useRef(null);
  const swiperRef = useRef(null);

  const slides = [
    { image: banner1, video: require("../videos/video1.mp4") },
    { image: banner2, video: require("../videos/video2.mp4") },
    { image: banner3, video: require("../videos/video3.mp4") },
  ];

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    return () => swiperRef.current?.destroy();
  }, []);

  const handlePlayDetailsClick = (video) => {
    setPopupVideo(video);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="slider">
      <div className="swiper-container">
        <div className="swiper-wrapper list">
          {slides.map((slide, i) => (
            <div key={i} className="swiper-slide item">
              <img src={slide.image} className="responsive" alt="" />
              <div className="content">
                <div className="title">Complete Summer Fashion</div>
                <div className="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
                <div className="amount-playdetails">
                  <div className="amount">$600.00</div>
                  <PlayDetails
                    onClick={() => handlePlayDetailsClick(slide.video)}
                    videoRef={videoRef}
                    popupVideo={popupVideo}
                    showPopup={showPopup}
                    closePopup={closePopup}
                  />
                </div>
                <div className="button">
                  <a href="#" className="btn" aria-label="Buy the featured summer fashion">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="swiper-button-next" aria-label="Next slide"></div>
              <div className="swiper-button-prev" aria-label="Previous slide"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;