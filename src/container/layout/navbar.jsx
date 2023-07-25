import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Icon, Paper, Box, Menu } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import './navbar.css';




const NavBar = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const goToLogin =()=>{
        navigate('/login');
    }

    return (
        <div>
            <AppBar style={{ position: "fixed", backgroundColor: "black" }}>
                <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex', justifyContent:"space-between" }}} style={{marginLeft:"20px", marginRight:"0px"}}>
                    <Box style={{ display: 'flex', alignItems: 'center'}}>
                        <img src='./Logo.png' alt="Logo" style={{ height: "25px", marginRight: "8px" }} />
                        <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }}>
                        SnapShop
                        </Typography>
                    </Box>

                    <Box style={{ display: 'flex', alignItems: 'center'}}>

                        <Typography className="navelement" variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }} style={{marginRight:"20px", cursor: "pointer"}}>
                        Cart
                        </Typography>

                        {
                            loggedIn ?
                            <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }} style={{marginRight:"20px"}}>
                                Username
                            </Typography>
                            :
                            
                            <Typography variant="h6" className="navelement" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }} style={{marginRight:"20px",cursor: "pointer"}} onClick={goToLogin}>
                                Login
                            </Typography>
                            
                        }
                        
                    </Box> 
                </Toolbar>
            </AppBar>
        </div>
    )

};

export default NavBar;