import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./slices/UserApi";
import userReducer from "./slices/UserSlice";
import { serviceApi } from "./slices/ServiceApi";
import { OrderApi } from "./slices/OrderSlices";
import { reviewApi } from "./slices/ReviewApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [OrderApi.reducerPath]:OrderApi.reducer,
    [reviewApi.reducerPath]:reviewApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, serviceApi.middleware,OrderApi.middleware,reviewApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
