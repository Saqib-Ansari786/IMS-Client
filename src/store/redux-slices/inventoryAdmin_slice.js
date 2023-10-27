import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventoryAdmin: null,
};

const inventoryAdminSlice = createSlice({
  name: "inventoryAdmin",
  initialState,
  reducers: {
    setInventoryAdmin: (state, action) => {
      state.inventoryAdmin = action.payload;
    },
  },
});

export const { setInventoryAdmin } = inventoryAdminSlice.actions;

export const selectInventoryAdmin = (state) =>
  state.inventoryAdmin.inventoryAdmin;

export default inventoryAdminSlice.reducer;
