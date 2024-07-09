import { Row, Col } from "react-bootstrap";
import { products } from "../src/products";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} key={i.id}>
            <h2>{product.name}</h2> {/* Use product.name */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
