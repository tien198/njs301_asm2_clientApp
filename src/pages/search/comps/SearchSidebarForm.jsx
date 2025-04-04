import { Form, useLocation } from 'react-router-dom'
import Button from '../../../components/Button'

export default function SearchSidebarForm() {
    const { destination = '', dateRange = '', options = {} } = useLocation().state || {}

    return (
        <div className='bg-yellow-500 pt-4 pb-3 px-2 rounded-md'>
            <p className='text-gray-800 text-xl font-semibold mb-4'>Search</p>
            <Form method='post'>
                <div className='flex flex-col items-start gap-4'>
                    <div className='w-full'>
                        Destination
                        <input type="text" name='city' defaultValue={destination} className='block w-full p-2 outline-none' />
                    </div>
                    <div className='w-full'>
                        Check-in Date
                        <input type="text" name='checkInDate' defaultValue={dateRange} placeholder='06/24/2022 to 06/24/2022' className='block w-full p-2 outline-none' />
                    </div>
                    <div className='w-full'>
                        Options
                        <div className='flex flex-col gap-2 container text-gray-800'>
                            <div className='flex justify-between mx-4'>
                                <span>Min price per night</span>
                                <input type='number' name='minPrice' className='max-w-20 border border-gray-500 p-1' />
                            </div>
                            <div className='flex justify-between mx-4'>
                                <span>Max price per night</span>
                                <input type='number' name='maxPrice' className='max-w-20 border border-gray-500 p-1' />
                            </div>
                            <div className='flex justify-between mx-4'>
                                <span>Adult</span>
                                <input type='number' name='adult' defaultValue={options.adult} placeholder='1' className='max-w-20 border border-gray-500 p-1' />
                            </div>
                            <div className='flex justify-between mx-4'>
                                <span>Children</span>
                                <input type='number' name='children' defaultValue={options.children} placeholder='0' className='max-w-20 border border-gray-500 p-1' />
                            </div>
                            <div className='flex justify-between mx-4'>
                                <span>Room</span>
                                <input type='number' name='roomsTotal' defaultValue={options.room} placeholder='1' className='max-w-20 border border-gray-500 p-1' />
                            </div>
                        </div>
                    </div>
                    <Button className='w-full bg-blue-600 text-white py-3 mt-7' >
                        Search
                    </Button>
                </div>
            </Form>
        </div>
    )
}