import FuncComp from "./components/FuncComp";
import ClassComp from "./components/ClassComp";

function App() {
  return (
    <div>
      <center>
        <h1>Hello React</h1>
        <p>Pargraph in React</p>

        <FuncComp name="Samuel L. Jackson" />
        <FuncComp name="Mickey Lee" />
        <FuncComp name="John Travolta" />
        <FuncComp name="Soap MacTavish" />
        <FuncComp name="John Price" />

        <br />
        <ClassComp />
      </center>
    </div>
  );
}

export default App;
