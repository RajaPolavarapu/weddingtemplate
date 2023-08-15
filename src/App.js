import React from 'react';
import Video from './assets/VID_NoFooter.mp4';
import "./App.css";
import Button from "./Button";

function BGVideo() {
  return (
    <div className="video-container">
      <video src={Video} type="video/mp4" autoPlay muted className='video' />
      <div className='rsvp-container'>
      <button className='rsvp'>
        <a href='tel:+919441841403' className='tel'>Mobile: +919441841403</a>
      </button>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <Button title={"Marriage Venue Directions"} type="marriage" />
        </div>
        <div className="grid-item">
         <Button title="Reception Venue Directions" type="reception" />
          </div>
      </div>
    </div>
  );
}
export default BGVideo;
