import { useNavigate } from "react-router"
import Modal from "./Modal"
import Button from "../Button"
import { useDispatch, useSelector } from "react-redux"
import { setModalHidden } from "../../store/slices/modalSlice"
import { AuthenURI_Absolute } from "../../utilities/enums/clientAppUri"


export default function ErrorModal() {
    const errorRes = useSelector(state => state.modal.modalInfors) // ErrorResponse

    return (
        <Modal>
            <div className="w-full p-10 shadow flex flex-col items-center justify-center gap-7">
                <span className="text-lg font-bold">{errorRes.status}</span>
                <span>{errorRes.message}</span>
                {errorRes.status === 401 && <ModalAction />}
            </div>
        </Modal>
    )
}


function ModalAction() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handLogIn = () => {
        dispatch(setModalHidden('fading-hidden'))
        navigate(AuthenURI_Absolute.login)
    }

    const handCancel = () => dispatch(setModalHidden('fading-hidden'))

    return (
        <div className="flex justify-between gap-10">
            <span><Button onClick={handLogIn}>Log In</Button></span>
            <span><Button isBgWhite onClick={handCancel}>Cancel</Button></span>
        </div>
    )
}