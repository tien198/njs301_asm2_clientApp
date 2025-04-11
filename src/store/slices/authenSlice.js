import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfor: {
        userName: '', fullName: '', phoneNumber: '', email: '', isAdmin: false
    }
}

const authenSlice = createSlice({
    name: 'authen',
    initialState,
    reducers: {
        // payload = { userName: '', fullName: '', phoneNumber: '', email: '', isAdmin: false }
        setAuthen(state, action) {
            state.userInfor = action.payload
        },
        resetAthen(state) {
            state.userInfor = initialState.userInfor
        }
    }
})

export default authenSlice.reducer

export const authenActions = authenSlice.actions