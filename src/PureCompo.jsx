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
      <h4>
        Pure component stops the re-rendering of a component untill the state is changed. If the state is changed then only the component will render otherwise it will remain same. In the following example checkout console.log for the results, everytime Update button is clicked the state of the component changes and the component re-renders itself. Overall pure component renders the component only if the state is getting changed somehow, otherwise it will not re-render.
      </h4>
        <h1>This is Pure Component : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 3 })}>
          Update
        </button>

        <hr />
      </>
    );
  }
}
