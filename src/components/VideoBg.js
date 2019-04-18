import React, { Component } from "react";
import "./styles/VideoBg.css"

class VideoBg extends Component {
  //  constructor() {
  // 	 super()
  // 	 }
  //  }
  render() {
    return (
      <div className="VideoBg">
          <video loop preload="metadata" playsinline="true">
              <source src="./src/img/video/promovideo.mp4" type="video/mp4"/>
          </video>
      </div>
    );
  }
}

export default VideoBg;
