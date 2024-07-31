import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faFemale } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// react-date-range
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';

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

    const [dateRangeHidden, setDateRangeHidden] = useState(false);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    const setDateHidden = e => {
        setDateRangeHidden(prev => {
            if (prev) return false;
            return true;
        })
    }
    const setDate = e => {
        console.log(e.selection);
        setState([e.selection])

    }
    const hiddenClass = dateRangeHidden ? 'hidden' : '';
    // const hiddenClass = '';
    // const searchBtn = e => {
    //     window.location.replace('/search');
    // }
    return (
        <form onSubmit={onSubmit} className='absolute  translate-x-1/2 right-1/3 -bottom-14 lg:right-1/2 lg:-bottom-10 bg-white text-zinc-800 rounded-lg border-4 border-yellow-600 z-50'>
            <div className='flex justify-around items-center flex-wrap lg:flex-nowrap gap-5 py-2 px-12'>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faBed} className='text-gray-400 ' />
                    <input type='text' placeholder={` Where are you going?`} className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500' />
                </div>
                <div className='flex gap-2 items-center relative z-50' onClick={setDateHidden}>
                    <FontAwesomeIcon icon={faCalendar} className='text-gray-400 ' />
                    <input type='text' pattern='\d{4}-\d{2}-\d{2}' placeholder='2022-06-24 to 2022-06-24' className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500 relative   ' />
                    {/* placeholder='06/24/2022 to 06/24/2024' */}
                </div>
                <DateRange
                    editableDateInputs={true}
                    onChange={setDate}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className={`absolute top-12  ${hiddenClass}`} minDate={new Date(2022, 1, 1)} maxDate={new Date(Date.now())} />
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faFemale} className='text-gray-400 ' />
                    <input type='text' placeholder='1 adult - 0 children - 0 room' className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500' />
                </div>
                <div className='flex gap-2 items-center'>
                    <Link to='search'>
                        <Button label='Search' className=' bg-blue-600 text-white py-3 px-3' />
                    </Link>
                </div>
                {/* <input type='date' min='2022-06-22' max='2024-06-22' placeholder='YYYY-MM-DD' /> */}
            </div>
        </form>
    )
}

