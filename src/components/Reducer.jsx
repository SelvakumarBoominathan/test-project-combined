// reducer is function the is used to manipulate a single value in different scenarios

import { useReducer, useState } from "react";

// reducer function is function which return different values based on the scenarios
const movementReducer = (state = { top: 0, left: 0 }, action) => {
  switch (action) {
    case "up":
      if (state.top !== 0) {
        return {
          ...state,
          top: state.top - 100,
        };
      }
      return state;
    case "down":
      if (state.top !== 200) {
        return {
          ...state,
          top: state.top + 100,
        };
      }
      return state;
    case "left":
      if (state.left !== 0) {
        return {
          ...state,
          left: state.left - 100,
        };
      }
      return state;
    case "right":
      if (state.left !== 200) {
        return {
          ...state,
          left: state.left + 100,
        };
      }
      return state;
    default:
      return state;
  }
};

const ReducerComp = () => {
  const [pos, dispatch] = useReducer(movementReducer, { top: 0, left: 0 });

  // const [pos, setPos] = useState({
  //   top: 0,
  //   left: 0,
  // });

  // const handleMovement = (move) => {
  //   const tempPos = { ...pos };

  //   switch (move) {
  //     case "up":
  //       if (tempPos.top !== 0) {
  //         tempPos.top = tempPos.top - 100;
  //       }
  //       break;
  //     case "down":
  //       if (tempPos.top !== 200) {
  //         tempPos.top = tempPos.top + 100;
  //       }
  //       break;
  //     case "left":
  //       if (tempPos.left !== 0) {
  //         tempPos.left = tempPos.left - 100;
  //       }
  //       break;
  //     case "right":
  //       if (tempPos.left !== 200) {
  //         tempPos.left = tempPos.left + 100;
  //       }
  //       break;
  //     default:
  //       console.log("do nothing");
  //   }

  //   setPos(tempPos);
  // };

  return (
    <>
      <div
        style={{
          height: "300px",
          width: "300px",
          border: "1px solid",
          position: "relative",
        }}
      >
        <div
          style={{
            top: pos.top,
            left: pos.left,
            height: 100,
            width: 100,
            backgroundColor: "blue",
            position: "absolute",
            transition: "all 500ms ease",
          }}
        ></div>
      </div>
      <div>
        {/* <button onClick={() => handleMovement("up")}>Top</button>
        <button onClick={() => handleMovement("down")}>Bottom</button>
        <button onClick={() => handleMovement("left")}>Left</button>
        <button onClick={() => handleMovement("right")}>Right</button> */}
        <button onClick={() => dispatch("up")}>Top</button>
        <button onClick={() => dispatch("down")}>Bottom</button>
        <button onClick={() => dispatch("left")}>Left</button>
        <button onClick={() => dispatch("right")}>Right</button>
      </div>
    </>
  );
};

export default ReducerComp;
