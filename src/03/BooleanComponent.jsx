import React, { Component } from "react";

class BooleanComponent extends Component {
  render() {
    const massage = this.props.bored === "11" ? "놀러가자" : "하던거나 하자";
    return <div className="massage-container">{massage}</div>;
  }
}

export default BooleanComponent;
