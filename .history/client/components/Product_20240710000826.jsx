/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
export const Product = ({pr}) => {
  return ( 
<>

    <h1>hht</h1>
    <Card className="my-3 py-3 rounded">
      <a href="{`/product/${pr._id}`}">
<Card.Img src={pr.Img} variant="top"/>
      </a>
      <Card.Body>
      <a href="{`/product/${pr._id}`}">
        <Card.Title as= "div">
          <strong>{pr.name}</strong>
        </Card.Title>
        <Card.Text as='h3'>{pr.price}</Card.Text>
       
      </a>

      </Card.Body>
    </Card>
    </>
    
  );
};

// export default Product;
