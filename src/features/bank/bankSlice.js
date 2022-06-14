import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 2500701,
};

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    decrementby5: (state) => {
      state.value -= 5000;
    },
    decrementby10: (state) => {
      state.value -= 10000;
    },
  },
});

export const { decrementby5, decrementby10 } = bankSlice.actions;

export default bankSlice.reducer;
