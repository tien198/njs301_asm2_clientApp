import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faFemale } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// react-date-range
import { DateRange } from 'react-date-range';

import Button from '../Button';


export default function SearchForm({ setDateHidden, hiddenClass }) {
    const onSubmit = e => {
        e.preventDefault();
    }

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    function dateStr(date) {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
    function convertDateRangeToString(date) {
        return `${dateStr(date[0].startDate)} to ${dateStr(date[0].endDate)}`;
    }
    function convertStringToDateRange(str) {
        const d = str.split(' to ');
        return [{
            startDate: new Date(d[0]),
            endDate: new Date(d[1]),
            key: 'selection'
        }]
    }

    const [dateVal, setDateVal] = useState(convertDateRangeToString(date));

    const onSetDateVal = e => {
        setDateVal(e.target.value);
        setDate(convertStringToDateRange(e.target.value))
    }

    const onSetDate = e => {
        setDate([e.selection]);
        setDateVal(convertDateRangeToString([e.selection]));
    }

    // const hiddenClass = '';
    // const searchBtn = e => {
    //     window.location.replace('/search');
    // }
    return (
        <form onSubmit={onSubmit} className='absolute translate-x-1/2 right-1/2 -bottom-14 lg:right-1/2 lg:-bottom-10 bg-white text-zinc-800 rounded-lg border-4 border-yellow-600 z-50'>
            <div className='flex justify-around items-center flex-wrap lg:flex-nowrap gap-5 py-2 px-12'>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faBed} className='text-gray-400 ' />
                    <input type='text' placeholder={` Where are you going?`} className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500' />
                </div>
                <div className='flex gap-2 items-center relative z-50' onClick={setDateHidden}>
                    <FontAwesomeIcon icon={faCalendar} className='text-gray-400 ' />
                    <input type='text' value={dateVal} onChange={onSetDateVal} pattern='\d{4}-\d{2}-\d{2} to \d{4}-\d{2}-\d{2}' placeholder='2022-06-24 to 2022-06-24' className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500 relative   ' />
                    {/* placeholder='06/24/2022 to 06/24/2024' */}
                </div>
                <DateRange
                    editableDateInputs={true}
                    onChange={onSetDate}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
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
