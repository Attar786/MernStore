import { Row , Col } from "react-bootstrap";
import { Products } from "../src/products";
const Homesc = () => {
  return (
    <>
    <h1>
        Leatest products
        </h1>
        
        <Row >
            {products.map((product) => (
                <Col sm={12} md={6} lg={4}>

<h2>{products.name}</h2>
                </Col>            
            )}
            </Row>
            
            </>
  )
}

export default Homesc