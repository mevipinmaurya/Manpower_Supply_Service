import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice.js"
import blogsReducer from "./blogsSlice.js"

const store = configureStore({
  reducer: {
    services: servicesReducer,
    blogs : blogsReducer
  }
})

export default store;