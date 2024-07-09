import { Row, Col } from "react-bootstrap";
import { products } from "../src/products";
import {Products} from '../components/Products'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} key={product.id}>
<Products product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
