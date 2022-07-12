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

export const setUserApi = createAsyncThunk(
  "users/setUser",
  (arg, { dispatch }) => {
    try {
      axios
        .post("http://localhost:3002/users", arg)
        .then((response) => {})
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  (arg, { dispatch }) => {
    try {
      axios
        .put(`http://localhost:3002/users/${arg.id}`, arg)
        .then((response) => {})
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  (arg, { dispatch }) => {
    try {
      axios
        .delete(`http://localhost:3002/users/${arg.id}`)
        .then((response) => {})
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const userApi = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: {
    [getUserApi.pending]: (state, action) => {
      console.log("pending");
    },
    [getUserApi.fulfilled]: (state, action) => {
      action.payload === undefined
        ? console.log("undefined")
        : (state.users = action.payload);
    }
  },
});

export default userApi.reducer;
