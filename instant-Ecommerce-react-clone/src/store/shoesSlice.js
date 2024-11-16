import { createSlice } from "@reduxjs/toolkit";

const shoesSlice = createSlice({
  name: "shoes",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const shoesActions = shoesSlice.actions;

export default shoesSlice;
