import React from "react";
import { PureComponent } from "react";

export default class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 3,
    };
  }

  render() {
    console.log(this.state.count);
    return (
      <>
        <h1>This is Pure Component : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 3 })}>
          Update
        </button>
        <p>Pure component is stopping the code to execute multiple times. If the state changes then only the component will render.</p>
      </>
    );
  }
}
