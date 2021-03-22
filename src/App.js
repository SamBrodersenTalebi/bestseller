import { Jumbotron, Button } from 'react-bootstrap';
import data from './data/data.json';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import { useState } from 'react';
import allOptions from './data/dataManipulation';
import Select from 'react-select';
import { findCommonElements } from './services/helperFunction';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const { products } = data;

function App() {
  const [sort, setSort] = useState(products);
  const [filter, setFilter] = useState([]);
  const match = useRouteMatch('/:id');
  const product = match
    ? products.find((product) => product.id === Number(match.params.id))
    : null;

  const handleOnChange = (value, { action }) => {
    if (action === 'remove-value') {
      const newState = value.map((item) => item.value);
      setFilter(newState);
    }
    if (action === 'select-option') {
      const category = value[value.length - 1].value;
      const newState = [...filter, category];
      setFilter(newState);
    }
  };

  const filterProducts = () => {
    if (filter.length === 0) {
      setSort(products);
    } else {
      const sortedProducts = products.filter((item) => {
        const { categories } = item;
        if (findCommonElements(categories, filter)) {
          return item;
        }
      });
      setSort(sortedProducts);
    }
  };

  return (
    <Switch>
      <Route path='/' exact>
        <Jumbotron style={{ textAlign: 'center' }}>
          <h1>Bestseller Clothing</h1>
          <div>
            <div style={{ width: '350px', margin: 'auto' }}>
              <Select
                isMulti
                name='clothingOptions'
                options={allOptions}
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={handleOnChange}
              />
            </div>
            <Button
              onClick={filterProducts}
              style={{
                marginTop: '20px',
              }}
            >
              Search
            </Button>
          </div>
          <ProductListing products={sort} />
        </Jumbotron>
      </Route>
      <Route path='/:id'>
        <ProductDetails product={product} />
      </Route>
    </Switch>
  );
}

export default App;
