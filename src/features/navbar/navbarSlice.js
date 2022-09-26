import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isFoodSidebarOpen: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleFoodSidebar: (state) => {
      state.isFoodSidebarOpen = !state.isFoodSidebarOpen;
    },
  },
});

export const { toggleSidebar, toggleFoodSidebar, toggleFoodSidebarButton } =
  navbarSlice.actions;

export default navbarSlice.reducer;
