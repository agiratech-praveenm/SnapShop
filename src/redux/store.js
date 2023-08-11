import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

const storedUser = JSON.parse(localStorage.getItem('user')) || [];

// Keep track of the number of open tabs
let openTabsCount = localStorage.getItem('openTabsCount') || 0;

// Update the count when a tab is opened or closed
window.addEventListener('load', () => {
  openTabsCount++;
  localStorage.setItem('openTabsCount', openTabsCount);
});

window.addEventListener('beforeunload', () => {
  openTabsCount--;
  localStorage.setItem('openTabsCount', openTabsCount);

  // Delay clearing data from localStorage if this is not the last tab
  if (openTabsCount > 0) {
    setTimeout(() => {
      if (openTabsCount === 0) {
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
      }
    }, 500); // Adjust the delay as needed
  }
});

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState: {
    user: storedUser,
  },
});

export default store;
