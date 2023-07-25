import React from 'react'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'
import { Box, Grid, Stack } from '@mui/material'

function Layout(){
    return (
        <Box>
            <NavBar/>
            <Outlet/>
        </Box>
    );
}

export default Layout;