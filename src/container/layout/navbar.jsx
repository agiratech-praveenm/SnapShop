import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Icon, Paper, Badge, Box, Menu, MenuItem } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css';
import { useSelector, useDispatch} from 'react-redux';
import { clearCart } from '../../redux/cartSlice';




const NavBar = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedUserName, setLoggedUserName] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const loggedUserEmail = loggedUser.email;
    console.log('logged Mail:',loggedUserEmail)

    const goToLogin =()=>{
        navigate('/login');
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout=()=>{
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        let userEmail = loggedUser.email;
        // dispatch(clearCart(userEmail));
        localStorage.removeItem('loggedUser');
        navigate('/login');
    }

    const handleGoToCart=()=>{
        navigate('/mycart');
    }

    const handleHomepage=()=>{
        navigate('/homepage');
    }

    useEffect(()=> {
        
        if(loggedUser){
            setLoggedIn(true);
            setLoggedUserName(loggedUser.userName)
        }
    });

    const cartItems = useSelector(state => state.cart.items);
    const userCartItems = cartItems.filter(item => item.userEmail === loggedUserEmail);
    console.log('Usercart',userCartItems)
    const uniqueProductCount = userCartItems.length;

    return (
        <div>
          <AppBar style={{ position: "fixed", backgroundColor: "black" }}>
            <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex', justifyContent: "space-between" }}} style={{ marginLeft: "20px", marginRight: "0px" }}>
              <Box style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }} onClick={handleHomepage}>
                <img src='./Logo.png' alt="Logo" style={{ height: "25px", marginRight: "8px" }} />
                <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }}>
                  SnapShop
                </Typography>
              </Box>
      
              <Box style={{ display: 'flex', alignItems: 'center' }}>
      
                <Typography className="navelement" variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }} style={{ marginRight: "20px", cursor: "pointer" }} onClick={handleGoToCart}>
                   <Badge badgeContent={uniqueProductCount} color="secondary">
                        <ShoppingCartIcon/>
                   </Badge>
                </Typography>
      
                {loggedIn ? (
                  <div style={{ position: "relative" }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ display: { xs: 'none', md: 'block' }, color: 'orange', cursor: 'pointer' }}
                      style={{ marginRight: "20px" }}
                      onClick={handleClick} // Handle dropdown menu
                    >
                      {loggedUserName}
                    </Typography>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    >
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <Typography
                    variant="h6"
                    className="navelement"
                    component="div"
                    sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                    onClick={goToLogin}
                  >
                    Login
                  </Typography>
                )}
              </Box>
            </Toolbar>
          </AppBar>
        </div>
      );

};

export default NavBar;