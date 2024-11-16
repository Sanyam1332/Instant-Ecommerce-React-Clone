import { createSlice } from "@reduxjs/toolkit";

const beautySlice = createSlice({
  name: "beauty",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const beautyActions = beautySlice.actions;

export default beautySlice;
