import { configureStore } from '@reduxjs/toolkit'
import movieoReducer from './movieoSlice'
import searchQueryReducer from './searchQuerySlice'

export const store = configureStore({
  reducer: {
    movieoData : movieoReducer,
    searchQueryData : searchQueryReducer
  },
})