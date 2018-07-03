import React, { Component } from "react";

class Call_Fun extends Component {
  constructor(props) {
    super(props);
    this.name = "Mehedi";
  }
  render() {
    return (
      <div>
        <h1>This is Component Calling a Function</h1>
        <h3>Working Dude : {this.name}</h3>
      </div>
    );
  }
}
export default Call_Fun;
