import Button from '../../../components/Button';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';

import SearchForm from './BannerSearchForm';

export default function Banner() {

    // Set hidden DateRange and overlay to trigger visibe
    const [dateRangeHidden, setDateRangeHidden] = useState(false);
    const hiddenClass = dateRangeHidden ? '' : 'hidden';

    // eslint-disable-next-line no-unused-vars
    const setDateHidden = e => {
        setDateRangeHidden(!dateRangeHidden)
    }

    return (
        <div className='bg-main-color text-white pt-10 pb-52 md:pb-20 relative px-5 md:px-7'>
            <div className='container mx-auto flex flex-col gap-8'>
                <h2 className='text-3xl font-semibold'>A lifetime of discounts? It's Genius.</h2>
                <p>Get rewared for your travels - unlocking instant saving of 10% or more with a free account</p>
                <div>
                    <Button label='Sign in/Register' className='bg-blue-500 text-white px-3 py-4' />
                </div>
                <SearchForm setDateHidden={setDateHidden} hiddenClass={hiddenClass} />
            </div>
            <div className={`${hiddenClass} fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-screen h-screen z-40`} onClick={setDateHidden}></div>

        </div>
    )
}
