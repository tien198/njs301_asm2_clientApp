import { useState, useEffect } from "react";
import { Form, redirect, useActionData } from "react-router-dom";

import ErrorMsg from './comps/ErrorMsg'

import { addJwt } from "../../utilities/localStorageUtils/authenToken";
import BackendUri from "../../utilities/enums/backendUri";

import store from '../../store'



function SignUp() {
    const actionData = useActionData()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [userNameError, setUserNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    useEffect(() => {
        if (actionData && actionData.errors && actionData.errors.userName)
            setUserNameError(actionData.errors.userName)
        if (actionData && actionData.errors && actionData.errors.password)
            setPasswordError(actionData.errors.password)
    }, [actionData])
    useEffect(() => setUserNameError(''), [userName])
    useEffect(() => setPasswordError(''), [password])

    return (
        <div className="flex flex-col items-center mt-20 h-96">
            <h3 className="text-4xl font-bold my-6">Sign Up</h3>
            <Form method="post" className="flex flex-col gap-4 w-80">
                <input type="text" name="userName"
                    value={userName} onChange={e => setUserName(e.target.value)}
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Username" />
                {userNameError && <ErrorMsg msg={userNameError} />}

                <input type="password" name="password"
                    value={password} onChange={e => setPassword(e.target.value)}
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Password" />
                {passwordError && <ErrorMsg msg={passwordError} />}

                <button className="bg-blue-600 text-white rounded-md py-3">
                    Create Account
                </button>
            </Form>
        </div>
    );
}

export default SignUp;

export async function action({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())
    try {
        const response = await fetch(BackendUri.signUp, {
            method: request.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (!response.ok)
            return await response.json()

        const tokenVsPayload = await response.json()
        addJwt(tokenVsPayload)

        store.dispatch({
            type: 'authen/setAuthen',
            payload: tokenVsPayload.user
        })

        return redirect('/')
    } catch (err) { console.error(err) }
    return null
}

