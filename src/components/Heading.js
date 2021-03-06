import React, { Component } from "react";

import Button from "./Button";
import "./styles/var.css";
import "./styles/Heading.css";

class Heading extends Component {
  render() {
    return (
      <div className="Heading container">
        <div class="heading">
          <h1 class="text-white">Что вы ищете?</h1>
          {/* <p class="text-white">
            Lorem mvksm fndjsfn vdkfm vdskvn sdkfsk cskdf
          </p> */}
          <div class="arrow bounce">
            <a class="fa fa-arrow-down fa-2x" href="#" />
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
