import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to hold the products in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the product to the cart with a quantity of 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId); // Remove product from cart
    },
    incrementProductCount: (state, action) => {
        const productId = action.payload;
        const product = state.items.find(item => item.id === productId);
        if(product){
            product.quantity += 1;
        }
    },
    decrementProductCount: (state, action) => {
        const productId = action.payload;
        const product = state.items.find(item => item.id === productId);
        if(product && product.quantity > 1){
            product.quantity -= 1;
        }
    },
    clearCart: state => {
      state.items = []; // Clear the entire cart
    },
  },
});

export const { addToCart, removeFromCart, incrementProductCount, decrementProductCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
