import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildComponent extends Component {
  render() {
    const { boolValue, numValue, arrayValue, nodeValue, funcValue } =
      this.props;
    return (
      <div>
        <span>불리언값 : {boolValue}</span>
        <span>숫자값 : {numValue}</span>
        <span>배열 값 : {arrayValue}</span>
        <span>노드값 : {nodeValue} </span>
        <span>함수 값 : {funcValue}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};
export default ChildComponent;
