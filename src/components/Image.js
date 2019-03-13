import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <img
        src={this.props.links}
        width={this.props.width}
        height={this.props.height}
        alt="gambar"
      />
    );
  }
}

export default Image;
