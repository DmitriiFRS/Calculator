import { configureStore } from "@reduxjs/toolkit";
import calcReducer from './calcSlice';

const store = configureStore({
   reducer: {
      calcReducer
   }
})
export type RootState = ReturnType<typeof store.getState>;
export default store;