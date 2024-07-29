import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
// Data to display
import dataSearched from '../../../data/search.json';
import styles from './Search.module.css';

const Search = () => {
  const [imgHeigh, setImgHeigh] = useState('10px');

  const onSetImgHeigh = e => {
    setImgHeigh(e.currentTarget.offsetWidth + 'px')

    // setImgHeigh(prev => {
    // console.log(e.currentTarget.offsetWidth);
    // return e.currentTarget.offsetWidth;
    // });
  }
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto mt-6'>
        <SearchDiv />
        {/* responsive lg:col-start-2 lg:col-end-5 */}
        <div className='lg:col-start-2 lg:col-end-5'>
          <div className={`grid ${styles['grid-search-item']} p-3 rounded-lg border`}>
            <div style={{ backgroundImage: `url(${dataSearched[0].image_url})`, height: imgHeigh }} className='w-full bg-cover' onClick={onSetImgHeigh} ></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Search;

function SearchDiv() {
  return (
    <div className='bg-yellow-500 pt-4 pb-3 px-2 rounded-md'>
      <p className='text-gray-800 text-xl font-semibold mb-4'>Search</p>
      <form>
        <div className='flex flex-col items-start gap-4'>
          <div className='w-full'>
            Destination
            <input type="text" className='block w-full p-2 outline-none' />
          </div>
          <div className='w-full'>
            Check-in Date
            <input type="text" placeholder='06/24/2022 to 06/24/2022' className='block w-full p-2 outline-none' />
          </div>
          <div className='w-full'>
            Options
            <div className='flex flex-col gap-2 container text-gray-800'>
              <div className='flex justify-between mx-4'>
                <span>Min price per night</span>
                <input type='number' className='max-w-20 border border-gray-500 p-1' />
              </div>
              <div className='flex justify-between mx-4'>
                <span>Max price per night</span>
                <input type='number' className='max-w-20 border border-gray-500 p-1' />
              </div>
              <div className='flex justify-between mx-4'>
                <span>Adult</span>
                <input type='number' placeholder='1' className='max-w-20 border border-gray-500 p-1' />
              </div>
              <div className='flex justify-between mx-4'>
                <span>Children</span>
                <input type='number' placeholder='0' className='max-w-20 border border-gray-500 p-1' />
              </div>
              <div className='flex justify-between mx-4'>
                <span>Room</span>
                <input type='number' placeholder='1' className='max-w-20 border border-gray-500 p-1' />
              </div>
            </div>
          </div>
          <Button label='Search' className='w-full bg-blue-600 text-white py-3 mt-7' />
        </div>
      </form>
    </div>
  )
}
