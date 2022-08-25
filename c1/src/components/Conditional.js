import PropTypes from "prop-types";
const Conditional = ({ toShow, fruits }) => {
  //   if (toShow) {
  //     return null;
  //   }
  return (
    <div>
      {toShow && <p>111</p>}
      {toShow ? <p>111</p> : <p>222</p>}

      <ul>
        {/* don't use the index as a key, but in this case we have nothing else to use, so we use the index. */}

        {/* fruits.lenght && fruits.map is a security mesurement we take in order to print our elements only if we have some */}
        {fruits &&
          fruits.map((fruit, i) => {
            return <li key={i}>{fruit}</li>;
          })}
      </ul>
      <ul>{fruits && fruits.map((fruit, i) => <li key={i}>{fruit}</li>)}</ul>
    </div>
  );
};

export default Conditional;
Conditional.propTypes = {
  toShow: PropTypes.bool,
  fruits: PropTypes.arrayOf(PropTypes.string),
};

/*
if (toShow){
    print something
}else{
    print something else
}

*/
