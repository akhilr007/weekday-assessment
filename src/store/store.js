import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../slices/filterSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});

export default store;
