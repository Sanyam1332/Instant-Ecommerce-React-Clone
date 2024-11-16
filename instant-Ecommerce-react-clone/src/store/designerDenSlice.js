import { createSlice } from "@reduxjs/toolkit";

const designerDenSlice = createSlice({
  name: "designerDen",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const designerDenActions = designerDenSlice.actions;

export default designerDenSlice;
