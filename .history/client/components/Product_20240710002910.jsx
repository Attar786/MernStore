/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

export const Product = ({ product }) => {
  // Check if product is defined
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>   
      <Card className="my-3 py-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
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
