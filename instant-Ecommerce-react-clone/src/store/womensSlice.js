import { createSlice } from "@reduxjs/toolkit";

const womensSlice = createSlice({
  name: "womens",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const womensActions = womensSlice.actions;

export  default womensSlice;
