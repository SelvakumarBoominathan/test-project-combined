import { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ initialValue = 0 }) => {
  // let count = 0;

  // State Hook Syntax
  const [count, setCount] = useState(initialValue);

  const handleClick = () => {
    // count = count + 1;
    // console.log(count);

    // Triigering the re-render with new updated value
    setCount(count + 1);
    // the value will change in the JS memory only after the re-rendering
    console.log(count);
  };

  return (
    <>
      {console.log("rendering")}
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click Me to Inc the Counter</button>
    </>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number,
};

export default Counter;
