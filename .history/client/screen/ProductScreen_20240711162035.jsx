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
    <Row>

<Col md={5}>
    <Image className='rounded' src={product.image} alt={product.name} fluid />
</Col>
<Col md={4}>
    <ListGroup>
        <ListGroup.Item>
            <h3>
                {product.name}
            </h3>
        </ListGroup.Item>
    </ListGroup>
</Col>
<Col md={3}>
</Col>

    </Row>
    
    </div>
  );
};

export default ProductScreen;
