import { useEffect, useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";

import ErrorMsg from "./comps/ErrorMsg";

import { addJwt } from "../../utilities/localStorageUtils/authenToken";
import BackendUri from "../../utilities/enums/backendUri";
import store from '../../store'

function Login() {
    const actionData = useActionData()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [credentialError, setCredentialError] = useState('')

    useEffect(() => {
        if (actionData && actionData.errors && actionData.errors.credential)
            setCredentialError(actionData.errors.credential)
    }, [actionData])
    useEffect(() => {
        setCredentialError('')
    }, [userName, password])

    return (
        <div className="flex flex-col items-center mt-20 h-96">
            <h3 className="text-4xl font-bold my-6">Login</h3>
            <Form method="post" className="flex flex-col gap-4">
                <input type="text" name="userName"
                    value={userName} onChange={e => setUserName(e.target.value)}
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Username" />
                <input type="password" name="password"
                    value={password} onChange={e => setPassword(e.target.value)}
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Password" />
                {credentialError && <ErrorMsg msg={credentialError} />}
                <button className="bg-blue-600 text-white rounded-md py-3">
                    Login
                </button>
            </Form>
        </div>
    );
}

export default Login;



export async function action({ request }) {
    const formData = Object.fromEntries((await request.formData()).entries())
    try {
        const res = await fetch(BackendUri.login, {
            method: request.method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        if (!res.ok)
            return res

        const tokenVsPayload = await res.json()
        addJwt(tokenVsPayload)

        store.dispatch({
            type: 'authen/setAuthen',
            payload: tokenVsPayload.user
        })

        return redirect('/')
    } catch (err) { console.error(err) }
}