import PropTypes from "prop-types";
import { useState } from "react";

const props = {
  count: PropTypes.number,
};

const ChildC = ({ count }) => {
  return (
    <>
      <h1>Child C</h1>
      {console.log("C Rendering")}
      <h1>{count}</h1>
    </>
  );
};

ChildC.propTypes = props;

const ChildB = ({ count }) => {
  return (
    <>
      <h1>Child B</h1>
      {console.log("B Rendering")}
      <ChildC count={count} />
    </>
  );
};

ChildB.propTypes = props;

const ChildA = ({ count }) => {
  return (
    <>
      <h1>Child A</h1>
      {console.log("A Rendering")}
      <ChildB count={count} />
    </>
  );
};

ChildA.propTypes = props;

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Parent A</h1>
      {console.log("Parent  Rendering")}
      <button onClick={handleInc}>Inc</button>
      <ChildA count={count} />
    </div>
  );
};

export default Parent;
