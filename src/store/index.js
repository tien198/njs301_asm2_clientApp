import { configureStore } from '@reduxjs/toolkit'

import searchedReducer from './slices/searchedHotels'

const store = configureStore({
    reducer: {
        searchedHotels: searchedReducer
    }
})

export default store