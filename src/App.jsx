import "./App.css";
import Student from "./Student.jsx";
import add, { mul as multi, sub } from "./utils.js";

const data = [
  {
    name: "Rossy",
    id: 6543,
    imageUrl:
      "https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg",
    age: 21,
  },
  {
    id: 9876,
    age: 21,
    imageUrl: undefined,
  },
  {},
];

function App() {
  const mentorName = "Sanjay Saravanan";
  return (
    <>
      <h1>Weekend Tamil Batch</h1>
      <h1>Mentor: {mentorName}</h1>
      <h1>Batches: {sub(1, 2)}</h1>
      <h1>Batches: {multi(1, 2)}</h1>
      <h1>Batches: {add(1, 2)}</h1>
      {/* {Student("Kumaravel")} */}
      {/* <Student
        name={data[0].name}
        image={data[0].image}
        id={data[0].id}
        age={data[0].age}
      />
      <Student
        name={data[1].name}
        image={data[1].image}
        id={data[1].id}
        age={data[1].age}
      /> */}
      {/* {[
        <Student
          name={data[0].name}
          image={data[0].image}
          id={data[0].id}
          age={data[0].age}
          key={data[0].key}
        />,
        <Student
          name={data[1].name}
          image={data[1].image}
          id={data[1].id}
          age={data[1].age}
          key={data[1].key}
        />,
      ]} */}
      {/* {data.map((stu) => {
        return (
          <Student
            name={stu.name}
            age={stu.age}
            id={stu.id}
            image={stu.image}
            key={stu.id}
          />
        );
      })} */}
      {data.map((stu) => {
        return <Student {...stu} image={stu.imageUrl} key={stu.id} />;
      })}
    </>
  );
}

export default App;
