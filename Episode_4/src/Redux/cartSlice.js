import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Add item to the cart or increase its quantity if it already exists
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.card.info.id === item.card.info.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item exists
      } else {
        state.items.push({ ...item, quantity: 1 }); // Add new item with quantity 1
      }
    },

    // Remove item from the cart or decrease its quantity if it's more than 1
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (i) => i.card.info.id === itemId
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity if more than 1
        } else {
          // Remove item if quantity is 1
          state.items = state.items.filter(
            (i) => i.card.info.id !== itemId
          );
        }
      }
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = []; // Clear all items from the cart
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;