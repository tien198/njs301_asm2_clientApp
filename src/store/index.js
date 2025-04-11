import { configureStore } from '@reduxjs/toolkit'

import searchedReducer from './slices/searchedHotels'
import authenReducer from './slices/authenSlice'

const store = configureStore({
    reducer: {
        searchedHotels: searchedReducer,
        authen: authenReducer
    }
})

export default store