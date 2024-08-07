import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="h5">{product.name}</Card.Title>
        </a>
        <Card.Text as="h3">{/* Add your content here */}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
