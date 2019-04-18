import React, { Component } from 'react';
import{Link} from "react-router-dom";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import  PT from 'prop-types';

import './styles/var.css';
import './styles/RaitingPlace.css';
import Button from "./Button"




class RaitingPlace extends Component {

  constructor() {
    super() ;
    this.state = {
      isDisabled: true,
    }
    this.toggleDisable = this.toggleDisable.bind(this);
  }


  toggleDisable() {
    this.setState({
      isDisabled:!this.state.isDisabled,
    })
  }

  render() {
    const {commentsCount,raiting} = this.props;
  

    return (
      <div className="RaitingPlace col col-4  text-left">
            <h5>Рейтинг</h5>
            <Button isDisabled = {this.state.isDisabled}
                    toggleDisable = {this.toggleDisable}
                    val ="за год">
            </Button>
            <Button   isDisabled = {!this.state.isDisabled}
                      toggleDisable = {this.toggleDisable}
                      val ="за все время"></Button>
          <div>
          <Rater total={5} rating={raiting} interactive={false} className = "stars">
				  </Rater>
          </div>
        <div class = "commentBlock">
        <h1 class = "commentAmount">{commentsCount}</h1>
        <p>отзывов</p>
        <Rater total={5} rating={0}  className = "stars">
				</Rater>
          <p><Link to = "/ReviewPage">Оставить отзыв</Link></p>
   
    </div>
      </div>
    );
  }
}


RaitingPlace.propTypes = {
  raiting: PT.string.isRequired,
  comments: PT.array.isRequired,
}
export default RaitingPlace;
