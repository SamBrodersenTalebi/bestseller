import React, { useEffect, useState } from 'react';
import { Container, Button, Carousel, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import inprogress from './images/progress.PNG';

export default function ProductDetails({ product }) {
  const history = useHistory();
  const [sizeInput, setSizeInput] = useState(null);
  const images = product.images ? product.images : [inprogress];

  const format = (array) => {
    const formated = array.reduce((all, current) => {
      return [...all, { value: current, label: current }];
    }, []);
    setSizeInput(formated);
  };

  const add = () => {
    //Check to see if a size is selected
  };

  useEffect(() => {
    format(product.size);
  }, []);

  if (product == null) {
    return (
      <div>
        <Spinner animation='border' role='status'></Spinner>
        <p>Product not found .....</p>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          Return to product listing
        </Button>
      </div>
    );
  }

  return (
    <Container style={{ textAlign: 'center' }}>
      <h1>{product.brand}</h1>
      <Carousel>
        {images.map((image, index) => {
          return (
            <Carousel.Item key={`${product.id}${index}`}>
              <img
                className='d-block w-100'
                src={image}
                alt='Clothing'
                style={{
                  height: '600px',
                  objectFit: 'contain',
                  width: '930px',
                }}
              />
              <Carousel.Caption>
                <h3
                  style={{
                    color: 'white',
                    backgroundColor: 'black',
                    width: '250px',
                    margin: 'auto',
                  }}
                >
                  {product.brand}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <h4>{product.dk ? product.dk : product.en}</h4>
      <p>
        <strong>price: </strong>
        {product.price}
      </p>
      <p style={{ width: '200px', margin: 'auto' }}>
        <strong> Select size</strong>
        <Select options={sizeInput} />
      </p>
      <Button onClick={add} style={{ marginTop: '20px' }}>
        Add To Bag
      </Button>
    </Container>
  );
}
