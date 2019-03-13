import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "indo ada banyak makanan yang enak",
      daftar: this.props.list
    };
  }

  render() {
    return (
      <div>
        <h2>
          Daftar makanan terfavorit di Indonesia
          <br />
          {this.state.label}
        </h2>
        <p>{this.state.list}</p>
      </div>
    );
  }
}

export default Header;
