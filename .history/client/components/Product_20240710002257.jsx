/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

export const Product = ({ product }) => {
  // Check if product is defined
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>hht</h1>
      <Card className="my-3 py-3 rounded">
        <a href={`/product/${product._id}`}>
          {/* Uncomment this line if you have a valid image URL */}
          {/* <Card.Img src={product.Img} variant="top" /> */}
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text as="h3">{product.price}</Card.Text>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

// export default Product;
