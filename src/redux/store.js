import { configureStore } from "@reduxjs/toolkit"; // Used to create Store
import authSlice from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;