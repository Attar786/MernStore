import { Container , Row , Col} from "react-bootstrap"
const Footer = () => {

const currentyear = new Date().getFullYear();

  return (
    <footer>
<Container>
  <Row>
    <Col>
      &copy; {currentyear} Mern Store
    </Col>
    <Col>
      <FaShoppingCart /> Shopping Cart
    </Col>
    <Col>
      <FaUser /> My Account
    </Col>
  </Row>
 
</Container>


    </footer> 
  )
}

export default Footer