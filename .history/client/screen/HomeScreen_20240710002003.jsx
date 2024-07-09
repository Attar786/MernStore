import { Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";
import { products } from "../src/products";
export const HomeScreen = () => {
  return (
    <> 
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} >
<Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

// export default HomeScreen;
