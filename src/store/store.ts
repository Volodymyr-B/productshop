import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./goods-slice/goods-slice";

export const store = configureStore({
  reducer: { goods: goodsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
