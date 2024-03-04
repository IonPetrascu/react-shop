import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

/* export const userSlice = createAsyncThunk(
  "categories/getProducts",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
); */

const initialState = {
  currentUser: [],
  cart: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);
      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });
      state.cart = newCart;
    },
  },
  extraReducers: (builder) => {
    /*    builder.addCase(userSlice.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userSlice.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(userSlice.rejected, (state) => {
      state.isLoading = false;
    }); */
  },
});

export const { addItemToCart } = userSlice.actions;

export default userSlice.reducer;
