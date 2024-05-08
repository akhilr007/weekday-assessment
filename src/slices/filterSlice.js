import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minExperience: "",
  companyName: "",
  location: "",
  remote: "",
  techStack: "",
  role: "",
  minBasePay: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMinExperience: (state, action) => {
      state.minExperience = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setRemote: (state, action) => {
      state.remote = action.payload;
    },
    setTechStack: (state, action) => {
      state.techStack = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
    },
  },
});

export const {
  setMinExperience,
  setCompanyName,
  setLocation,
  setRemote,
  setTechStack,
  setRole,
  setMinBasePay,
} = filtersSlice.actions;

export default filtersSlice.reducer;
