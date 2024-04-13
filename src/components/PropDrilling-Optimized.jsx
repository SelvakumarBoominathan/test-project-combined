import PropTypes from "prop-types";
import { useState } from "react";

const props = {
  count: PropTypes.number,
};

const ChildC = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Child C</h1>
      <button onClick={handleInc}>Inc</button>
      {console.log("C Rendering")}
      <h1>{count}</h1>
    </>
  );
};

ChildC.propTypes = props;

const ChildB = () => {
  return (
    <>
      <h1>Child B</h1>
      {console.log("B Rendering")}
      <ChildC />
    </>
  );
};

const ChildA = () => {
  return (
    <>
      <h1>Child A</h1>
      {console.log("A Rendering")}
      <ChildB />
    </>
  );
};

const Parent = () => {
  return (
    <div>
      <h1>Parent A</h1>
      {console.log("Parent  Rendering")}

      <ChildA />
    </div>
  );
};

export default Parent;
