import { createStore } from "@reduxjs/toolkit";
import { useReducer } from "./reducer";

export const store = createStore(useReducer);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
