import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faFemale } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className='bg-main-color text-white pt-10 pb-20 relative px-5 md:px-7'>
            <div className='container mx-auto flex flex-col gap-8'>
                <h2 className='text-3xl font-semibold'>A lifetime of discounts? It's Genius.</h2>
                <p>Get rewared for your travels - unlocking instant saving of 10% or more with a free account</p>
                <div>
                    <Button label='Sign in/Register' className='bg-blue-500 text-white px-3 py-4' />
                </div>
                <SearchForm />
            </div>
        </div>
    )
}

function SearchForm() {
    const onSubmit = e => {
        e.preventDefault();
    }
    const searchBtn = e => {
        window.location.replace('/search');
    }
    return (
        <form onSubmit={onSubmit} className='absolute  translate-x-1/2 right-1/3 -bottom-14 lg:right-1/2 lg:-bottom-10 bg-white text-zinc-800 rounded-lg border-4 border-yellow-600'>
            <div className='flex justify-around items-center flex-wrap lg:flex-nowrap gap-5 py-2 px-12'>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faBed} className='text-gray-400 ' />
                    <input type='text' placeholder={` Where are you going?`} className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500' />
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faCalendar} className='text-gray-400 ' />
                    <input type='text' pattern='\d{4}-\d{2}-\d{2}' placeholder='2022-06-24 to 2022-06-24' className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500' />
                    {/* placeholder='06/24/2022 to 06/24/2024' */}
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faFemale} className='text-gray-400 ' />
                    <input type='text' placeholder='1 adult - 0 children - 0 room' className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500' />
                </div>
                <div className='flex gap-2 items-center'>
                    <Button label='Search' onClick={searchBtn} className=' bg-blue-600 text-white py-3 px-3' />
                </div>
                {/* <input type='date' min='2022-06-22' max='2024-06-22' placeholder='YYYY-MM-DD' /> */}
            </div>
        </form>
    )
}

