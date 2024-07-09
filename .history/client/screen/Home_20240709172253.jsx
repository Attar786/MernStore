import { Row , Col } from "react-bootstrap";
import products from "../src/product";
const Home = () => {
  return (
    <>
    <h1>
        Leatest products
        </h1>
        
        <Row >
            {products.map((product) => (
                <Col sm={12} md={6} lg={4}>

<h2>{product.name}</h2>

                </Col>
            
            )}
            </Row>
            
            </>
  )
}

export default Home