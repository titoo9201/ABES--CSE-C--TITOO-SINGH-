import React, { useEffect, useState } from 'react';
import Fashion from './components/Fashion';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <div className="fashion-container">
      {products.map((item, i) => (
        <Fashion
          key={i}
          title={item.title}
          price={`${item.price}`}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default App;