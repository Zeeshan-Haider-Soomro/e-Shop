// redux/OrderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderNumber: null,
  shippingInformation: {},
  products: [],
  totalPrice: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.orderNumber = action.payload.orderNumber;
      state.shippingInformation = action.payload.shippingInformation;
      state.products = action.payload.products;
      state.totalPrice = action.payload.totalPrice;
    },
    clearOrder: (state) => {
      state.orderNumber = null;
      state.shippingInformation = {};
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
