import {Card} from "react-bootstrap;"

const Product = ( { product }) => {
  return (
<Card className="my-3 py-3 rounded">
  <a href="{`/product/$/{product._id}`}"> 
  <Card.Img src={product.image} variant="top" />

</Card>


  )
}

export default Product