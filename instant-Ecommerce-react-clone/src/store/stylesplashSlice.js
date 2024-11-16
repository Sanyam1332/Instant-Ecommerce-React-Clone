import { createSlice } from "@reduxjs/toolkit";

const stylesplashSlice = createSlice({
  name: "stylesplash",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const stylesplashActions = stylesplashSlice.actions;

export default stylesplashSlice;
