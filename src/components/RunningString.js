import React, { Component } from "react";

import "./styles/var.css";
// import './styles/SimilarPlace.css';

class RunningString extends Component {
  render() {
    return (
    //   <body >
        <center>
          <form name="form">
            <input type="text" size="30" name="ctc" onload="setTimeout( m_line, 200 );" />
          </form>
        </center>
    //   </body>
    );
  }
//   constructor() {
//     super();
//     var line = "академия информатики для школьников",
//       speed = 200,
//       i = 0;
//     function m_line() {
//       if (i++ < line.length) {
//         document.form.ctc.value = line.substring(0, i);
//       } else {
//         document.form.ctc.value = " ";
//         i = 0;
//       }
//       setTimeout(m_line, speed);
//     }
  
}

export default RunningString;
