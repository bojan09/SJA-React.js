import { useEffect, useState } from "react";

const LifeCycleFunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  //! WRONG
  // counter += 1

  // useEffect
  useEffect(() => {
    console.log("LifeCycleFunctionalComponent -> useEffect");
  }, []);

  // setState
  //   Add +1 to the counter
  console.log("LifeCycleFunctionalComponent -- Render");
  const incriment = () => {
    setCounter((count) => ++count);
  };

  return (
    <div>
      <h2>Life Cycle Functional Component</h2>
      <p>Counter Value: {counter}</p>
      <button onClick={incriment}>Add +1</button>
    </div>
  );
};

export default LifeCycleFunctionalComponent;
