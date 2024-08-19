import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [userServiceResponse, setUserServiceResponse] = useState('');
  const [productServiceResponse, setProductServiceResponse] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001').then(response => {
      setUserServiceResponse(response.data);
    });
    axios.get('http://localhost:5002').then(response => {
      setProductServiceResponse(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>User Service Response: {userServiceResponse}</p>
        <p>Product Service Response: {productServiceResponse}</p>
      </header>
    </div>
  );
}

export default App;
