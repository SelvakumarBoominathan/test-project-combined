import { useState } from "react";

const LifeCycle = () => {
  const [text, setText] = useState("");

  const [showText, setShowText] = useState("SANJAYA");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setShowText(text);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <h1>{showText}</h1>
    </div>
  );
};

export default LifeCycle;
