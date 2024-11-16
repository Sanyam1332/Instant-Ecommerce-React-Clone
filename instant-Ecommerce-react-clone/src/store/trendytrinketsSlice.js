import { createSlice } from "@reduxjs/toolkit";

const trendytrinketsSlice = createSlice({
  name: "trendytrinkets",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const trendytrinketsActions = trendytrinketsSlice.actions;

export default trendytrinketsSlice;
