import { Row, Col } from "react-bootstrap";
import { products } from "../src/products"; // Ensure 'Products' is correctly imported

const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((i) => (
          <Col sm={12} md={6} lg={4} key={i.id}> {/* Add a unique key */}
            <h2>{i.name}</h2> {/* Use product.name */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
