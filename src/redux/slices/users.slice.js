import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserApi = createAsyncThunk(
  "users/getUser",
  (arg, { dispatch }) => {
    try {
      axios
        .get("http://localhost:3002/users")
        .then((response) => {
          dispatch(getUserApi.fulfilled(response.data));
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const setUserApi = createAsyncThunk("users/setUser", (arg) => {
  try {
    axios
      .post("http://localhost:3002/users", arg)
      .then(() => {})
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log(error.message);
  }
});

export const editUser = createAsyncThunk("users/editUser", (arg) => {
  try {
    axios
      .put(`http://localhost:3002/users/${arg.id}`, arg)
      .then(() => {})
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", (arg) => {
  try {
    axios
      .delete(`http://localhost:3002/users/${arg.id}`)
      .then(() => {})
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log(error.message);
  }
});

export const userApi = createSlice({
  name: "users",
  initialState: {
    users: [],
    search: [],
  },
  reducers: {
    searchUser: (state, action) => {
      const filteredData = state.users
        .filter(
          (d) =>
            d.id.toString().includes(action.payload) ||
            d.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            d.username.toLowerCase().includes(action.payload.toLowerCase()) ||
            d.email.toLowerCase().includes(action.payload.toLowerCase()) ||
            d.phone.includes(action.payload) ||
            d.address.toLowerCase().includes(action.payload.toLowerCase()) ||
            d.company.toLowerCase().includes(action.payload.toLowerCase())
        );
      state.search = filteredData;
    },
  },
  extraReducers: {
    [getUserApi.pending]: () => {
      console.log("pending");
    },
    [getUserApi.fulfilled]: (state, action) => {
      action.payload === undefined
        ? console.log("undefined")
        : (state.users = action.payload);
    },
  },
});

export const { searchUser } = userApi.actions;
export default userApi.reducer;