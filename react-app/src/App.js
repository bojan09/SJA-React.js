/* import { PureUnpure } from "./components/PureUnpure"; */
import { Counter } from "./components/Counter";
import { Todos } from "./components/Todos";
import { Posts } from "./components/Posts";

const App = () => {
  return (
    <div>
      {/* <PureUnpure /> */}
      <Todos />
      <hr />
      <br />
      <Counter />
      <hr />
      <br />
      <Posts />
    </div>
  );
};

export default App;
