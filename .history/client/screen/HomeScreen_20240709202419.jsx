import { Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";
import { products } from "../src/products";
const HomeScreen = () => {
  return (
    <> 
      <h1>Latest products</h1>
      <Row>
        {products.map((i) => (
          <Col key={i.id} sm={12} md={6} lg={4} >
<Product product={i}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
