import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { removeFromCart, incrementProductCount, decrementProductCount } from '../../redux/cartSlice'; // Import your cartSlice actions

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleIncrement = (productId) => {
    dispatch(incrementProductCount(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementProductCount(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h1 style={{ marginTop: "90px", marginLeft: "10px" }}>My Cart</h1>
      {((cartItems && cartItems.length) === 0) ? (
        <h1 style={{marginLeft:'500px', color:'red'}}>Your cart is empty</h1>   
      ) : (
        <Container style={{ padding: "10px", marginTop: "80px" }}>
          <Grid container spacing={2}>
            {cartItems?.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card className="card">
                  <CardContent>
                    <Typography style={{fontStyle:"italic", fontSize:"20px"}}>
                        {product.productName}
                    </Typography>
                    <Typography style={{fontStyle:"italic", fontSize:"20px"}}>
                       &#8377; {product.price}
                    </Typography>
                    
                    <Typography style={{ fontStyle: "italic", fontSize: "13px" }}>
                      Quantity:
                      <Button onClick={() => handleDecrement(product.id)}>-</Button>
                      {product.quantity}
                      <Button onClick={() => handleIncrement(product.id)}>+</Button>
                    </Typography>
                    <Button variant="outlined" onClick={() => handleRemove(product.id)}>Remove</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default CartPage;
