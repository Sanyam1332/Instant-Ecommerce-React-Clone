import { createSlice } from "@reduxjs/toolkit";

const kidsSlice = createSlice({
  name: "kids",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const kidsActions = kidsSlice.actions;

export default kidsSlice;
