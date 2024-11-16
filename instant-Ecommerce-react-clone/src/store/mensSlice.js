import { createSlice } from "@reduxjs/toolkit";

const mensSlice = createSlice({
  name: "mens",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const mensActions = mensSlice.actions;

export  default mensSlice;
