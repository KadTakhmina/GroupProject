import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';


import "./styles/CommentCarousel.css";

class CommentCarousel extends Component {
  render() {
    return (
      <div className="CommentCarousel">
     <div class="col-12 ">
        <div class="review-block">
            <div class="row">
                <div class="col-sm-3">
                    <div class="review-block-img">
                        <img src="https://image.flaticon.com/icons/svg/476/476863.svg" class="img-rounded" alt="fdg" />
                    </div>
                    <div class="review-block-name"><Link>UserName</Link></div>
                    <div class="review-block-date">June 29, 2019<br/>10 days ago</div>
                </div>
                <div class="col-sm-9">
                    <div class="review-block-rate">
                    <Rater total={5} rating={4} interactive={false}>
				            </Rater>
                    </div><br/>
                    <div class="review-block-title">This hotel is nice!</div><br/>
                    <div class="review-block-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. </div>
                </div>
               </div>
             </div>
        </div>
      </div>
    );
  }
}

export default CommentCarousel;
