import { configureStore } from "@reduxjs/toolkit";
import { prediosSlice } from "./prediosSlice";
export const store = configureStore({
  reducer: {
    predios: prediosSlice.reducer,
  },
});
