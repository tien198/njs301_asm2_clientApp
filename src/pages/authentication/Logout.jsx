import { redirect } from 'react-router-dom'
import { removeJwt } from '../../utilities/localStorageUtils/authenToken'
import store from '../../store'

export function action() {
    removeJwt()

    store.dispatch({
        type: 'authen/resetAthen',
    })

    return redirect('/')
}