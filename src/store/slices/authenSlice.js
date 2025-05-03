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
        resetAuthen() {
            return initialState
        }
    }
})

export default authenSlice.reducer

export const { setAuthen, resetAuthen } = authenSlice.actions