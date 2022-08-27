import { Component } from "react";

class LifeCycleClassComponent extends Component {
  constructor(props) {
    super(props);

    // This is the initial state of the component
    this.state = {
      counter: 0,
    };
  }

  incriment = () => {
    const incrementor = this.props.incrementor;
    this.setState((prevState) => ({
      counter: prevState.counter + incrementor,
    }));
  };

  decrement = () => {
    const incrementor = this.props.incrementor;
    this.setState((prevState) => ({
      counter: prevState.counter - incrementor,
    }));
  };

  //   Method called every time component needs to re-render
  render() {
    console.log("LifeCycleClassComponent -- Render " + this.state.counter);
    return (
      <>
        <h2>Life Cycle Class Component</h2>
        <p>Counter value: {this.state.counter}</p>
        {/* Change initial state */}
        <div className="btn-container">
          <button onClick={this.incriment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </>
    );
  }
}

export default LifeCycleClassComponent;
