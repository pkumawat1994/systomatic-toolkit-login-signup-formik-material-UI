import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AdminCrudSlice from "./AdminCrudSlice";
import AuthSlice from "./AuthSlice";

const reducer = combineReducers({
  AuthSlice: AuthSlice,
  AdminCrudSlice: AdminCrudSlice,
});

export const store = configureStore({
  reducer,
});
