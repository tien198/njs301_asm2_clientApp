import { useEffect } from "react";
import { createPortal } from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { setModalHidden as fadingHide } from "../../store/slices/modalSlice";
import { FaXmark } from 'react-icons/fa6'

// css
import classes from './Modal.module.css'


export function useHideModal() {
    const dispath = useDispatch()
    return () => {
        dispath(fadingHide('fading-hidden'))
    }
}

function Modal({ children }) {
    const hidden = useSelector(state => state.modal.hiddenClass)

    const hide = useHideModal()

    useEffect(() => {
        function handKeyDown(e) {
            if (e.key === 'Escape')
                hide()
        }

        window.addEventListener('keydown', handKeyDown)

        // cleanup
        return () => window.removeEventListener('keydown', handKeyDown)
    }, [])

    return createPortal(
        <div className={hidden}>
            <div className={classes['backdrop']} onClick={hide}></div>
            <div className={`${classes['modal']} `}>
                <FaXmark onClick={hide} className="fixed top-4 right-10 text-3xl lg:top-7 lg:text-4xl hover:cursor-pointer" />
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;