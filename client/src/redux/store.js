// client/src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./state"; // this is your combined reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
