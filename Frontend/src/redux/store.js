import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice.js"
import blogsReducer from "./blogsSlice.js"
import userReducer from "./userSlice.js"
import cartReducer from "./cartSlice.js"

const store = configureStore({
  reducer: {
    services: servicesReducer,
    blogs: blogsReducer,
    user: userReducer,
    cart: cartReducer,
  }
})

export default store;