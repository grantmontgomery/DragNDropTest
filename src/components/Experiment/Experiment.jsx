import React, { Component } from "react";
import "./Experiment.css";

class Experiment extends Component {
  state = {};
  render() {
    const { dragOver, drop } = this.props;
    return (
      <div
        className="experiment-wrapper"
        onDragOver={dragOver}
        onDrop={drop}
      ></div>
    );
  }
}

export default Experiment;
