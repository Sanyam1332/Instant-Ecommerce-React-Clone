import { createSlice } from "@reduxjs/toolkit";

const urbannestSlice = createSlice({
  name: "urbannest",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const urbannestActions = urbannestSlice.actions;

export default urbannestSlice;
