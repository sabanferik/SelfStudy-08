import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    categories:[],
    brands: [],
    firms: [],
    products:[],
    purchases:[],
    sales:[],
    loading:false,
    error:false
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    firmsSuccess : (state, {payload}) => {
        state.loading = false;
        state.firms = payload;
    },
    brandsSuccess : (state, {payload}) => {
      state.loading = false;
      state.brands = payload;
  },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  firmsSuccess,
  brandsSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
