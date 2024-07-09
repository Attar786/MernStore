import { CardBody } from "react-bootstrap"
import {Card} from "react-bootstrap;"

const Product = ( { product }) => {
  return (
<Card className="my-3 py-3 rounded">
  <a href="{`/product/$/{product._id}`}"> 
  <Card.Img src={product.image} variant="top" />
</a>
<CardBody>
  <a href={`/products/${product._id}`}>
    <Card.Title as="h5">{product.name}</Card.Title>
  </a>
  <Card.Text as="h6">{product.description.substring(0, 100)}...</Card.Text>
  <Card.Text>
    <strong>Price: ${product.price}</strong>
  </Card.Text>
  <Card.Text>
    <strong>Rating: {product.rating} / 5 ({product.numReviews} reviews)</strong>
  </Card.Text>
 
</CardBody>
</Card>


  )
}

export default Product