import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="py-3 mt-3 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
