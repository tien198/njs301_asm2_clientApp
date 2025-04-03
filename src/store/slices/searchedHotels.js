import { createSlice } from '@reduxjs/toolkit'

const initialState = { total: 0, result: [] }
const searchedSlice = createSlice({
    name: 'searched',
    initialState,
    reducers: {
        // payload= { total: Number, result: Hotels[] }
        setSearched(state, action) {
            state = action.payload
        }
    }
})

export default searchedSlice.reducer

export const searchedAction = searchedSlice.actions