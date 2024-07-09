import { CardBody ,CardText , CardTitle } from "react-bootstrap"
import {Card} from "react-bootstrap;"

const Product = ( { product }) => {
  return (
<Card className="my-3 py-3 rounded">
  <a href="{`/product/$/{product._id}`}"> 
  <Card.Img src={product.image} variant="top" />
</a>
<CardBody>
  <a href="{`/product/$/{product._id}`}">
    <CardTitle as={"h5"}>{product.name}</CardTitle>
  </a>
  <CardText as="h3 "></CardText>
</CardBody>
</Card>


  )
}

export default Product