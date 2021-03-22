import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import inprogress from './images/progress.PNG';

export default function Product({ product }) {
  const history = useHistory();
  const {
    id,
    brand,
    images,
    price,
    name: { dk, en },
  } = product;
  const image = images ? images[0] : inprogress;
  return (
    <Col xs={6} md={4} style={{ marginTop: '20px' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src={image}
          alt='picture of clothing'
          style={{ height: '381.33px' }}
        />
        <Card.Body
          style={{
            height: '250px',
          }}
        >
          <Card.Title style={{ height: '70px' }}>{dk ? dk : en}</Card.Title>
          <Card.Text>
            <strong>Brand:</strong> {brand} <br />
            <strong>Price: </strong> {price} <br />
            <Button
              variant='primary'
              onClick={() => {
                history.push(`/${id}`);
              }}
            >
              View Details
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
