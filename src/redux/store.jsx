// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productSlice from "./ProductSlice";
import orderSlice from "./OrderSlice"; // Import your order slice (if you have one)

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from "redux";

// Combine reducers
const rootReducer = combineReducers({
  cart: cartSlice,
  product: productSlice,
  order: orderSlice, // Add order slice here

});

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', "product", "order"], // only cart will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);
