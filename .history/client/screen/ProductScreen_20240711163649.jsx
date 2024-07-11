import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../src/products';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Row className='mt-5'>
        <Col md={5}>
          <Image className='rounded-5' src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Price: {product.price}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <p><b>Description :</b> {product.description}</p>
        </Col>
        <Row>
            <Col>
            <strong>
{product.price}</strong>

                </Col>
            <ListGroup>
                <ListGroup.Item>

                </ListGroup.Item>
            </ListGroup>
        </Row>
      </Row>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>

    </>
  );
};

export default ProductScreen;
