import { CardBody } from "react-bootstrap"
import {Card} from "react-bootstrap;"

const Product = ( { product }) => {
  return (
<Card className="my-3 py-3 rounded">
  <a href="{`/product/$/{product._id}`}"> 
  <Card.Img src={product.image} variant="top" />
</a>
<CardBody>
  <a href="{`/product/$/{product._id}`}">
    <Card.Title as={"h5"}>{product.name}</Card.Title>
  </a>
  <Card.Text as="h3"></Card.Text>
</CardBody>
</Card>


  )
}

export default Product