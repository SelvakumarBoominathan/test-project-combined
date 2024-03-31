import PropTypes from "prop-types";

import styles from "./Product.module.css";

// Product Component

const Product = ({ title, image, price, bestSeller, description }) => {
  return (
    <div className={styles["root"]}>
      <img src={image} alt={title} className={styles["prodImage"]} />
      <h2>{title}</h2>
      <h3>${price}</h3>
      {bestSeller && (
        <img
          src={
            "https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/best-seller-icon.png"
          }
          alt={title}
          className={styles["bestSeller"]}
        />
      )}
      <p>{description}</p>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number,
  bestSeller: PropTypes.bool,
  description: PropTypes.string,
};

export default Product;
