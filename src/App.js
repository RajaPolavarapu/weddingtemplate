import React from 'react';
import Video from './assets/VID_NoFooter.mp4';
import "./App.css";
import Button from "./Button";

function BGVideo() {
  return (
    <div className="video-container">
      <video src={Video} type="video/mp4" autoPlay loop muted className='video' />
      <div className="grid-container">
        <div className="grid-item">
          <Button venue={"wedding"} />
        </div>
        <div className="grid-item">
         <Button />
          </div>
      </div>
    </div>
  );
}
export default BGVideo;