import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user information
    axios.get('http://user-service:5001/users/1')
      .then(response => setUser(response.data))
      .catch(err => console.error('Error fetching user:', err));

    // Fetch products
    axios.get('http://product-service:5002/products')
      .then(response => setProducts(response.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name || "Loading..."}</p>
      <p>Email: {user.email || "Loading..."}</p>

      <h1>Products</h1>
      {products.length ? products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      )) : "Loading products..."}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

