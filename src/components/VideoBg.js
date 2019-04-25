import React, { Component } from "react";
import "./styles/VideoBg.css";
import Video from "../img/video/Diplomka.mp4" ;

class VideoBg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: Video
    };
  }

  render() {
    return (
      <div className="VideoBg">
        <video
          id="background-video"
          loop
          autoPlay
          muted
          src={this.state.videoURL} 
          type="video/mp4"
        />
      </div>

    );
  }
}

export default VideoBg;
// import React from 'react';
// import { Player } from 'video-react';

// export default props => {
//   return (
//     <Player
//       playsInline
//       poster="https://images.unsplash.com/photo-1450175178156-cb9ecd3da179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
//       src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//     />
//   );
// };
