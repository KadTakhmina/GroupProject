import React, { Component } from 'react';
// import  { Link } from 'react-router-dom';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import  PT from "prop-types"

import  Button from './Button';
import './styles/FeedbackForm.css';



class FeedbackForm extends Component {

  render() {
  const {name,logo} =this.props;
    return (
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title modalTitles" id="exampleModalLabel">Оставьте отзыв</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="">
        <div className = "feedbackPlace m-2  d-flex  align-items-center">
          <div className = "feedbackLogo"><img src={logo} alt="LOGO"/></div>
          <h3>{name}</h3>
        </div>
        <div className = "feedbackSings">
        <Rater total={5}  className = "stars" >
        </Rater>
        </div>
          <label htmlFor="">
          Расскажите ваши впечатления
            <textarea name="feedbackText" className = "feedbackText" ></textarea>
          </label>
          <label htmlFor="" className ="w-100">
          Что вам понравилось
          <textarea name="feedbackText" className = "feedbackText" ></textarea>
          </label>
          <label htmlFor="" className = "w-100">
          Что мы должны улучшить или поменять
          <textarea name="feedbackText" className = "feedbackText"></textarea>
          </label>
        <Button val = "Отправить"/>
        </form>
      </div>
    </div>
  </div>
</div>
    );
  }
}


FeedbackForm.propTypes = {
  name: PT.string.isRequired,
  logo: PT.string.isRequired
}

export default FeedbackForm;
