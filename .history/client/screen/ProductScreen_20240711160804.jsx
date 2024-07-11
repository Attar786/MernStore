import { useParams } from 'react-router-dom';
import { products } from '../src/products';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
  );
};

export default ProductScreen;
