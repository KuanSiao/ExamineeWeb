import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./slice/LayoutSlice.js";
import colorReducer from "./slice/ColorSlice.js";

export const Store=configureStore({
  reducer:{
    layoutTodos:layoutReducer,
    colorFulTodo:colorReducer,
  }
});