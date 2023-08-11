import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || [], // Array to hold the products in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, userEmail } = action.payload;
      const existingItem = state.items.find(item => item?.id === product?.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1, userEmail });
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const { productId, userEmail } = action.payload;
      state.items = state.items.filter(item => item?.id !== productId && item?.userEmail === userEmail);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    incrementProductCount: (state, action) => {
        const { productId, userEmail } = action.payload;
        const product = state.items.find(item => item?.id === productId && item?.userEmail === userEmail);
        if (product) {
            product.quantity += 1;
        }
        localStorage.setItem('cart', JSON.stringify(state.items));
    },
    decrementProductCount: (state, action) => {
        const { productId, userEmail } = action.payload;
        const product = state.items.find(item => item?.id === productId && item?.userEmail === userEmail);
        if (product && product.quantity > 1) {
            product.quantity -= 1;
        }
        localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state, action) => {
      const { userEmail } = action.payload;
      state.items = state.items.filter(item => item?.userEmail !== userEmail);
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, incrementProductCount, decrementProductCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
