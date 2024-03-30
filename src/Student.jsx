import PropTypes from "prop-types";
// const Student = (name) => {
//   return name;
// };

const Student = ({ id, image, age, name }) => {
  console.log(image);

  if (id)
    return (
      <>
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
            }}
          >
            {name || "No Name"}
          </span>
        </h1>
        <h2>Id: {id || "No Id"}</h2>
        <h2>Age: {age || "--"}</h2>
      </>
    );

  return "";
};

Student.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  age: PropTypes.number,
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
