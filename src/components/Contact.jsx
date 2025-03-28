import { useState } from 'react';

function RegisterForm() {
    const [emailVal, setEmailVal] = useState('');
    const onEmailChange = e => setEmailVal(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        setEmailVal('');
    }

    return (
        <div className='bg-main-color text-white pt-24 pb-12 text-center'>
            <p className='mb-7 text-5xl font-semibold'>Save time, save money</p>
            <p className='mb-4'>Sign up and we'll send the best deals to you</p>
            <form onSubmit={onSubmit}>
                <input type='text' value={emailVal} onChange={onEmailChange} placeholder='Your Email' className='text-gray-800 mr-3 p-2 border-none outline-none rounded' />
                <button type='submit' className='bg-blue-500 p-2 rounded'>Subcribe</button>
            </form>
        </div >
    );
}

export default RegisterForm;