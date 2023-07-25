import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Icon, Paper, Box, Menu } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';



const NavBar = () => {

    const [loggedIn, setLoggedIn] = useState(false);

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
                        <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }} style={{marginRight:"20px"}}>
                        Pricing
                        </Typography>

                        <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }} style={{marginRight:"20px"}}>
                        Cart
                        </Typography>

                        {
                            loggedIn ?
                            <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }} style={{marginRight:"20px"}}>
                                Username
                            </Typography>
                            :
                            <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: 'white' }} style={{marginRight:"20px"}}>
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