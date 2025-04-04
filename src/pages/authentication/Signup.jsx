import { Form, redirect, useActionData } from "react-router-dom";
import { addJwt } from "../../utilities/localStorageUtils/authenToken";
import BackendUri from "../../utilities/enums/backendUri";

function SignUp() {
    const actionData = useActionData()
    console.log(actionData)
    return (
        <div className="flex flex-col items-center justify-center h-96">
            <h3 className="text-4xl font-bold my-6">Sign Up</h3>
            <Form method="post" className="flex flex-col gap-4">
                <input type="text" name="userName"
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Username" />
                <input type="text" name="password"
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Password" />
                <button className="bg-blue-600 text-white rounded-md py-3">
                    Create Account
                </button>
            </Form>
        </div>
    );
}

export default SignUp;

export async function action ({ request }) {
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
        addJwt(await response.json())
        return redirect('/')
    } catch (err) { console.error(err) }
    return null
}

