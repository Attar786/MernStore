/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Product = ({ product }) => {
  // Check if product is defined
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>   
      <Card className="my-3 py-3 rounded">
        <Link href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
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
