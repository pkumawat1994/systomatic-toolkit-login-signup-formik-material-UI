import { createSlice } from "@reduxjs/toolkit";
import { AuthLogin, AuthRegister } from ".";
// Reducer -Opretaion  -->

const AuthSlice = createSlice({
  name: "AuthReducer",
  initialState: {
    token: "",
    loading: false,
    error: "",
    successMessage: "",
    LoginSuccess: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // REGISTER --------------------->
      .addCase(AuthRegister.pending, (state) => {
        state.successMessage = "";
        state.error = "";
        state.loading = true;
      })
      .addCase(AuthRegister.fulfilled, (state, action) => {
        console.log("fullfillll", action);
        state.successMessage = action.payload.data.message;
        state.error = "";
      })
      .addCase(AuthRegister.rejected, (state, error) => {
        console.log(error);
        state.successMessage = "";
        state.error = error?.payload;
      })

      //LOGIN-------------------->

      .addCase(AuthLogin.pending, (state) => {
        state.loading = "true";
      })
      .addCase(AuthLogin.fulfilled, (state, action) => {
        console.log(11, action?.payload?.token);
        localStorage.setItem("userToken", action?.payload?.token);
        state.token = action?.payload?.token;
        state.LoginSuccess = action?.payload;
        state.error = "";
      })
      .addCase(AuthLogin.rejected, (state, error) => {
        // console.log("rejected", error);
        state.LoginSuccess = "";
        state.error = error?.payload;
      });
  },
});
export default AuthSlice.reducer;
