import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api";
import globalReducer from "../state"

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);
