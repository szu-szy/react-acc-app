import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./counterSlice";

// utworzenie store z appReducer
export const store = configureStore({
  reducer: { appReducer },
});

// utworzenie typu RootState naszej aplikacji
export type RootState = ReturnType<typeof store.getState>;
// utworzenie typu AppDispatch dla naszej aplikacji
export type AppDispatch = typeof store.dispatch;
