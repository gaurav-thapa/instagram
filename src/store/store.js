import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./userSlice";

export const appStore = configureStore({
  reducer: { userSlice: userSliceReducer },
});
