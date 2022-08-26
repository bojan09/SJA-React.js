import { Component } from "react";

export class LifeCycleClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCycleComponent -- Constructor");

    // This is the initial state of the component
    this.state = {
      counter: 0,
    };
  }

  //   Method called after render()
  componentDidMount() {
    console.log("LifeCycleComponent -- ComponentDidMount");
  }

  //! function for Button add +1
  incriment = () => {
    // WRONG
    // this.incriment.counter += 1;

    // CORRECT
    this.setState((state) => ({ counter: ++state.counter }));

    // logging the results to the console
    console.log("incriment", this.state.counter);
  };

  //   Method called every time component needs to re-render
  render() {
    console.log("LifeCycleComponent -- Render");
    return (
      <>
        <h2>Life Cycle Class Component</h2>
        <p>Counter value: {this.state.counter}</p>
        {/* Change initial state */}
        <button onClick={this.incriment}>Add +1</button>
      </>
    );
  }
}

export default LifeCycleClassComponent;
