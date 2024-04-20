import { useEffect, useRef, useState } from "react";

const Reference = () => {
  const ref = useRef(null);

  const intervalRef = useRef(null);

  const changeColor = () => {
    console.log(ref);
    ref.current.style.color = "green";
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  }, []);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      // async handling of the state variable more precise
      setCounter((count) => count + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <p ref={ref}>Header - FSD56WE-T</p>
      <button onClick={changeColor}>Change</button>
      <h1>{counter}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
};

export default Reference;
