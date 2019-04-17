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
          <video id="videoBG" poster="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.newsapi.com.au%2Fimage%2Fv1%2F9fdbf585d17c95f7a31ccacdb6466af9&imgrefurl=https%3A%2F%2Fwww.news.com.au%2Ftechnology%2Fscience%2Fspace%2Fastronomers-piece-together-first-image-of-black-hole%2Fnews-story%2Fdb09d5e8b215adbce46b96f74e8e0595&docid=fafv9VshwMMIsM&tbnid=86OlR6dY8VEB7M%3A&vet=10ahUKEwjhzuiagNfhAhUrxaYKHTqAB8gQMwhLKAwwDA..i&w=650&h=366&client=ubuntu&bih=639&biw=1299&q=picture&ved=0ahUKEwjhzuiagNfhAhUrxaYKHTqAB8gQMwhLKAwwDA&iact=mrc&uact=8" autoplay muted loop>
              <source src="./src/img/video/promovideo.mp4" type="video/mp4"/>
          </video>
      </div>
    );
  }
}

export default VideoBg;
