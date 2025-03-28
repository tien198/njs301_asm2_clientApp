import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faFemale } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// react-date-range
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'

import Button from '../../../components/Button';

import BannerSearchForm_Options from './BannerSearchForm_Options';


function convertDateRangeToString(date) {
    return `${format(date[0].startDate, 'yyyy/MM/dd')} to ${format(date[0].endDate, 'yyyy/MM/dd')}`;
}

function convertStringToDateRange(str) {
    const d = str.split(' to ');
    return [{
        startDate: new Date(d[0]),
        endDate: new Date(d[1]),
        key: 'selection'
    }]
}

export default function SearchForm({ setDateHidden, hiddenClass }) {
    const navigate = useNavigate()

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [dateVal, setDateVal] = useState(convertDateRangeToString(date));

    function onSetDateInputVal(e) {
        setDateVal(e.target.value);
        setDate(prev => {
            let dateRange = convertStringToDateRange(e.target.value)
            const defRange = dateRange[0]
            if (!(defRange.startDate.toString() == 'Invalid Date') && !(defRange.endDate.toString() == 'Invalid Date'))
                return dateRange
            else
                return prev
        })
    }
    function onSetDateBox(e) {
        setDate([e.selection]);
        setDateVal(convertDateRangeToString([e.selection]));
    }

    const [destination, setDestination] = useState('')
    function onSubmit(e) {
        e.preventDefault();
        const dateRangeVal = convertDateRangeToString(date)
        navigate('/search', { state: { destination, dateRangeVal } })
    }

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    function handleOption(name, operation) {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    return (
        <form onSubmit={onSubmit} className='absolute translate-x-1/2 right-1/2 -bottom-14 lg:right-1/2 lg:-bottom-10 bg-white text-zinc-800 rounded-lg border-4 border-yellow-600 z-50'>
            <div className='flex justify-around items-center flex-wrap lg:flex-nowrap gap-5 py-2 px-12'>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faBed} className='text-gray-400 ' />
                    <input type='text' placeholder={` Where are you going?`}
                        className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500'
                        value={destination} onChange={e => setDestination(e.target.value)} />
                </div>

                <div className='flex gap-2 items-center relative z-50' onClick={setDateHidden}>
                    <FontAwesomeIcon icon={faCalendar} className='text-gray-400 ' />
                    {/* <input type='text' value={dateVal} onChange={onSetDateInputVal} pattern='\d{4}/\d{2}/\d{2} to \d{4}/\d{2}/\d{2}' placeholder='2022-06-24 to 2022-06-24' className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500 relative   ' /> */}
                    <input type='text' className='p-1 focus: outline-none focus:border-b focus:border-b-slate-500 relative'
                        value={dateVal} onChange={onSetDateInputVal} />
                </div>
                <DateRange
                    editableDateInputs={true}
                    onChange={onSetDateBox}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className={`absolute top-12  ${hiddenClass}`} minDate={new Date(2022, 1, 1)} maxDate={new Date(Date.now())} />

                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faFemale} className='text-gray-400 ' />

                    <span onClick={() => setOpenOptions(!openOptions)}
                        className="headerSearchText">
                        {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                    </span>
                    {openOptions &&
                        <BannerSearchForm_Options options={openOptions} handleOption={handleOption} />
                    }
                </div>

                <div className='flex gap-2 items-center'>
                    {/* <Link to='search'> */}
                    <Button label='Search' className=' bg-blue-600 text-white py-3 px-3' />
                    {/* </Link> */}
                </div>
                {/* <input type='date' min='2022-06-22' max='2024-06-22' placeholder='YYYY-MM-DD' /> */}
            </div>
        </form>
    )
}
