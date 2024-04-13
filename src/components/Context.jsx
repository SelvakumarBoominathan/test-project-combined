import PropTypes from "prop-types";
import { useState, createContext, useContext } from "react";

const CounterContext = createContext(null);

const props = {
  count: PropTypes.number,
};

const ChildC = () => {
  // const count = useContext(CounterContext);

  const { count, handleInc } = useContext(CounterContext);

  return (
    <>
      <h1>Child C</h1>
      {console.log("C Rendering")}
      <button onClick={handleInc}>Inc</button>
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
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, handleInc }}>
      {console.log("Context Learning")}
      <div>
        <h1>Parent A</h1>
        {console.log("Parent  Rendering")}
        {/* <button onClick={handleInc}>Inc</button> */}
        <ChildA />
      </div>
    </CounterContext.Provider>
  );
};

export default Parent;
