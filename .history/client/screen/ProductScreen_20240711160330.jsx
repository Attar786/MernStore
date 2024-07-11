import { useParams } from "react-router-dom"
import { products } from "../src/products"
const ProductScreen = () => {
    const { id: productId } = useParams();
    const product  =  products.find((p)=> p.id === productId);
    console.log(product);
  
    return (
    <div>ProductScreen</div>
  )
}

export default ProductScreen