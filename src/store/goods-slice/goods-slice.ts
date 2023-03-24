import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGoods } from "./../../types/IGoods";

interface GoodsSlice {
  goods: IGoods[] | null;
  isLoading: boolean;
  error: null | string;
}

const initialState: GoodsSlice = {
  goods: null,
  isLoading: false,
  error: null,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    goodsFetching(state) {
      state.isLoading = true;
      state.error = null;
    },
    goodsFetchingSuccess(state, action: PayloadAction<IGoods[]>) {
      state.goods = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    goodsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { goodsFetching, goodsFetchingSuccess, goodsFetchingError } =
  goodsSlice.actions;

export default goodsSlice.reducer;
