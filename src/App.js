import React from 'react';
import Video from './assets/VID.mp4';
import "./App.css"
function BGVideo() {
  return (
    <div class="video-container">
      <video src={Video} type="video/mp4" autoPlay loop muted className='video' />
    </div>
  );
}
export default BGVideo;