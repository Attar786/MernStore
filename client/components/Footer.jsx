import { Container , Row , Col} from "react-bootstrap"
const Footer = () => {

const CurrentYear = new Date().getFullYear();

  return (
    <footer>
<Container>
  <Row>
    <Col className="text-center py-3">
      <p>Pro @{CurrentYear}</p>
     
     
    </Col>
  </Row>
 
</Container>


    </footer> 
  )
}

export default Footer