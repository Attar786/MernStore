import { Card } from "react-bootstrap";

export const Product = ({ product }) => {
  return (
<>

    <h1>hht</h1>
    <Card className="my-3 py-3 rounded">
      <a href="{`/product/${product.id}`}">
<Card.Img src={product.Img}></Card.Img>

      </a>
    </Card>
    </>
    
  );
};

// export default Product;
