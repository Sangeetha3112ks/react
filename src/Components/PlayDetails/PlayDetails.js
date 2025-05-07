import React, { useEffect } from 'react';
import playbutton from '../images/playbutton.png';
import './PlayDetails.css';

const PlayDetails = ({ onClick, videoRef, popupVideo, showPopup, closePopup }) => {
  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [showPopup]);

  return (
    <div>
      <div className="playdetails">
        <img src={playbutton} alt="" />
        <a href="#" className="play-details-link" onClick={(event) => { event.preventDefault(); onClick(); }}>
          Play Details
        </a>
      </div>

      {showPopup && popupVideo && (
        <div className="video-popup">
          <div className="video-popup-content">
            <a
              href="#"
              className="close-popup"
              onClick={(event) => { event.preventDefault(); closePopup(); }}
            >
              &times;
            </a>
            <div className="popup-video">
              <video
                ref={videoRef}
                controls={false}
                src={popupVideo}
                autoPlay
                muted
                loop
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayDetails;