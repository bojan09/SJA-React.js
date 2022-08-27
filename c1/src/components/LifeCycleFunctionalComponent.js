import { useState } from "react";

const LifeCycleFunctionalComponent = ({ incrementor }) => {
  const [counter, setCounter] = useState(0);

  // Incriment function
  const incriment = () => {
    setCounter((counter) => counter + incrementor);
  };

  // Decrement function
  const decrement = () => {
    setCounter((counter) => counter - incrementor);
  };

  console.log("LifeCycleFunctionalComponent -- Render " + counter);
  return (
    <>
      <h2>Life Cycle Functional Component</h2>
      <p>Counter Value: {counter}</p>
      <div className="btn-container">
        <button onClick={incriment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default LifeCycleFunctionalComponent;
