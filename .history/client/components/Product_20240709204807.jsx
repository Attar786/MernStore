import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

export const Product = ({ product }) => {
  return ( 
<>

    <h1>hht</h1>
    <Card className="my-3 py-3 rounded">
      <a href="{`/product/${product._id}`}">
<Card.Img src={product.Img} variant="top"/>
      </a>
      <Card.Body>
      <a href="{`/product/${product._id}`}">
        <Card.Title as={"h2"}>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <p>${product.price}</p>
      </a>

      </Card.Body>
    </Card>
    </>
    
  );
};

// export default Product;
