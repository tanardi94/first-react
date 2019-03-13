import React, { Component } from "react";
import Image from "./Image";

class List extends Component {
  render() {
    return (
      <ol>
        <Image
          links="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"
          width="500"
          height="400"
        />
        <li>Sample Food</li>
        <Image
          links="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
          width="400"
          height="300"
        />
        <li>Nasi Padang</li>
        <Image
          links="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
          width="300"
          height="200"
        />
        <li>Sate</li>
        <Image
          links="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"
          width="200"
          height="100"
        />
        <li>Soto Lamongan</li>
      </ol>
    );
  }
}

export default List;
