import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddToCart(state, action) {
        const newItem = action.payload;
        const qty = newItem.quantity || 1;
      
        // Ensure that state.products is an array and find the item
        const existingItem = state.products?.find(item => item.id === newItem.id);
      
        if (existingItem) {
          // If the product exists, we mutate the product directly, without creating a new object.
          existingItem.quantity += qty;
          existingItem.totalPrice += newItem.price * qty;
        } else {
          // Otherwise, we push the new item directly into the products array
          state.products.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            quantity: qty,
            totalPrice: newItem.price * qty,
            image: newItem.image,
          });
        }
      
        // Update totalQuantity and totalPrice
        state.totalQuantity += qty;
        state.totalPrice += newItem.price * qty;
      }
      ,

    increaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.products.find(item => item.id === itemId);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.products.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      } else if (item && item.quantity === 1) {
        // Remove the item if quantity reaches 1 and we decrease
        state.products = state.products.filter(item => item.id !== itemId);
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },

    removeFromCart(state, action) {
      const itemId = action.payload;
      const item = state.products.find(item => item.id === itemId);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.totalPrice;
        state.products = state.products.filter(item => item.id !== itemId);
      }
    }
  }
});

export const { AddToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
