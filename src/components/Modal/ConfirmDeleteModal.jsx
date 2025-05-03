import { useAppDispatch, useAppSelector } from "../../cusHooks/reduxHooks";
import Modal from "./Modal";
import { setModalHidden } from "../../store/slices/modalSlice";
import IDeleteConfirm from "../../models/interfaces/IDeleleteConfirm";
import Button from "../formLayout/Button";
import { deleteAction } from "../../pages/HotelManagement";


export default function ConfirmDeleteModal() {
    const deleteConfirmInfor = useAppSelector(state => state.modal.modalInfors) as IDeleteConfirm

    return (
        <Modal>
            <div className="w-full p-10 shadow flex flex-col items-center justify-center gap-7">
                <span className="text-lg font-bold">Do you confirm?</span>
                <span>{deleteConfirmInfor?.confirmMsg}</span>
                <ModalAction  />
            </div>
        </Modal>
    )
}


function ModalAction() {
    const dispatch = useAppDispatch()
    const deleteConfirmInfor = useAppSelector(state => state.modal.modalInfors) as IDeleteConfirm


    const handConfirm = () => {
        deleteAction(deleteConfirmInfor.id)
        dispatch(setModalHidden('fading-hidden'))
    }

    const handCancel = () => dispatch(setModalHidden('fading-hidden'))

    return (
        <div className="flex justify-between gap-10">
            <span><Button onClick={handConfirm}>Confirm</Button></span>
            <span><Button isBgWhite onClick={handCancel}>Cancel</Button></span>
        </div>
    )
}