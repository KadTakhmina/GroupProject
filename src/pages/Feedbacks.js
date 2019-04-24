import React, { Component } from 'react';
import {Link} from "react-router-dom";

import {Layout,FeedbackForm} from "../components";
import '../components/styles/Feedbacks.css';



class Feedbacks extends Component {
  constructor() {
    super()
    this.state = {
        currentData:JSON.parse(localStorage.getItem("currentEdit")), 
        
    }
    
  }
  

  
  render() {
    
    
    return (
      <Layout>
      <div className = "Feedbacks container-fluid">
          <div className = "row">
            
          </div>
      </div>
        
			</Layout>
    );
  }
}

export default Feedbacks;
