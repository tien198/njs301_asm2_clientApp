
function SignUp() {

    return (
        <div className="flex flex-col items-center justify-center h-96">
            <h3 className="text-4xl font-bold my-6">Sign Up</h3>
            <form className="flex flex-col gap-4">
                <input type="text" name="userName"
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Username" />
                <input type="text" name="password"
                    className="border border-gray-900 h-10 p-4 rounded-sm" placeholder="Password" />
                <button className="bg-blue-600 text-white rounded-md py-3">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignUp;