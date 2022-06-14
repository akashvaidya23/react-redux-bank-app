import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "../src/features/bank/bankSlice";

export const store = configureStore({
  reducer: { bankSlice },
});
