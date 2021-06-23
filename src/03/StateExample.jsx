import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loding: false,
      formData: "no data",
    };

    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = "New Data";
    //const { formData } = this.state;

    this.setState({
      loding: true,
      formData: data,
    });
    console.log("loding 값", this.state.loding);
  }
  render() {
    return (
      <div>
        <span>로딩중: {String(this.state.loding)}</span>
        <span>결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
