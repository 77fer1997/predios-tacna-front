import loginReducer from "./features/adminAuthSlice";
import usersReducer from "./features/usersSlice";
import vendedoresReducer from "./features/vendedoresSlice";
import prediosReducer from "./features/prediosSlice";
import predioImagesReducer from "./features/predioImagesSlice";
import predioVideosReducer from "./features/predioVideosSlice";
import productosReducer from "./features/productosSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    loginReducer,
    usersReducer,
    vendedoresReducer,
    prediosReducer,
    predioImagesReducer,
    predioVideosReducer,
    productosReducer,
  },
});
