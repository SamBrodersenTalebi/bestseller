import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './Product';

export default function ProductListing({ products }) {
  return (
    <Container>
      <Row>
        {products.map((product) => {
          const { id } = product;
          return <Product key={id} product={product} />;
        })}
      </Row>
    </Container>
  );
}
