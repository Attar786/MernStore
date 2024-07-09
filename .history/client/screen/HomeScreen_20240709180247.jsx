import { Row, Col } from "react-bootstrap";
import { products } from "../products"; // Ensure 'Products' is correctly imported

const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} key={product.id}> {/* Add a unique key */}
            <h2>{product.name}</h2> {/* Use product.name */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
