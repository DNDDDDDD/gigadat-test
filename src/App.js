import './App.css';
import WebApi from './api/web-api';
import { useEffect, useState } from 'react';
import { ProductsTable } from './components/Table';
import { getHeaders } from './helpers/getHeaders';
import './App.css';
import { Header } from './components/header/Header';

function App() {
  const [products, setProducts] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    WebApi.getProducts().then((data) => {
      const [dataHeaders = {}] = data;
      setProducts(data);
      setHeaders(getHeaders(Object.keys(dataHeaders)));
    });
  }, []);

  return (
    <div className="mainWrapper">
      <Header setProducts={setProducts} />
      <ProductsTable headers={headers} products={products} />
    </div>
  );
}

export default App;
