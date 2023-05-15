import { createSlice } from "@reduxjs/toolkit";
import { AdminCrud } from ".";

const AdminCrudSlice = createSlice({
  name: "AdminCrudSlice",
  initialState: {
    loading: false,
    error: "",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AdminCrud.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(AdminCrud.fulfilled, (state, action) => {
        // console.log("admin-fulfiled", action?.payload?.data);
        state.loading = false;
        state.data = action.payload?.data;
      })
      .addCase(AdminCrud.rejected, (state, error) => {
        console.log("admin-rejected", error);
        state.error = error?.payload;
      });
  },
});
export default AdminCrudSlice.reducer;
