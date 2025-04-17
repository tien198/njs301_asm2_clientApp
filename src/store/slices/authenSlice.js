import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfor: {
        userId: '', userName: '', fullName: '', phoneNumber: '', email: '', isAdmin: false
    }
}

const authenSlice = createSlice({
    name: 'authen',
    initialState,
    reducers: {
        // payload = { userId:'', userName: '', fullName: '', phoneNumber: '', email: '', isAdmin: false }
        setAuthen(state, action) {
            state.userInfor = action.payload
        },
        resetAthen(state) {
            state.userInfor = initialState.userInfor
        }
    }
})

export default authenSlice.reducer

export const { setAuthen, resetAthen } = authenSlice.actions