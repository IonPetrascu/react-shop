import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateUser = createAsyncThunk("users/updateUser", async (payload) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/users/${payload.id}`,
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${response.data.access_token}` },
      });

      return login.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};

const initialState = {
  currentUser: null,
  cart: [],
  isLoading: false,
  formType: "signup",
  showForm: false,
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
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, addCurrentUser);
    builder.addCase(loginUser.fulfilled, addCurrentUser);
    builder.addCase(updateUser.fulfilled, addCurrentUser);
  },
});

export const { addItemToCart, toggleForm, toggleFormType } = userSlice.actions;

export default userSlice.reducer;
