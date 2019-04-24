import React, { Component } from 'react';
import {Link} from "react-router-dom";

import {Layout,FeedbackForm} from "../components";


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
      <div className = "Feedbacks container">
        <h2>Отзывы</h2>
        <p><Link data-toggle="modal" data-target="#exampleModal">Оставить отзыв</Link></p>
      </div>
        
			</Layout>
    );
  }
}

export default Feedbacks;
