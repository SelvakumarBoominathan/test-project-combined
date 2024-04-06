import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Student from "./Student.jsx";

const data = [
  {
    name: "Rossy",
    imageUrl:
      "https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg",
    id: 6543,
    age: 21,
  },
  {
    name: "John",
    imageUrl:
      "https://img.freepik.com/free-photo/education-courses-university-concept-serious-looking-college-student-guy-with-notebooks-looking-determined-camera-casual-expression-as-heading-class-yellow-background_1258-60075.jpg",
    id: 9876,
    age: 21,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
