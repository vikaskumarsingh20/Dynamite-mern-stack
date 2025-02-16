import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const itemToRemove = state.cartItems.find((item) => item.id === itemId);
      if (itemToRemove.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      } else {
        itemToRemove.quantity -= 1;
      }
      state.totalQuantity -= 1;
      state.totalPrice -= itemToRemove.price;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
