import { createSlice } from '@reduxjs/toolkit'

const initialState = { total: 0, results: [] }
const searchedSlice = createSlice({
    name: 'searched',
    initialState,
    reducers: {
        // payload = { total: Number, res: Hotels[] }
        setSearched(state, action) {
            state.results = action.payload.res
        }
    }
})

export default searchedSlice.reducer

export const { setSearched } = searchedSlice.actions
