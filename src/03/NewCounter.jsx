import React, { Component } from "react";

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      count,
      NewCount: count === state.count ? state.NewCount : count,
    };
  }

  increaseCount() {
    this.setState(({ NewCount }) => ({
      NewCount: NewCount + 1,
    }));
  }
  render() {
    return (
      <div>
        현재 카운트(New count) : {this.state.NewCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
