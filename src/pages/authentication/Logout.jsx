import { redirect } from 'react-router-dom'
import { removeJwt } from '../../utilities/localStorageUtils/authenToken'
import store from '../../store'
import { resetAuthen } from '../../store/slices/authenSlice'

export function action() {
    removeJwt()

    store.dispatch(resetAuthen())

    return redirect('/')
}