import { Card } from "react-bootstrap"
const Products = (i) => {
  return (
    <Card className="py-3 mt-3 rounded">
<a href="{`/products/${i._id}`}"></a>
<Card.Img  src="{i.image}" variant="top"/>
    </Card>
  )
}

export default Products