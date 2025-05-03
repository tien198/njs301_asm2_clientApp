import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    hiddenClass: 'hidden',
    modalInfors: {},
    type: ""
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state) {
            state.hiddenClass = ''
        },
        setModalHidden(state, action) {
            state.hiddenClass = action.payload
        },
        setModalInfors(state, action) {
            state.modalInfors = action.payload
        },
        setModalType(state, action) {
            state.type = action.payload
        },
        reInitState(_, action) {
            return action.payload
        },
        resetState() {
            return initialState
        }
    }
})

export default modalSlice.reducer

export const { showModal, setModalHidden, setModalInfors, setModalType, reInitState, resetState } = modalSlice.actions