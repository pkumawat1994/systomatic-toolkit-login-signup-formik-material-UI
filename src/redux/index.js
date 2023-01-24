import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../utils/instance";

//REGISTER->

export const AuthRegister = createAsyncThunk(
  "AuthReducer/AuthRegister",
  async (data, { rejectWithValue }) => {
    try {
      const register_response = await instance.post("/register", data);
      // console.log("resppnse_Api", register_response?.data);
      return register_response;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);
//LOGIN--->
export const AuthLogin = createAsyncThunk(
  "AuthReducer/AuthLogin",
  async (data, { rejectWithValue }) => {
    try {
      const login_response = await instance.post("/login", data);
      // console.log(33, login_response);
      if (login_response.status === 200) {
        return login_response?.data;
      }
      console.log(login_response);
    } catch (err) {
      // console.log(err);
      return rejectWithValue(err?.response?.data?.msg);
    }
  }
);
