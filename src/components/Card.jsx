import PropTypes from "prop-types";

const Card = (props) => {
  if (props.type === "image") {
    return <img src={props.image} alt={props.title} />;
  }
  if (props.type === "description") {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    );
  }
  return <></>;
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
