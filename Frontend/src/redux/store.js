import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice.js"
import blogsReducer from "./blogsSlice.js"
import userReducer from "./userSlice.js"

const store = configureStore({
  reducer: {
    services: servicesReducer,
    blogs : blogsReducer,
    user : userReducer,
  }
})

export default store;