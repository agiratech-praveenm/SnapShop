import React, {useReducer, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { setUser, selectUser } from '../../redux/userSlice';


const initialState = {
    userName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
};

const reducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE_FIELD':
            return {...state, [action.field]: action.value};
        default:
            return state;
    }
};

const defaultTheme = createTheme();

const SignUp=()=> {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector(selectUser);
  const [state, setDispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true); // Step 1


  const handleChange=(event)=>{
    const {name, value} = event.target;

    if (name === 'confirmPassword') {
      setPasswordMatch(value === state.password); // Step 2
    }

    setDispatch({type: 'CHANGE_FIELD', field: name,value});
  };

  const goToLogin=()=>{
    navigate('/login');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newUser = {
      userName: data.get('userName'),
      email: data.get('email'),
      address: data.get('address'),
      password: data.get('password')
    };

    const isEmailRegistered = user.some((existingUser) => existingUser.email === newUser.email);
    if (isEmailRegistered) {
      setError('Email is already registered');
      return; // Abort signup process
    }

    const updatedUserArray = [...user,newUser];
    dispatch(setUser(updatedUserArray));

    navigate('/login');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{backgroundColor: "#ff8c00"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="username"
                  autoFocus
                  value={state.userName}
                  onChange={handleChange}
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={state.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Shipping Address"
                  name="address"
                  autoComplete="address"
                  value={state.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={state.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={state.confirmPassword}
                  onChange={handleChange} 
                  error={!passwordMatch} // Step 3: Add error prop
                  helperText={!passwordMatch && 'Passwords do not match'} 
                />
              </Grid>
              
            </Grid>
            {
              error ? <p style={{marginLeft: '95px', marginBottom:'0', color:'red'}}>{error}</p> : <></>
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:"#ff8c00"}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2" onClick={goToLogin} style={{cursor:"pointer",color:"#ff8c00"}}>
                  Already have an account? Login
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;