import LifeCycleClassComponent from "./components/LifeCycleClassComponent";
import LifeCycleFunctionalComponent from "./components/LifeCycleFunctionalComponent";
import { Login } from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <LifeCycleClassComponent />
      <LifeCycleFunctionalComponent />
      <Login />
    </div>
  );
};

export default App;
