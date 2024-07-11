import { useParams } from 'react-router-dom';
import { products } from '../src/products';
import { Link } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>
    </div>
  );
};

export default ProductScreen;
