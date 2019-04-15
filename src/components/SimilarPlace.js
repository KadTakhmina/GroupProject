import React, { Component } from 'react';
import RaitingStar from './RaitingStar';

import './styles/var.css';
import './styles/SimilarPlace.css';

class SimilarPlace extends Component {
  render() {
    return (
      <div className="SimilarPlace">
        <div class = "row similar-header-block">
          <div class = "col col-lg-12 similar-place-block">
            <p>Похожие на этот</p>
          </div>
        </div>
        <div class="row">
          <div className = "col col-lg-4 similar-place-info">
              <img className = "similar-place-img" src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
              <RaitingStar/>
              <p className = "similar-place-name">"Another rest 1"</p>
          </div>
          <div className = "col col-lg-4 similar-place-info">
              <img className = "similar-place-img" src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
              <RaitingStar/>
              <p className = "similar-place-name">"Another rest 2"</p>
          </div>
          <div className = "col col-lg-4 similar-place-info">
              <img className = "similar-place-img" src = "https://images.unsplash.com/photo-1521834029104-b056ecebbb05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=669&q=80"/>
              <RaitingStar/>
              <p className = "similar-place-name">"Another rest 3"</p>
          </div>
        </div>

      </div>
    );
  }
}

<<<<<<< HEAD
export default SimilarPlace;

=======
<<<<<<< HEAD
export default SimilarPlace;
=======
export default SimilarPlace;
>>>>>>> 67bcf4fd1ef1764becec94b3e0d8fdbe0918b003
>>>>>>> 5438974c0a4fc09fb33ad63cb3c231b6656d6bf1
