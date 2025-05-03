import { configureStore } from '@reduxjs/toolkit'

import searchedReducer from './slices/searchedHotels'
import authenReducer from './slices/authenSlice'
import modalReducer from './slices/modalSlice'

const store = configureStore({
    reducer: {
        searchedHotels: searchedReducer,
        authen: authenReducer,
        modal: modalReducer
    }
})

export default store