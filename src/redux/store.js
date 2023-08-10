import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

const storedUser = JSON.parse(localStorage.getItem('user'))||[];

const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer,
    },
    preloadedState:{
        user: storedUser,
    },
});

export default store;