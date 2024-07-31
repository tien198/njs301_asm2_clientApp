import React, { useState } from 'react';
import Button from '../../components/Button';
import ImgCard from '../../components/Imgcard';
// Data to display
import dataSearched from '../../../data/search.json';
import styles from './Search.module.css';
import { Link } from 'react-router-dom';

const Search = () => {

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto mt-6'>
        <div>
          <SearchDiv />
        </div>
        {/* responsive lg:col-start-2 lg:col-end-5 */}
        <div className='lg:col-start-2 lg:col-end-5 flex flex-col gap-3'>
          {
            dataSearched.map(data => {
              return <SearchedItem item={data} key={data.image_url} />
            })
          }
        </div>
      </div>
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

function SearchedItem({ item }) {
  return (
    <div className={`grid ${styles['grid-search-item']} items-center gap-4 p-3 rounded-lg border`}>
      <ImgCard imgUrl={item.image_url} imgAlt={item.name} />
      {/* <div style={{ backgroundImage: `url(${item.image_url})` }} className='bg-cover h-full w-full' ></div> */}
      <SearchedItemSecondCol item={item} />
      <SearchedItemThirdCol item={item} />
    </div>
  );
}

function SearchedItemSecondCol({ item }) {
  const freeCancel = item.free_cancel ?
    [
      <strong className='text-green-600' key={1}>Free cancellation</strong>,
      <p className='text-green-600' key={2}>You can cancel later, so lock in this great price today!</p>
    ] : null;

  return (
    <div className='flex flex-col h-full gap-1 justify-between'>
      <h3 className='text-xl font-semibold lg:font-bold text-blue-600'>{item.name}</h3>
      <p>{item.distance} from center</p>
      <p><span className='bg-green-600 text-white rounded p-1'>{item.tag}</span></p>
      <p className='font-semibold'>{item.description}</p>
      <p>{item.type}</p>
      {freeCancel}
    </div>
  );
}

function SearchedItemThirdCol({ item }) {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex justify-between'>
        <span className='text-lg font-semibold'>{item.rate_text}</span>
        <span className='bg-main-color text-white p-1'>{item.rate}</span>
      </div>
      <div className='flex flex-col items-end gap-2'>
        <span className='text-3xl font-semibold'>$ {item.price}</span>
        <span className='text-gray-500 text-sm'>Include taxes and fees</span>
        <Link to='/detail/1'>
          <Button label='See availability' className='bg-blue-600 text-white hover:bg-blue-800 font-semibold rounded-md py-3 px-8' />
        </Link>
      </div>
    </div>
  );
}