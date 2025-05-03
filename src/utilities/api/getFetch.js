import store from "../../store"
import { reInitState } from "../../store/slices/modalSlice"

export default function getFetch(uri) {
   
    return fetch(uri)
        .then(res => {
            if (res.ok)
                return res.json()

            return res.json()
                .then(err => { throw err })
        }
        ).catch(err => {
            console.error(err)
            store.dispatch(reInitState({
                hiddenClass: '',
                modalInfors: err,
                type: 'error'
            }))
            return Promise.resolve(undefined)
        })
}