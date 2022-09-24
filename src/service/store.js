import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import passwordReducer from "../features/password/passwordSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    securePass: passwordReducer,
    user: userReducer,
  },
});

export default store;
