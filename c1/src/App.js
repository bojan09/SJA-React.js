// importing css
import "./css/style.css";

import Student from "./components/Student";
import StudentClass from "./components/StudentClass";
import Conditional from "./components/Conditional";
/*
!static constant

const paragraphOne = {
  backgroundColor: "red",
  color: "blue",
  padding: "2rem",
};
*/

const name = "Harry";
const lastName = "Potter";
const age = "25";

const student = {
  name: name,
  lastName: lastName,
  age: age,
  email: "email@gmail.com",
};

const fruits = ["apple", "orange", "banana", "kiwi", "figs"];
// const fruits = [];

const toShow = false;

const App = () => {
  /*
 !dynamic constant -- rerenders each time with the page
  
  const paragraphTwo = {
    backgroundColor: "yellow",
    color: "blue",
    padding: "2rem",
  };
  */
  return (
    <div className="App">
      <h2>Class 02</h2>

      <h3>{JSON.stringify(student)}</h3>
      {/* <p style={paragraphOne}> */}
      <p className="paragraphOne">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        facilis provident ab, magnam id vero modi! Harum molestiae doloremque
        quibusdam.
      </p>
      {/* <p style={paragraphTwo}> */}
      <p className="paragraphTwo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        voluptatibus.
      </p>

      <Student student={student} />
      <StudentClass student={student} />
      <Conditional fruits={fruits} toShow={toShow} />
      <Conditional fruits={fruits} toShow={toShow} />
    </div>
  );
};

export default App;
