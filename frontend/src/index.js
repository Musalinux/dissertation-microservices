import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, TextField, Button } from '@material-ui/core';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [user, setUser] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://ALB-1093928761.us-east-1.elb.amazonaws.com:5000/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(err => console.error('Error fetching products:', err));

    axios.get('http://ALB-1093928761.us-east-1.elb.amazonaws.com:5005/users/1')
      .then(response => setUser(response.data))
      .catch(err => console.error('Error fetching user:', err));
  }, []);

  const handleSearch = () => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <Typography variant="h2">My first microservice app</Typography>
      <Typography paragraph>
        This application utilizes React, Material-UI, and AWS microservices including ECS, ALB, and more. <a href="https://github.com/Musalinux/dissertation-microservices" target="_blank" rel="noopener noreferrer">Github Source Code</a>.
      </Typography>
      <Typography paragraph>
        This simple web-app has 3 microservices - Frontend, user service, and product service.
      </Typography>
      <Typography variant="h4">Welcome, {user.name || "Loading..."}</Typography>
      <TextField
        label="Search for products"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: 10, width: '300px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <Grid container spacing={4} style={{ marginTop: 20 }}>
        {filteredProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  style={{ height: 140, objectFit: 'cover' }} // CSS properties for better image fit
                  image={product.image}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.description || "No description available."}
                  </Typography>
                  <Typography variant="body1">
                    ${product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
