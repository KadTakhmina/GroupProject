import React, { Component } from "react";

import "./styles/RaitingNav.css";

class RaitingNav extends Component {
  constructor() {
    super();
    this.state = {
      list: ["Рестораны", "Отели", "Услуги", "Развелечения", "Курсы", "Еще"],
      selected: "Рестораны",
      droplist: ["Отели", "Услуги", "Развелечения", "Курсы", "Еще"],
      isOpen: false
    };
    this.changeDropDown = this.changeDropDown.bind(this);
    this.openDropDown = this.openDropDown.bind(this);
  }

  changeDropDown(e) {
    this.setState({
      selected: e.target.innerText,
      droplist: this.state.list.filter(n => n !== e.target.innerText)
    });
  }

  openDropDown() {
    return this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { resultsCount } = this.props;
    return (
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6 my-5">
          <h5 class="d-inline-block">Рейтинг заведений</h5>
          <div className="RaitingNav" onMouseLeave={this.openDropDown}>
            <div className="selected" onClick={this.openDropDown}>
              {this.state.selected}
            </div>
            <div
              className={`resultCategories ${
                this.state.isOpen ? "openDropDown" : ""
              }`}
            >
              {this.state.droplist.map(item => {
                return (
                  <div key={item} onClick={this.changeDropDown}>
                    {" "}
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12  col-md-6 resultsCountText my-5">
          {`Найдено ${resultsCount} результатов`}
        </div>
      </div>
    );
  }
}

export default RaitingNav;
