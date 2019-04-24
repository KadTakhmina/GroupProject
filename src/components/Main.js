import React, { Component } from "react";
// import TypeIt from 'typeit';
import TypeIt from './TypeIt';
// import { Link } from "react-router-dom";
// import User from "./User";
// import userPhoto from "../img/user.svg"

import "./styles/var.css";
// import "./styles/Categories.css";

class Main extends Component {
    // constructor (props) {
    //     super(props);
    //   }
      
    //   componentDidMount () {
    //     new TypeIt(this.el, this.props);
    //   }
      
  render() {
    return <div className="Main container">
       {/* <h1 class="main_heading col-12">What are u looking for?</h1> */}
       {/* <span ref={(el) => { this.el = el; }}>{this.props.children}</span>; */}
       {/* <Type 
      strings="Out of 100 men, one will read the Bible, the other 99 will read the Christian. <br> – D. L. Moody"
      loop={true}
      loopDelay={5000}
      speed={40}
    /> */}
     <TypeIt 
      strings="Out of 100 men, one will read the Bible, the other 99 will read the Christian. <br> – D. L. Moody"
      loop={true}
      loopDelay={5000}
      speed={40}
    />
    {/* <TypeIt/> */}
  </div>
//        <p>The shelters are built in one piece, which gives the incredible mobility to reach your dream location. Modularity ensures that over time you can grow your Ark to your needs. The units are created by craftsmen in our factory.

// We have ideal conditions and are able to reach the highest details and reduce production time. Which allows us to keep control of the price, remove any onsite construction constraints and make your dream home, on time, on budget, at the highest quality possible.

// CHOOSE YOUR PURPOSE
// Ark-Shelter to live in closer to nature
// Ark-Shelter as an office
// Ark-Shelter to relax in at home</p>
   
  }
}

export default Main;
