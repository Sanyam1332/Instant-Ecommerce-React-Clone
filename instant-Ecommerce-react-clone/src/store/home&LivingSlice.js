import { createSlice } from "@reduxjs/toolkit";

const homeLivingSlice = createSlice({
  name: "homeLiving",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const homeLivingActions = homeLivingSlice.actions;

export default homeLivingSlice;
