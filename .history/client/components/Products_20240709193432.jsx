import { Card } from "react-bootstrap"
const Products = ({product}) => {
  return (
    <Card className="py-3 mt-3 rounded">
<a href="{`/products/${product._id}`}"></a>
<Card.Img  src="{product.image}" varian t="top"/>
    </Card>
  )
}

export default Products