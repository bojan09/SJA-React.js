// each component takes props by default
// props is a dynamic attribute we use within the function
// props inside a function is just a object element

/*
const FuncComp = (props) => {

  return <p>Holaa ... {props.name}</p>;
};

*/
// Destructurin props
// and setting it in one line
const FuncComp = ({ name }) => <p>Holaa ... {name}</p>;

export default FuncComp;
