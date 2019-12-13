import React, { Component } from "react";
import { Experiment } from "./components";
import { Grid } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
  }

  drop = event => {
    const { target } = event;
    event.preventDefault();
    const piece_id = event.dataTransfer.getData("piece_id");
    const card = document.getElementById(piece_id);
    target.appendChild(card);
    card.style.display = "inline-block";
    card.classList.remove("dragged");
    target.appendChild(card);
    target.classList.remove("grid-over");
  };

  dragOver = event => {
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Grid drop={this.drop} dragOver={this.dragOver}></Grid>
        <Experiment drop={this.drop} dragOver={this.dragOver}></Experiment>
      </React.Fragment>
    );
  }
}

export default App;
