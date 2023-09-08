import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    test: counterReducer
  },
})
