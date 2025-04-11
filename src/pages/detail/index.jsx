import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Button from '../../components/Button';
import GeneralInfo from './comps/GeneralInfo'
import ImgGallery from './comps/ImgGallery'
import ReserveForm from './comps/reserveForm'

import BackendUri from '../../utilities/enums/backendUri';
import useStoreReserveForm from './store';

const Detail = () => {
  const loader = useLoaderData()
  const [activeForm, setActiveForm] = useState(false)

  const {
    setHotelId
  }  = useStoreReserveForm()

  useEffect(()=>{
    setHotelId(loader._id)
  },[])
  
  return (
    <div className='container mx-auto mt-6 px-5 md:px-7'>
      <GeneralInfo item={loader} />
      <ImgGallery item={loader} />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-10'>
        <div className='col-start-1 col-end-4 flex flex-col gap-5'>
        <h5><strong className='text-3xl font-bold'>{loader.name}</strong></h5>
          <p>{loader.desc}</p>
        </div>
        <div className='bg-blue-100 pt-4 px-3 pb-3 flex flex-col gap-4'>
          {/* <p className='text-gray-600 text-lg font-bold'>Perpect for a 9-night stay!</p> */}
          <p className='text-sm'>Located in the real heart of Krakow, this property has excellent location srore of 9.8!</p>
          <p className='text-2xl font-extralight'><span className='font-bold'>${loader.cheapestPrice}</span> (1 nights)</p>
          <Button
            onClick={() => setActiveForm(true)}
            className='bg-blue-600 text-white rounded py-2 px-5 text-sm font-bold'>
            Reserve or Book Now!
          </Button>
        </div>
      </div>
      {
        activeForm && <ReserveForm hotel={loader} />
      }
    </div>
  );
};

export default Detail;



export async function loader({ params }) {
  const paramName = Object.keys(params)[0]

  try {
    const res = await fetch(BackendUri.hotelDetail + '/' + params[paramName])
    if (res.ok)
      return await res.json()
    return res
  } catch (err) { console.error(err) }
}