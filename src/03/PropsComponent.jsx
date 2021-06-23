import React, { Component } from "react";
import PropTypes from "prop-types";
class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

// 자료형을 선언하는 예제
PropsComponent.propTypes = {
  name: PropTypes.string,
};
console.log(PropsComponent.propTypes);
export default PropsComponent;
