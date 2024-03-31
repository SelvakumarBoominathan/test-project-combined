import PropTypes from "prop-types";
// const Student = (name) => {
//   return name;
// };

const Student = ({ id, image, age, name, isSenior }) => {
  console.log(image);

  if (id) {
    return (
      <div>
        <img
          alt={name || "No Name"}
          src={
            image ||
            "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
          }
        />
        <br />
        <h1>
          Name:{" "}
          <span
            style={{
              color: "green",
              borderWidth: "3px",
              borderColor: "yellow",
              borderStyle: "solid",
            }}
          >
            {name || "No Name"}
          </span>
        </h1>
        <h2>Id: {id || "No Id"}</h2>
        <h2>Age: {age || "--"}</h2>
        {/* {isSenior && <i className="fa-solid fa-star"></i>} */}
        {isSenior ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-solid fa-heart"></i>
        )}
        {/* <label htmlFor="name">Name</label>
        <input type="text" id="name" /> */}
      </div>
    );
  }

  return <></>;
};

Student.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  age: PropTypes.number,
  isSenior: PropTypes.bool,
};

// const Student = (props) => {
//   return (
//     <h1>
//       Name:{" "}
//       <span
//         style={{
//           color: "green",
//         }}
//       >
//         {props.name}
//       </span>
//     </h1>
//   );
// };

export default Student;
