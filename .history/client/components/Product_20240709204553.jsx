import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <>
      <h1>hht</h1>
      <Card className="my-3 py-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.img} variant="top" />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="h2">{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <p>${product.price}</p>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
