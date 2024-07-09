import { Card } from "react-bootstrap"
const Products = ({product}) => {
  return (
    <Card className="py-3 mt-3 rounded">
<a href="{`/products/${product._id}`}">
<Card.Img  src="{product .image}" varian t="top"/>
</a>
      <Card.Body>
        <a  href="{`/products/${product._id}`}">
            <Card.Title as={"div"}>{product.name}</Card.Title>
        </a>
      </Card.Body>
    </Card>
  )
}

export default Products